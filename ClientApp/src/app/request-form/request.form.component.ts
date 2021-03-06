import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PEDataService, Rate } from '../shared/services/pedata.service';
import { SQLDataService } from '../shared/services/sqldata.service';
import { SubmitFormService } from '../shared/services/submit.form.service';

import { Session, DateRange, ClassLoc, SpecialFee, CodeNamePair } from '../shared/models/Request.Form.Model';
import { Request } from '../shared/models/Revisions.Model';

import { RequestHistoryComponent } from '../request-history/request.history.component';

const GRADELEVEL = [
  { code: null, name: null },
  { code: "G", name: "Graduate" },
  { code: "U", name: "Undergraduate" },
  { code: "B", name: "All" }
];

const ENROLLMENTTYPES = [
  { code: null, name: null },
  { code: "FULL", name: "Full Load" },
  { code: "HALF", name: "Half Load" },
  { code: "NONE", name: "Not Enrolled" }
];

const MAX_SESSION_BREAKS = 2;

enum SPEC_FEE_FIELD {
  GET_FROM_FORM,                 // All values will come from the Special Fee Array
  CODE,
  POPULATION,
  ENROLLMENT
}

enum DATE_RANGE_CHECK {
  ALL_DATES_OK,                     // Both start and end dates are good.
  NO_START_DATE,                    // No start date provided.
  NO_END_DATE,                      // No end date provided.
  START_DATE_BEFORE_FIRST_DAY,      // Start date is earlier than the First Day of Classes
  START_DATE_AFTER_LAST_DAY,        // Start date is later than the Last Day of Classes
  END_DATE_BEFORE_FIRST_DAY,        // End date is earlier than the First Day of Classes
  END_DATE_AFTER_LAST_DAY,          // End Date is later than the Last Day of Classes
  END_DATE_BEFORE_START_DATE        // End Date is before the Start Date
}

class Error {

  code: number;
  message: string;

}

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html',
  styleUrls: ['./request.form.component.css']
})

export class RequestFormComponent implements OnInit, OnDestroy{

  pageTitle: string = "Session Request Form";

  public MAXUNITS: number = 100;
  public SPEC_FEE_FIELD = SPEC_FEE_FIELD;
  public GradeLevel: any[] = GRADELEVEL;
  public EnrollTypes: any[] = ENROLLMENTTYPES;

  public UscCampuses    : CodeNamePair[] = [];
  public SpecialFeeList : CodeNamePair[] = [];
  public TermRates      : Rate[] = [];
  public SessionCodes   : CodeNamePair[] = [];
  public Semesters      : CodeNamePair[];
  public CampusNameArray: CodeNamePair[] = [];
  public Session001Dates: any;
  public showPerUnitBox : boolean = false;
  public formIsValid    : boolean = true;
  public haveSessionBreaks: string = null;
  public disableUnitRange : boolean = false;
  public requireFlatRateFields: boolean = false;
  public modifyMode: boolean = false;

  public session: Session;
  
  public formError: any = {
    general: "Please fill in the highlighted fields then click Next",
    classDates: null,
    finalsDates: null,
    sessionBreaks: null,
    locations: null,
    rates: null,
    specialFees: null,
    comments: null
  };

  private semester: string = null;
  private sessionCode: string = null;
  private preLoadValues: boolean = false;
  private subscribe: any;
  
  constructor(

    private peDataService: PEDataService,
    private sqlDataService: SQLDataService,
    private submitFormService: SubmitFormService,
    private route: ActivatedRoute,

  ) {

    this.Semesters = this.peDataService.getActiveTerms();       // pre-populate the Semester dropdown
    this.UscCampuses = this.peDataService.getCampusLocations(); // pre-populate the Campus Location dropdown
    this.SessionCodes = this.peDataService.getSessionCodes();   // pre-populate the Session Codes dropdown

  } // constructor()


