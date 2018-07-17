import { Component, OnInit } from '@angular/core';

import { PEDataService } from '../shared/services/pedata.service';
import { SQLDataService } from '../shared/services/sqldata.service';
import { SubmitFormService } from '../shared/services/submit.form.service';

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

class error {
  code: number;
  message: string;
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

export class RequestFormComponent implements OnInit{

  pageTitle: string = "Session Request Form";

  public MAXUNITS       : number = 100;
  public UscCampuses    : any[];
  public SpecialFeeList : any[];
  public termRates      : any[];
  public SessionCodes   : any[];
  public semesters      : any[];
  public GradeLevel     : any[] = GRADELEVEL;
  public CampusNameArray: string[] = [];
  public EnrollTypes    : any[] = ENROLLMENTTYPES;
  public Session001Dates: any;
  public showPerUnitBox : boolean = false;
  public disableUnitRange     : boolean = false;
  public requireFlatRateFields: boolean = false;
  public formIsValid: boolean = true;
  public formError: string = "Please fill in all highlighted fields.";
  public haveSessionBreaks: boolean = null;

  public session : any = {

    academicTerm: {
      code: null,
      name: null
    },

    code: {
      sessionCode: null,
      sessionDesc: null,
    },

    dates: {

      firstDayOfClass: null,

      lastDayOfClass: null,

      firstDayOfFinals: null,

      lastDayOfFinals: null,

      sessionBreaks: []

    },

    classLocations: [],

    rateType: {

      code: null,
      description: null,
      unitRate: null,
      flatRate: null,

      flatRateUnitRange: {
          graduate: {
            minimum: null,
            maximum: null
          },
          undergraduate: {
            minimum: null,
            maximum: null
          }
      },
    },

    specialFees: [],

    comments: '',

  }; // session

  private term: number = 20183;
  private sessionCode: string = "555";
  private preLoadValues: boolean = false;
  
  constructor(

    private peDataService: PEDataService,
    private sqlDataService: SQLDataService,
    private submitFormService: SubmitFormService

  ) {

    this.semesters = this.peDataService.getActiveTerms();       // pre-populate the Semester dropdown
    this.UscCampuses = this.peDataService.getCampusLocations(); // pre-populate the Campus Location dropdown
    this.SessionCodes = this.peDataService.getSessionCodes();   // pre-populate the Session Codes dropdown

  } // constructor()


  ngOnInit() {

    //if ((this.term > 0) && (this.sessionCode > '')) {
    //  this.preLoadValues = true;
    //  this.PreLoadTheForm();
    //  this.preLoadValues = false;
    //}

    //this.peDataService.getCampusLocations().subscribe(locations => {
    //  this.UscCampuses = locations;
    //});

    for (var i = 0; i < this.UscCampuses.length; ++i){
      this.CampusNameArray[i] = this.UscCampuses[i].campusName;
    }

    if (this.session.classLocations.length == 0) {
      this.AddClassLocation('');
    }

  }   // ngOnInit()


  private PreLoadTheForm() {

    this.session = this.sqlDataService.getCurrentRevByReqID(20183, "555");

    if (this.session.academicTerm.code > 0) {                           // if existing request exists,

      var term: number = this.session.academicTerm.code;

      this.termRates = this.peDataService.getTermTuitionRates(term);    // get the term-related rates

      var FeeList = this.peDataService.getSpecialFeeList(term);         // get the term-related special fees 
      this.SpecialFeeList = this.formSpecialFeeArray(term, FeeList);

      this.RateSelected(this.session.rateType);
    }
  }   // PreLoadTheForm()

  
  public AddClassLocation(selectedCampus: string) {

    var campus = this.UscCampuses.filter(location => location.campusName === selectedCampus);

    var newLocation = {
      code: {
        campusCode : null,
        campusName : null
      },
      startDate :  null,
      endDate : null 
    };

    this.session.classLocations.push(newLocation);

    if (this.session.classLocations.length == 1) {    // if there is only 1 location, assign the start and end dates
                                                      // to be the first and last day of classes respectively.
      this.session.classLocations[0].startDate = this.session.firstDayOfClasses;
      this.session.classLocations[0].endDate = this.session.lastDayOfClasses;

    } else {    // require the start and end dates only when there are more than 1 location

      if ((this.session.classLocations[0].startDate == this.session.firstDayOfClasses) &&
          (this.session.classLocations[0].endDate == this.session.lastDayOfClasses)) {
        this.session.classLocations[0].startDate = null;
        this.session.classLocations[0].endDate = null;
      }

    }
  }   // AddClassLocation()


  public DeleteClassLocation(idx) {               // Delete a Class Location Entry

    this.session.classLocations.splice(idx, 1);
    if (this.session.classLocations.length == 1) {
      this.session.classLocations[0].startDate = this.session.firstDayOfClasses;
      this.session.classLocations[0].endDate = this.session.lastDayOfClasses;
    }

  }   // DeleteClassLocation()


