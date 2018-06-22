import { Component, OnInit } from '@angular/core';
import { PEDataService } from '../shared/services/pedata.service';
import { Observable, Subscriber } from 'rxjs/RX';

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html',
  styleUrls: ['./request.form.component.css']
})

export class RequestFormComponent implements OnInit{

  public MAXUNITS: number = 100;
  public UscCampuses: any[];
  public SpecialFeeList: any[];
  public termRates: any[];
  public SessionCodes: any[];
  public FeeList: any[];
  
  public rangeStart: Date = new Date();
  public rangeEnd: Date = new Date();

  private TuitionRates: any[];

  constructor(private peDataService: PEDataService) {
    var newDate: Date = new Date(2008, 9, 21);
  }

  ngOnInit() {

    //this.peDataService.getCampusLocations().subscribe(locations => {
    //  this.UscCampuses = locations;
    //});
    this.UscCampuses = this.peDataService.getCampusLocations();
    this.SessionCodes = this.peDataService.getSessionCodes();

  }

    pageTitle: string = "Emily";
    
  public semesters = [
    { semCode: 20182, semName: "2018 Summer"},
    { semCode: 20183, semName: "2018 Fall"},
    { semCode: 20191, semName: "2019 Spring"},
    { semCode: 20192, semName: "2019 Summer"}
  ];

  public session = {
    academicTerm: { semCode: "", semName: "" },
    ratePerUnitAmount: "",
    sessionBreaks: [],
    specialFees: [],
    classLocations: []
  } // session
  
  public AddClassLocation() {

    var newLocation = {
      campusCode: "",
      startDate: "",
      endDate: ""
    }

    this.session.classLocations.push(newLocation);
  } // AddClassLocation()
  
  public AddSessionBreak(){
    var newBreak = { startDate: "", endDate: "" };
    this.session.sessionBreaks.push(newBreak)
    return;
  } // AddSessionBreak()

  public AddSpecialFee(acadTerm: any) {

    var newFee = {
      feeCode: "",
      assessedTo: "",
      amount: 0
    };

    var term : string = acadTerm.value.semCode;
//    var term: string = this.session.academicTerm.semCode;   // this will work too!

    this.SpecialFeeList = this.formSpecialFeeArray(term);
    this.session.specialFees.push(newFee);

  } // AddSpecialFee()

  public DeleteThisFee(feeIndex, feeCode) {

    this.session.specialFees.splice(feeIndex, 1);
//    var i = usedFees.indexOf(feeCode);        // deletes the special fee from used fees array 
//    usedFees.splice(i, 1);                    // so that it can be re-used later.
    return;
  }   // deletes a Special Fee entry

  public filterSessionCodes(codes) {
    this.SessionCodes = this.peDataService.getSessionCodes()
      .filter((sCodes) => sCodes.sessionDesc.toLowerCase().indexOf(codes.toLowerCase()) !== -1);
  }

  public filterCampusLocation(campuses) {
    this.UscCampuses = this.peDataService.getCampusLocations()
      .filter((locations) => locations.campusName.toLowerCase().indexOf(campuses.toLowerCase()) !== -1);
  }

  private formSpecialFeeArray(acadTerm: string): any[] {

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

    for (var i = 0; i < this.FeeList.length; ++i) {
      feeName = this.CleanupFeeName(termAbbrev, this.FeeList[i]);
      feeCode = feeName.substring(0, feeName.indexOf(' '))
      specFeeArray.push({ "feeCode": feeCode, "feeName": feeName });
    }

    return specFeeArray;
  }


  private CleanupFeeName(termYear: string, feeDesc: string): string {

    var cleanStr: string = feeDesc.replace('- ' + termYear , '');

    cleanStr = cleanStr.replace(termYear, '');
    
    return cleanStr;
  }


  public TermSelected(selectedTerm: any) {

    var term = selectedTerm.semCode;

    this.TuitionRates = this.peDataService.getTermTuitionRates(term);
    this.termRates = this.TuitionRates[0].termRates;
    this.FeeList = this.peDataService.getSpecialFeeList(term);
    this.SpecialFeeList = this.formSpecialFeeArray(term);

  }


  //public filterSpecialFees(feeList) {
  //  this.SpecialFeeList = this.peDataService.getSpecialFeeList()
  //    .filter((sFees) => sFees.sessionDesc.toLowerCase().indexOf(feeList.toLowerCase()) !== -1);
  //}

}