  ngOnInit() {

    this.session = new Session();

    this.subscribe = this.route.params.subscribe(params => {
      this.semester = params['term'];
      this.sessionCode = params['sessioncode'];
    });

    if ((this.semester > '') && (this.sessionCode > '')) {
      this.preLoadValues = true;
      this.PreLoadTheForm(this.semester.toString(), this.sessionCode);
      this.preLoadValues = false;
      this.modifyMode = true;
    }

    //this.peDataService.getCampusLocations().subscribe(locations => {
    //  this.UscCampuses = locations;
    //});

    for (var i = 0; i < this.UscCampuses.length; ++i){
      this.CampusNameArray[i] = this.UscCampuses[i];
    }

    if (this.session.classLocations.length == 0) {
      this.session.classLocations.push(new ClassLoc());
    }

  }   // ngOnInit()

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private PreLoadTheForm(term: string, sessCode: string): void {

    var request: Request = this.sqlDataService.getCurrentRevByReqID(term, sessCode);

    this.session = new Session(request);

    if (this.session.academicTerm.code > '') {                           // if existing request exists,

      var term: string = this.session.academicTerm.code;

      this.TermRates = this.peDataService.getTermTuitionRates(term);    // get the term-related rates

      var FeeList = this.peDataService.getSpecialFeeList(term);         // get the term-related special fees 
      this.SpecialFeeList = this.formSpecialFeeArray(term, FeeList);

      if (this.session.dates.sessionBreaks.length > 0) {
        this.haveSessionBreaks = 'Yes';
      }

      this.RateSelected(this.session.rateType);

    }
  }   // PreLoadTheForm()

  
  public AddClassLocation(selectedCampus: string) {

    var campus = this.UscCampuses.filter(location => location.name === selectedCampus);

    var newLocation = new ClassLoc();

    this.session.classLocations.push(newLocation);

    if (this.session.classLocations.length == 1) {    // if there is only 1 location, assign the start and end dates
      // to be the first and last day of classes respectively.
      this.session.classLocations[0].startDate = this.session.dates.firstDayOfClass;
      this.session.classLocations[0].endDate = this.session.dates.lastDayOfClass;

    } else {    // require the start and end dates only when there are more than 1 location

      if ((this.session.classLocations[0].startDate == this.session.dates.firstDayOfClass) &&
          (this.session.classLocations[0].endDate == this.session.dates.lastDayOfClass)) {
        this.session.classLocations[0].startDate = null;
        this.session.classLocations[0].endDate = null;
      }

    }
  }   // AddClassLocation()


  public DeleteClassLocation(idx) {               // Delete a Class Location Entry

    this.session.classLocations.splice(idx, 1);
    if (this.session.classLocations.length == 1) {
      this.session.classLocations[0].startDate = this.session.dates.firstDayOfClass;
      this.session.classLocations[0].endDate = this.session.dates.lastDayOfClass;
    }

  }   // DeleteClassLocation()


  public AddSessionBreak(haveBreaks: boolean): void {

    if (haveBreaks) {

      if (this.session.dates.sessionBreaks.length < MAX_SESSION_BREAKS) {

        for (var i = 0; i < MAX_SESSION_BREAKS; ++i) {

          var newBreak = new DateRange();
          this.session.dates.sessionBreaks.push(newBreak);
        }
      }

      this.haveSessionBreaks = 'Yes';

    } else {

      this.session.dates.sessionBreaks = [];
      this.haveSessionBreaks = 'No';

    } // if (haveBreaks)

  }     // AddSessionBreak()


  public DeleteSessionBreak(idx) {

    this.session.dates.sessionBreaks.splice(idx, 1);

    if (this.session.dates.sessionBreaks.length < 1) {
      this.haveSessionBreaks = null;
    }

    this.AreSessionBreaksOK();    // validate the remaining Session Breaks 
                                  // and reset the Session Break errors
  }   // DeleteSessionBreak()


  public AddSpecialFee() {

    var newFee = new SpecialFee();

    this.session.specialFees.push(newFee);

  } // AddSpecialFee()


  public DeleteThisFee(feeIndex: number): void {       // deletes a Special Fee entry

    this.session.specialFees.splice(feeIndex, 1);

    this.AreSpecialFeesOK();                          // check the remaining fees

    return;
  }   // DeleteThisFee()


  public filterSessionCodes(codes) {
    this.SessionCodes = this.peDataService.getSessionCodes()
      .filter((sCodes) => sCodes.name.toLowerCase().indexOf(codes.toLowerCase()) !== -1);
  }   // filterSessionCodes()