  public AddSessionBreak(haveBreaks) {

    if (haveBreaks) {

      if (this.session.dates.sessionBreaks.length < MAX_SESSION_BREAKS) {

        for (var i = 0; i < MAX_SESSION_BREAKS; ++i) {

          var newBreak = { startDate: null, endDate: null };
          this.session.dates.sessionBreaks.push(newBreak);
        }
      }

    } else {
      this.session.dates.sessionBreaks = [];
    }

  }     // AddSessionBreak()


  public DeleteSessionBreak(idx) {

    this.session.dates.sessionBreaks.splice(idx, 1);

    if (this.session.dates.sessionBreaks.length < 1) {
      this.haveSessionBreaks = null;
    }
  }


  public AddSpecialFee() {

    var SpecialFee = {

      fee: {
        code: null,
        name: null
      },

      amount: null,

      gradeLevel: {
        code: null,
        name: null
      },

      enrollType: {
        code: null,
        name: null
      }
    };

    this.session.specialFees.push(SpecialFee);

  } // AddSpecialFee()


  public DeleteThisFee(feeIndex) {       // deletes a Special Fee entry

    if (this.session.specialFees[feeIndex].fee) {
      var feeCode = this.session.specialFees[feeIndex].fee.code;
//    var i = usedFees.indexOf(feeCode);        // deletes the special fee from used fees array 
//    usedFees.splice(i, 1);                    // so that it can be re-used later.
    }

    this.session.specialFees.splice(feeIndex, 1);
    return;
  }   // DeleteThisFee()


  public filterSessionCodes(codes) {
    this.SessionCodes = this.peDataService.getSessionCodes()
      .filter((sCodes) => sCodes.sessionDesc.toLowerCase().indexOf(codes.toLowerCase()) !== -1);
  }   // filterSessionCodes()


  public filterCampusLocation(campuses) {   // limit the list as the user types
    this.UscCampuses = this.peDataService.getCampusLocations()
      .filter((locations) => locations.campusName.toLowerCase().indexOf(campuses.toLowerCase()) !== -1);
  }   // filterCampusLocation()


  private formSpecialFeeArray(acadTerm: number, feeList: any): any[] {

    var specFeeArray: any[] = [];
    var feeName: string = "";
    var feeCode: string = "";

    var term = acadTerm.toString();   // because it will error out without this

    var acadYear = term.slice(0, 4); // acadTerm.slice(0, 4);
    var termPrefix = term[term.length - 1]; // get the last digit (e.g. 20183 = '3')
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

    for (var i = 0; i < feeList.length; ++i) {
      feeName = this.CleanupFeeName(termAbbrev, feeList[i]);
      feeCode = feeName.substring(0, feeName.indexOf(' '))
      specFeeArray.push({ "code": feeCode, "name": feeName });
    }

    return specFeeArray;
  }   // formSpecialFeeArray()


  private CleanupFeeName(termYear: string, feeDesc: string): string {

    var cleanStr: string = feeDesc.replace('- ' + termYear , '');

    cleanStr = cleanStr.replace(termYear, '');
    
    return cleanStr;
  }   // CleanupFeeName()


  private ResetRateFields() {

    this.session.rateType.rateTypeCode = null;
    this.session.rateType.rateTypeDesc = null;

    this.session.rateType.rateTypeFlatRate = null;
    this.session.rateType.rateTypeUnitRate = null;

    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;

  }   // ResetRateFields()


  public TermSelected(selectedTerm: any) {    // when the user selects a term in the Semester dropdown

    var term: number = selectedTerm.code;
    this.termRates = this.peDataService.getTermTuitionRates(term);
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

    this.formError = '';      // reset all validation messages.

    if (this.IsFormValid()) {
      this.submitFormService.cacheSubmittedFields(this.session);    // go to confirmation page to view submitted fields
    } else {
      this.formIsValid = false;
      this.formError = "Entered value/s invalid.  Please correct entries before proceeding.";
    }

  } // FormSubmitted()
  

  private AreClassLocationsOK(): boolean {

    var classLocs = this.session.classLocations;
    var locationsGood = true;

    switch (classLocs.length) {

      case 1:               // only one class location provided

        if (classLocs[0].code.campusCode == null) {
          locationsGood = false;
        }
        break;

      default:              // more than one location provided

        for (var i = 0; i < classLocs.length; ++i) {

          if (classLocs[i].code.campusCode != null) {   // if a location is not provided
            if (classLocs[i].startDate == null) {       //  check it's start and end dates
              locationsGood = false;
              break;
            } else if (classLocs[i].endDate == null) {
              locationsGood = false;
              break;
            }
          } // if (classLocs[i]
        } // for (var...

    } // switch()

    return locationsGood;
  }   // AreClassLocationsGood()
  

