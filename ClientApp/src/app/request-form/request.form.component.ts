import { Component, Input, Output } from '@angular/core'
import { PEDataService } from '../shared/services/pedata.service'

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html',
  styleUrls: ['./request.form.component.css']
})

export class RequestFormComponent{

  public UscCampuses: any[];
  public SpecialFeeList: any[];
  public TuitionRates: any[];
  public termRates: any[];

  constructor(private peDataService: PEDataService) {
    this.UscCampuses = this.peDataService.getCampusLocations();
    this.SpecialFeeList = this.peDataService.getSpecialFeeList();
    this.TuitionRates = this.peDataService.getTuitionRates();
    this.termRates = this.TuitionRates[0].termRates;
  }

  pageTitle: string = "Emily";

  public MAXUNITS: number = 100;

  public semesters = [
    { semCode: 20182, semName: "2018 Summer"},
    { semCode: 20183, semName: "2018 Fall"},
    { semCode: 20191, semName: "2019 Spring"},
    { semCode: 20192, semName: "2019 Summer"}
  ];

  public session = {
    academicTerm: "",
    ratePerUnitAmount: "",
    sessionBreaks: [
      //{
      //  startDate: "2018-05-20T15:20:52.657",
      //  endDate: "2018-05-25T15:20:52.657"
      //}
    ],

    specialFees: [
      //{
      //  feeCode: "M22520001",
      //  assessedTo: "U",
      //  amount: 777
      //}
    ],

    classLocations: [
//      {
        //campusCode: "ATT",
        //startDate: "2018-05-20T15:20:52.657",
        //endDate: "2018-05-25T15:20:52.657"
//      }
    ]

  }
  
  public AddClassLocation() {

    var newLocation = {
      campusCode: "",
      startDate: "",
      endDate: ""
    }

    this.session.classLocations.push(newLocation);
    return;

  } // AddClassLocation()
  
  public AddSessionBreak(){
    var newBreak = { startDate: "", endDate: "" };
    this.session.sessionBreaks.push(newBreak)
    return;
  } // AddSessionBreak()

  public AddSpecialFee(){

    var newFee = {
      feeCode: "",
      assessedTo: "",
      amount: 0
    };

    this.session.specialFees.push(newFee);
    return;
  } // AddSpecialFee()

  public DeleteThisFee(feeIndex, feeCode) {

    this.session.specialFees.splice(feeIndex, 1);
//    var i = usedFees.indexOf(feeCode);        // deletes the special fee from used fees array 
//    usedFees.splice(i, 1);                    // so that it can be re-used later.
    return;
  }   // deletes a Special Fee entry
  
  public AllowNumbersOnly(n: any) {
    var txtLen = n.length;
    console.log("In AllowNumbersOnly: " + n);

//    isNumeric(value: any): boolean {
    if (isNaN(n - parseInt(n))) {

      console.log(n + " is not numeric. (length = " + n.length + ")");

      if (n.length == 1) {
        this.session.ratePerUnitAmount = '';
      } else {
        console.log("jumped here");
        n = n.substring(0, n.length - 1);
        this.session.ratePerUnitAmount = parseInt(n).toString();
      }
      console.log("n = " + n);
    }
//    }
    //var specKeys = [46, 8, 9, 27, 13];

    //// Allow: backspace, delete, tab, escape, and enter
    ////    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
    //if (!specKeys.indexOf(e.keyCode) ||
    //  // Allow: Ctrl+A, Command+A
    //  (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    //  // Allow: home, end, left, right, down, up
    //  (e.keyCode >= 35 && e.keyCode <= 40)) {
    //  // let it happen, don't do anything
    //  return;
    //}

    //// Ensure that it is a number and stop the keypress
    //if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //  e.preventDefault();
    //}
  }   // AllowNumbersOnly

}