  public filterCampusLocation(campuses) {   // limit the list as the user types
    this.UscCampuses = this.peDataService.getCampusLocations()
      .filter((locations) => locations.name.toLowerCase().indexOf(campuses.toLowerCase()) !== -1);
  }   // filterCampusLocation()


  private formSpecialFeeArray(acadTerm: string, feeList: any): CodeNamePair[] {

    var specFeeArray: any[] = [];
    var feeName: string = "";
    var feeCode: string = "";

    var term = acadTerm.toString();   // because it will error out without this

    for (var i = 0; i < feeList.length; ++i) {

      feeName = this.CleanupFeeName(term, feeList[i]);
      feeCode = feeName.substring(0, feeName.indexOf(' '));
      var newCode = new CodeNamePair(feeCode, feeName);
      specFeeArray.push(newCode);

    }

    return specFeeArray;
  }   // formSpecialFeeArray()


  private CleanupFeeName(term: string, feeDesc: string): string {

    var acadYear = term.slice(0, 4); // acadTerm.slice(0, 4);
    var termPrefix = term[term.length - 1]; // get the last digit (e.g. 20183 => '3')
    var termAbbrev = "";

    switch (termPrefix) {
      case '1':
        termAbbrev = "Sp" + acadYear;
        break;
      case '2':
        termAbbrev = "Su" + acadYear;
        break;
      case '3':
        termAbbrev = "Fa" + acadYear;
        break;
      default:
        break;
    }

    var cleanStr: string = feeDesc.replace('- ' + acadYear , '');

    cleanStr = cleanStr.replace(acadYear, '');
    
    return cleanStr;

  }   // CleanupFeeName()


  private ResetRateFields() {

    this.session.rateType.code = null;
    this.session.rateType.description = null;

    this.session.rateType.flatRate = null;
    this.session.rateType.unitRate = null;

    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;

  }   // ResetRateFields()


  public TermSelected(selectedTerm: any) {    // when the user selects a term in the Semester dropdown

    var term: string = selectedTerm.code;
    this.TermRates = this.peDataService.getTermTuitionRates(term);
    this.ResetRateFields();

    var FeeList = this.peDataService.getSpecialFeeList(term);
    this.SpecialFeeList = this.formSpecialFeeArray(term, FeeList);

  }   // TermSelected()
  
  //public filterSpecialFees(feeList) {
  //  this.SpecialFeeList = this.peDataService.getSpecialFeeList()
  //    .filter((sFees) => sFees.sessionDesc.toLowerCase().indexOf(feeList.toLowerCase()) !== -1);
  //}
  

  public ConfirmData(): void {    // validates the entered values by the user
                                  // and sends the data to the confimation page 
    console.log(this.session);    // when all values are good.

    if (this.IsFormValid()) {

      this.submitFormService.cacheSubmittedFields(this.session);    // go to confirmation page to view submitted fields

    } else {

      this.formIsValid = false;
      this.formError.general = "Please correct or fill-in the highlighted fields.";
    } // else

  } // FormSubmitted()
  

  private AreClassLocationsOK(): boolean {

    var classLocs = this.session.classLocations;
    var locationsGood = true;

    if (classLocs.length == 1) {

      if (classLocs[0].campus.code == null) {

        locationsGood = false;

      } else {  // if only one class location provided
                // start and end date is assumed to be class start and end dates
        this.session.classLocations[0].startDate = this.session.dates.firstDayOfClass;
        this.session.classLocations[0].endDate = this.session.dates.lastDayOfClass;

      }

    } else {                    // more than one location provided

        for (var i = 0; i < classLocs.length; ++i) {

          if (classLocs[i].campus.code == null) {   // if a location is not provided
            this.formError.locations = "Please provide all Class Locations.";
            locationsGood = false;                       
            break;              

          } else {

            switch (true) {

              case (classLocs[i].startDate == null):    // if start date is blank
                this.formError.locations = "Please provide a start date for Class Location: " + classLocs[i].campus.name;
                locationsGood = false;
                break;

              case (classLocs[i].endDate == null):      // if end date is blank
                this.formError.locations = "Please provide an end date for Class Location: " + classLocs[i].campus.name;
                locationsGood = false;
                break;

              default:                                      // if both start and end dates are provided
                locationsGood = this.LocationDateValid(i);  // validate the dates
                                                            // Note: locations formError is set in LocationDateValid
                break;
            }

            if (!locationsGood) {
              break;    //break the for-loop
            }
          } // else
        } // for (var...
    } // else (classLocs[i]

    if (locationsGood) {
      this.formError.locations = null;
    }

    return locationsGood;

  }   // AreClassLocationsGood()