  private IsFormValid(): boolean {

    var formValid: boolean = true;

    switch (true) {

      case (this.session.academicTerm == null):                     // Academic Term blank
      case (this.session.code.sessionCode == null):                 // Session Code blank
      case (this.session.dates.firstDayOfClass == null):            // First Day of Classes blank
      case (this.session.dates.lastDayOfClass == null):             // Last Day of Classes blank
      case (this.haveSessionBreaks == null):                        // Have Session Breaks unchecked
      case (this.session.rateType.code == null):                    // Rate Type blank
      case (this.session.classLocations[0].code.campusCode == null):  // No class location specified
        formValid = false;
        break;

      default:
        break;
    }

    if (formValid) {      // Required fields all provided

      switch (true) {

        case !(this.AreClassLocationsOK()):
          formValid = false;
          break;

        case !(this.AreSessionBreaksOK()):
          formValid = false;
          break;

        default:
          formValid = true;
          break;
      } // switch()

    } // if (formValid)

    return formValid;
  }   // IsFormValid()
  

  private AreSessionBreaksOK() {

    var sessBreaksOK: boolean = true;
    var dateCheck: Error = new Error();

    if (this.haveSessionBreaks) {     // User checked Yes on Session have breaks?

      var sBreaks = this.session.dates.sessionBreaks;

      for (var i = 0; i < sBreaks.length; ++i) {

        dateCheck = this.IsDateRangeOK(sBreaks[i].startDate, sBreaks[i].endDate);

        switch (true) {

          case ((sBreaks[i].startDate != null) && (sBreaks[i].endDate == null)):
            this.formError = "Please provide a start date for each Session Break.";
            sessBreaksOK = false;
            break;

          case ((sBreaks[i].endDate == null) && (sBreaks[i].endDate != null)):
            this.formError = "Please provide an end date for each Session Break.";
            sessBreaksOK = false;
            break;

          case (dateCheck.code != DATE_RANGE_CHECK.ALL_DATES_OK):      // At least one of the dates is invalid

            sessBreaksOK = false;

            switch (dateCheck.code) {

              case DATE_RANGE_CHECK.END_DATE_BEFORE_FIRST_DAY:              
              case DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY:
              case DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY:
                this.formError = "Session Break " + dateCheck.message;
                sBreaks[i].startDate = '';
                break;

              case DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE:
                this.formError = "Session Break " + dateCheck.message;
                sBreaks[i].endDate = '';
                break;

              default:
                this.formError = '';
                break;
            }
            break;

          default:  // either none of the dates was provided or both are blank
            break;
        } // switch()

        if (!sessBreaksOK) {    // if a session break is found with a problem, 
          break;                // stop checking the rest of the dates
        }
      } // for()
    } // if(this.haveSessionBreaks)

    return sessBreaksOK;
  }   // AreSessionBreaksOK()
  

  private ClassDateEntered(): boolean {

    var datesValid: boolean = true;

    if ((this.session.dates.firstDayOfClass != null) && (this.session.dates.lastDayOfClass != null)) {

      var dateCheck: Error = this.IsDateRangeOK(this.session.dates.firstDayOfClass, this.session.dates.lastDayOfClass);

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
          this.formError = '';
          datesValid = true;
          break;
      } // switch()

      if (!datesValid) {
        this.formError = "Class Dates: " + dateCheck.message;
      }

    } // if((this.session.dates...)

    return datesValid;
  }   // ClassDateEntered()


  private FinalsDateEntered(): boolean {

    var dateCheck: Error = this.IsDateRangeOK(this.session.dates.firstDayOfFinals, this.session.dates.lastDayOfFinals);
    var datesValid: boolean = true;

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

    if (!datesValid) {
      this.formError = "Finals dates: " + dateCheck.message;
    }

    return datesValid;
  }   // FinalsDateEntered()
  

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
        dateCheck.message = "No start date was provided";
        dateCheck.code = DATE_RANGE_CHECK.NO_START_DATE;
        break;

      case (endDate == null):
        dateCheck.message = "No end date was provided";
        dateCheck.code = DATE_RANGE_CHECK.NO_END_DATE;
        break;

      case (endDate < beginDate):
        dateCheck.message = "End date is earlier than the start date";
        dateCheck.code = DATE_RANGE_CHECK.END_DATE_BEFORE_START_DATE;
        break;

      case (beginDate < firstDayOfClass):
        dateCheck.message = "Start date is earlier than the first day of classes";
        dateCheck.code = DATE_RANGE_CHECK.START_DATE_BEFORE_FIRST_DAY;
        break;

      case (beginDate > lastDayOfClass):
        dateCheck.message = "Start date is later than the last day of classes";
        dateCheck.code = DATE_RANGE_CHECK.START_DATE_AFTER_LAST_DAY;
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


  public LocationDateEntered(x: number): boolean {

    var startDate = this.session.classLocations[x].startDate;
    var endDate = this.session.classLocations[x].endDate;
    var dateCheck: Error = this.IsDateRangeOK(startDate, endDate)
    var datesValid: boolean = true;

    switch (dateCheck.code) {

      case DATE_RANGE_CHECK.NO_START_DATE:
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
        this.formError = '';
        datesValid = true;
        break;
    } // switch()

    if (!datesValid) {
      this.formError = "Location dates: " + dateCheck.message;
    }

    return datesValid;
  }   // LocationDateEntered()

}   // export class...