  private AreSpecialFeesOK(): boolean {

    var specialFeesOK: boolean = true;

    for (var i = 0; i < this.session.specialFees.length; ++i) {
      if (!this.SpecialFeeValid(i, SPEC_FEE_FIELD.GET_FROM_FORM, null)){
        specialFeesOK = false;
        break;
      }
    }

    if (specialFeesOK) {
      this.formError.specialFees = null;
    }
    return specialFeesOK;
  }   // AreSpecialFeesOK()


  private AreCommentsOK(): boolean {

    var commentsOK: boolean = true;
    var campusCode: string = null;

    for (var i = 0; i < this.session.classLocations.length; ++i) {

      campusCode = this.session.classLocations[i].campus.code;

      if (campusCode == 'OTH') {

        var trimmedComment = (this.session.comments);

        if (trimmedComment.length == 0) {
          this.formError.comments = "Comments are required Others is indicated as a class location.";
          commentsOK = false;
          break;
        }
      } // if (campusCode)
    } // for()

    if (commentsOK) {
      this.formError.comments = '';
    }

    return commentsOK;

  } // AreCommentsOK()


  private IsFormValid(): boolean {

    var formValid: boolean = null;

    switch (true) {   // Check minimal required fields

      case (this.session.academicTerm.code == null):                // Academic Term blank?
      case (this.session.session.code == null):                     // Session Code blank?
      case (this.session.dates.firstDayOfClass == null):            // First Day of Classes blank?
      case (this.session.dates.lastDayOfClass == null):             // Last Day of Classes blank?
      case (this.session.dates.firstDayOfFinals == null):           // First Day of Finals blank?
      case (this.session.dates.lastDayOfFinals == null):            // Last Day of Finals blank?
      case (this.haveSessionBreaks == null):                        // Have Session Breaks unchecked?
      case (this.session.classLocations[0].campus.code == null):    // No class location specified?

        formValid = false;
        break;

      default:
        formValid = true;
        break;
    }

    if (formValid) {        // If all required fields are provided

      switch (true) {       // check each section

        case !(this.ClassDatesValid()):
          formValid = false;
          break;

        case !(this.FinalsDateValid()):
          formValid = false;
          break;

        case !(this.AreSessionBreaksOK()):
          formValid = false;
          break;

        case !(this.AreClassLocationsOK()):
          formValid = false;
          break;

        case !(this.AreRateFieldsOK()):
          formValid = false;
          break;

        case !(this.AreSpecialFeesOK()):
          formValid = false;
          break;

        case !(this.AreCommentsOK()):
          formValid = false;
          break;

        default:
          formValid = true;
          break;
      } // switch()

    } // if (formValid)

    return formValid;
  }   // IsFormValid()


  private IsUnitRangeOK(loLimit: number, hiLimit: number): boolean {

    var unitRangeOK: boolean = null;

    switch (true) {

      case (loLimit == null):
        unitRangeOK = false;
        break;

      case (hiLimit == null):
        unitRangeOK = false;
        break;

      case (loLimit > hiLimit):
        unitRangeOK = false;
        break;

      default:
        unitRangeOK = true;
        break;
    } // switch()

    return unitRangeOK;
  }


  private IsPositiveNumber(n? : number): boolean {

    var positiveNum: boolean = null;

    switch (true) {

      case (Number(n) < 1):           // a negative value:

      case Number.isNaN(Number(n)):   // not a number?

        positiveNum = false;
        break;

      default:
        positiveNum = true;
        break;
    } // switch()

    return positiveNum;
  }   // IsPositiveNumber()


  private AreFlatRateFieldsOK(): boolean {

    var flatRateFieldsOK: boolean = null;
    var rate = this.session.rateType;
    var gradUnitRange = rate.flatRateUnitRange.graduate;
    var uGradUnitRange = rate.flatRateUnitRange.undergraduate;

    switch (true) {

      case !this.IsPositiveNumber(rate.flatRate):           //    1) Flat Rate amount
        this.formError.rates = "Please enter a positive whole number for the Tuition Flat Rate Amount .";
        flatRateFieldsOK = false;
        break;

      case !this.IsPositiveNumber(uGradUnitRange.minimum):  //    3) Undergrad Unit range: minimum
        this.formError.rates = "Please enter a positive whole number for the Undergraduate Unit minimum.";
        flatRateFieldsOK = false;
        break;

      case !this.IsPositiveNumber(uGradUnitRange.maximum):  //    4) Undergrad Unit range: maximum
        this.formError.rates = "Please enter a positive whole number for the Undergraduate Unit maximum.";
        flatRateFieldsOK = false;
        break;

      case !this.IsUnitRangeOK(uGradUnitRange.minimum, uGradUnitRange.maximum):
        this.formError.rates = "Please check the Undergraduate Flat Rate Unit Range. The maximum should be equal or more than the minimum.";
        flatRateFieldsOK = false;
        break;

      case !this.IsPositiveNumber(gradUnitRange.minimum):   //    6) Graduate Unit range: minimum
        this.formError.rates = "Please enter a positive whole number for the Graduate Unit minimum.";
        flatRateFieldsOK = false;
        break;

      case !this.IsPositiveNumber(gradUnitRange.maximum):   //    7) Graduate Unit range: maximum
        this.formError.rates = "Please enter a positive whole number for the Graduate Unit maximum.";
        flatRateFieldsOK = false;
        break;
                                                            //    8) Graduate unit range.
      case !this.IsUnitRangeOK(gradUnitRange.minimum, gradUnitRange.maximum):
        this.formError.rates = "Please check the Graduate Flat Rate Unit Range. The maximum should be equal or more than the minimum.";
        flatRateFieldsOK = false;
        break;

      default:                      // All fields are good.
        flatRateFieldsOK = true;
        break;

    }   // switch()

    return flatRateFieldsOK;

  }   // AreFlatRateFields()

    
  private AreRateFieldsOK(): boolean {

    this.formError.rates = '';    // Reset rate error messages.
    var rateFieldsOK: boolean = true;

    if (this.TermRates.length > 0) {      // Check only if rates for the semester are available.

      var rateTypeCode: string = (this.session.rateType.code).toUpperCase();

      switch (rateTypeCode) {

        case 'OTHFLAT':        // check:

          if (!this.AreFlatRateFieldsOK()) {
            rateFieldsOK = false;
          } else if (!this.IsPositiveNumber(this.session.rateType.unitRate)) {
            rateFieldsOK = false;
            this.formError.rates = "Please enter a positive Tuition Unit Rate Amount.";
          }
          break;

        case 'OTHUNIT':

          if (!this.IsPositiveNumber(this.session.rateType.unitRate)) {
            rateFieldsOK = false;
            this.formError.rates = "Please enter a positive Tuition Unit Rate Amount.";
          }
          break;

        default:              // any standard rate
          rateFieldsOK = true;
          break;

      }   // switch()

    }
      return rateFieldsOK;

  }   // AreRateFieldsOK()


  private AreSessionBreaksOK() {

    this.formError.sessionBreaks = '';      // reset the Session Break error message
    var sessBreaksOK: boolean = true;

    if (this.haveSessionBreaks == null) {

      sessBreaksOK = false;

    } else {

      if (this.haveSessionBreaks == 'Yes') {     // User checked Yes on Session have breaks?

        var sBreaks = this.session.dates.sessionBreaks;

        for (var i = 0; i < sBreaks.length; ++i) {

          if (!this.SessionBreakDateValid(i)) {
            sessBreaksOK = false;
            break;
          }
        } // for()
      } // if(this.haveSessionBreaks)
    } // else

    return sessBreaksOK;
  }   // AreSessionBreaksOK()


  public SessionBreakDateValid(i): boolean {

    this.formError.sessionBreaks = '';      // reset the Session Break error message
    var datesValid: boolean = null;

    var startDate: Date = this.session.dates.sessionBreaks[i].startDate;
    var endDate: Date = this.session.dates.sessionBreaks[i].endDate;

    var dateCheck: Error = this.IsDateRangeOK(startDate, endDate);

    switch (dateCheck.code) {

      case DATE_RANGE_CHECK.NO_START_DATE:
      case DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY:
      case DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY:
        this.session.dates.sessionBreaks[i].startDate = null;
        datesValid = false;
        break;

      case DATE_RANGE_CHECK.NO_END_DATE:
      case DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE:
      case DATE_RANGE_CHECK.END_DATE_BEFORE_FIRST_DAY:
        this.session.dates.sessionBreaks[i].endDate = null;
        datesValid = false;
        break;

      default:
        datesValid = true;
        break;
    } // switch()

    if (!datesValid) {
      this.formError.sessionBreaks = "Session Break dates: " + dateCheck.message;
    }

    return datesValid;

  }   // SessionBreakDateValid()


  private ClassDatesValid(): boolean {

    var datesValid: boolean = true;

    if ((this.session.dates.firstDayOfClass != null) && (this.session.dates.lastDayOfClass != null)) {

      var startDate: Date = this.session.dates.firstDayOfClass;
      var endDate: Date = this.session.dates.lastDayOfClass;
      var dateCheck: Error = this.IsDateRangeOK(startDate, endDate);

      switch (dateCheck.code) {

        case DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE:          // Last Day of Class is earlier than the First Day of Class 
        case DATE_RANGE_CHECK.END_DATE_BEFORE_FIRST_DAY:           // Last Day of Class is earlier than the First Day of Class
        case DATE_RANGE_CHECK.NO_START_DATE:
          this.session.dates.lastDayOfClass = null;
          datesValid = false;
          break;

        case DATE_RANGE_CHECK.NO_END_DATE:
        case DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY:           // First Day of Class is later than the Last Day of Class
          this.session.dates.firstDayOfClass = null;
          datesValid = false;
          break;

        default:
          datesValid = true;
          break;
      } // switch()

      if (datesValid) {
        this.formError.classDates = '';     // reset the Class Date error message
      } else {
        this.formError.classDates = dateCheck.message;
      }

    } // if((this.session.dates...)

    return datesValid;
  }   // ClassDatesValid()


  private FinalsDateValid(): boolean {

    var datesValid: boolean = true;

    var startDate: Date = this.session.dates.firstDayOfFinals;
    var endDate: Date = this.session.dates.lastDayOfFinals;
    var dateCheck: Error = this.IsDateRangeOK(startDate, endDate);

    switch (dateCheck.code) {

      case DATE_RANGE_CHECK.NO_START_DATE:
      case DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY:    // Finals Start Date is earlier than the First Day of Classes

        this.session.dates.firstDayOfFinals = null;
        datesValid = false;
        break;

      case DATE_RANGE_CHECK.NO_END_DATE:
      case DATE_RANGE_CHECK.END_DATE_BEFORE_FIRST_DAY:      // Finals End Date is earlier than First Day of Classes
      case DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE:     // Finals End Date is earlier than the Finals Start Date

        this.session.dates.lastDayOfFinals = null;
        datesValid = false;
        break;

      case DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY:      // Start of Finals after Last Day of Class -> OK
      case DATE_RANGE_CHECK.END_DATE_AFTER_LAST_DAY:        // End of Finals after Last Day of Class -> OK
      case DATE_RANGE_CHECK.ALL_DATES_OK:
      default:

        datesValid = true;
        break;
    } // switch()

    if (datesValid) {
      this.formError.finalsDates = null;      // reset the finals dates error messages
    } else {
      this.formError.finalsDates = dateCheck.message;
    }

    return datesValid;
  }   // FinalsDateValid()
  

  private IsDateRangeOK(beginDate: Date, endDate: Date): Error {
        // checks the date range if:
        //  - start/end dates are not earlier than the first day of classes
        //  - start/end dates are not later than the last day of classes
        //  - end date is not earlier than the start date
    var dateCheck = new Error();

    var firstDayOfClass: Date = this.session.dates.firstDayOfClass;
    var lastDayOfClass: Date = this.session.dates.lastDayOfClass;

    switch (true) {

      case (beginDate == null):
        dateCheck.message = "No start date provided";
        dateCheck.code = DATE_RANGE_CHECK.NO_START_DATE;
        break;

      case (beginDate < firstDayOfClass):
        dateCheck.message = "Start date is earlier than the first day of classes";
        dateCheck.code = DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY;
        break;

      case (beginDate > lastDayOfClass):
        dateCheck.message = "Start date is later than the last day of classes";
        dateCheck.code = DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY;
        break;

      case (endDate == null):
        dateCheck.message = "No end date provided";
        dateCheck.code = DATE_RANGE_CHECK.NO_END_DATE;
        break;

      case (endDate < beginDate):
        dateCheck.message = "End date is earlier than the start date";
        dateCheck.code = DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE;
        break;

      case (endDate < firstDayOfClass):
        dateCheck.message = "End date is earlier than the first day of classes";
        dateCheck.code = DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE;
        break;

      case (endDate > lastDayOfClass):
        dateCheck.message = "End date is later than the last day of classes";
        dateCheck.code = DATE_RANGE_CHECK.END_DATE_AFTER_LAST_DAY;
        break;

      default:
        dateCheck.message = '';
        dateCheck.code = DATE_RANGE_CHECK.ALL_DATES_OK
        break;
    } // switch()

    return dateCheck;
  } // IsDateRangeOK()
  

  private BlankOutFlatRateUnitRangeFields(): void {      // Blank out the Flat Rate Unit Range fields

    this.session.rateType.flatRateUnitRange.graduate.minimum = null;
    this.session.rateType.flatRateUnitRange.graduate.maximum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;

  }   // BlankOutFlatRateUnitRangeFields()
  

  private MaxOutFlatRateUnitRangeFields(): void {       // Sets the min and max unit ranges to maximum values.
    
    this.session.rateType.flatRateUnitRange.graduate.maximum = this.MAXUNITS - 1;
    this.session.rateType.flatRateUnitRange.graduate.minimum = this.MAXUNITS - 2;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = this.MAXUNITS - 1;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = this.MAXUNITS - 2;

  }   // MaxOutFlatRateUnitRangeFields()
  

  public RateSelected(rateSelected: any): void {

    switch (rateSelected.code) {

      case 'ZERO':

        if (!this.preLoadValues) {          // New request?  Don't set the unit range fields.
          this.MaxOutFlatRateUnitRangeFields();     // Set the Flat Unit Ranges to maximum values
        }
        this.requireFlatRateFields = false;
        this.disableUnitRange = true;
        break;

      case 'OTHFLAT':

        if (!this.preLoadValues) {          // New request?  Don't set the unit range fields.
          this.BlankOutFlatRateUnitRangeFields();
        }
        this.requireFlatRateFields = true;
        this.showPerUnitBox = true;
        break;

      case 'OTHUNIT':

        if (!this.preLoadValues) {          // New request?  Don't set the unit range fields.
          this.MaxOutFlatRateUnitRangeFields();     // Set the Flat Unit Ranges to maximum values
        }
        this.requireFlatRateFields = false;
        this.showPerUnitBox = true;
        break;

      default:                             // Standard rate: do not show any of the rate values; they are implied.

        if (!this.preLoadValues) {          // New request?  Don't set the unit range fields.
          this.BlankOutFlatRateUnitRangeFields();
        }
        this.disableUnitRange = false;
        this.requireFlatRateFields = false;
        this.showPerUnitBox = false;
        break;
    }
    return;
  }   // RateSelected()


  public LocationDateValid(x: number): boolean {

    var startDate = this.session.classLocations[x].startDate;
    var endDate = this.session.classLocations[x].endDate;

    var dateCheck: Error = this.IsDateRangeOK(startDate, endDate)
    var datesValid: boolean = null;

    switch (dateCheck.code) {

      case DATE_RANGE_CHECK.NO_START_DATE:
      case DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY:
      case DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY:
        this.session.classLocations[x].startDate = null;
        datesValid = false;
        break;

      case DATE_RANGE_CHECK.NO_END_DATE:
      case DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE:
      case DATE_RANGE_CHECK.END_DATE_BEFORE_FIRST_DAY:
        this.session.classLocations[x].endDate = null;
        datesValid = false;
        break;

      default:
        datesValid = true;
        break;
    } // switch()

    if (datesValid) {
      this.formError.locations = '';
    } else {
      this.formError.locations = "Dates for " + this.session.classLocations[x].campus.name + ": " + dateCheck.message;
    }

    return datesValid;
  }   // LocationDateValid()


  public SpecialFeeValid(i: number, specField: SPEC_FEE_FIELD, specValue?: any): boolean {

    var specialFeeValid: boolean = null;
    var allFees = this.session.specialFees;
    var specFee = allFees[i];

    var fee = {
      code: null,
      name: null,
      amount: null,
      grade: null,
      enroll: null
    };

    switch (specField){                             // Since all three dropdowns share a single Checking routine,
                                                    // It has to assign the $event value accordingly.
      case SPEC_FEE_FIELD.CODE:
        fee.code = specValue.code;
        fee.name = specValue.name;
        fee.grade = specFee.gradeLevel.code;
        fee.enroll = specFee.enrollType.code;
        break;

      case SPEC_FEE_FIELD.ENROLLMENT:
        fee.code = specFee.fee.code;
        fee.name = specFee.fee.name;
        fee.grade = specFee.gradeLevel.code;
        fee.enroll = specValue.code;
        break;

      case SPEC_FEE_FIELD.POPULATION:
        fee.code = specFee.fee.code;
        fee.name = specFee.fee.name;
        fee.grade = specValue.code;
        fee.enroll = specFee.enrollType.code;
        break;

      case SPEC_FEE_FIELD.GET_FROM_FORM:
        fee.code = specFee.fee.code;
        fee.name = specFee.fee.name;
        fee.grade = specFee.gradeLevel.code;
        fee.enroll = specFee.enrollType.code;
        break;

      default:      // fee.code, fee.grade, and fee.enroll will all be nulls
        break;
    }   // switch()

    fee.amount = specFee.amount;          // fee amount will always come from the amount input box

    switch (true) {

      case (fee.code == null):              // blank special fee code
        this.formError.specialFees = "Please specify the code for each fee.";
        specialFeeValid = false;
        break;

      case (fee.amount == null):            // blank fee amount
        this.formError.specialFees = "Please specify the amount for " + fee.name + ".";
        specialFeeValid = false;
        break;

      case (fee.enroll == null):            //  blank Enrollment type
        this.formError.specialFees = "Please specify the Enrollment type for " + fee.name + ".";
        specialFeeValid = false;
        break;

      case (allFees.length == 1):           // all values are provided, but if there is only one entry
        this.formError.specialFees = '';    // no need to check for duplicates
        specialFeeValid = true;
        break;

      case (fee.grade == null):             // blank Population type
        this.formError.specialFees = "Please specify the Population type for " + fee.name + ".";
        specialFeeValid = false;
        break;

      default:
        if (this.IsThereADuplicateFee(fee, i)) {  // duplicate fees found
          specialFeeValid = false;
        } else {                                  // no duplicates found
          specialFeeValid = true;
        }
        break;
    }

    if (specialFeeValid) {
      this.formError.specialFees = '';
    }

    return specialFeeValid;

  }   // SpecialFeeValid()


  private IsThereADuplicateFee(targetFee: any, feeIndex: number): boolean {

    var otherGrade: string = null;
    var otherEnroll: string = null;
    var otherCode: string = null;
    var allFees = this.session.specialFees;

    var duplicateFeeFound = false;

    for (var x = 0; x < allFees.length; ++x) {

      if (x == feeIndex) {   // do not compare the special fee with it's self

        continue;

      } else {

        otherGrade = allFees[x].gradeLevel.code;
        otherEnroll = allFees[x].enrollType.code;
        otherCode = allFees[x].fee.code;

        if ((targetFee.code == otherCode) &&          // A matching fee is found!
          (targetFee.grade == otherGrade) &&
          (targetFee.enroll == otherEnroll)) {

          this.formError.specialFees = "Fee " + allFees[x].fee.name + " is already used with the same Population and Enrollment options.";
          duplicateFeeFound = true;
          break;

        } // if ((specFee.fee...
      } // else
    } // for(var j...)

    return duplicateFeeFound;
  }   // IsThereADuplicateFee()

}   // export class...
