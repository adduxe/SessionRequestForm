import { Component, Output, OnInit } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';
import { PEDataService } from '../shared/services/pedata.service';
import { SubmitFormService } from '../shared/services/submit.form.service';

enum SECT {
  GENINFO = 0,
  DATES = 1,
  RATES = 2,
  SPECFEES = 3,
  CLASSLOCS = 4,
  COMMENTS = 5
}

enum WEEKDAY {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

const MAXDAYS_TO_GRADE = 4; 

class ComputedDates {

  lastDayForAddDrop: string;
  lastDayForEnrollmentChange: string;
  lastDayForWithdrawal: string;
  firstDayForFinalGrading: string;
  lastDayForFinalGrading: string;

};

@Component({
  selector: 'confirm-page',
  templateUrl: './confirm.page.component.html',
  styleUrls: ['./confirm.page.component.css']
})

export class ConfirmPageComponent implements OnInit{

  @Output() pageTitle: string = "Submission Confirmation Page";
  
  public session: any;
  public showAllValues: boolean = false;
  public Session001Dates: any;
  public USCHolidays: any[];
  public computedDates: ComputedDates;

  constructor(

    private sqlDataService: SQLDataService,
    private peDataService: PEDataService,
    private submitFormService: SubmitFormService

  ){

    this.session = this.submitFormService.session;

    var term: string = this.session.academicTerm.code;
    var acadYear: number = +(term.toString().substr(0, 4));
    
    this.Session001Dates = this.peDataService.GetSession001(term);
    this.USCHolidays = this.peDataService.GetUSCHolidays(acadYear);

  }

  ngOnInit() {

    this.computedDates = new ComputedDates();
    this.ShowHideAll();   // Show all the data. 
    this.ComputeDates();

  }

  public SECT = SECT;

  public showThisSection: boolean[] = [false, false, false, false, false, false];
  
  public showHideButton: string = "Show All";
  
  public ShowHideAll() {

    this.showAllValues = !this.showAllValues;

    if (this.showAllValues) {
      this.showHideButton = "Hide All";
      for (var i = SECT.GENINFO; i <= SECT.COMMENTS; ++i) {
        this.showThisSection[i] = true;
      }
    } else {
      this.showHideButton = "Show All";
      for (var i = SECT.GENINFO; i <= SECT.COMMENTS; ++i) {
        this.showThisSection[i] = false;
      }
    }
  }

  public requestInfo = {      // this will be coming from a web service

    owningDepartment: "Computer Engineering",
    owningSchool: "College of Engineering",
    userContact: "Albert E. Einstein",
    userPhone: "213.810.5693",
    userEmail: "aeinstein@usc.edu"

  };


  private ComputeDates(): void {

    var Sess001Dates = this.Session001Dates;
    var calculateDates = false;

    if (Sess001Dates) {         // if Session 001 data exists and it matches the first and last day of classes entered by user
                                //   then assign the Session 001 dates instead of calculating the dates.
      if ((Sess001Dates.classBeginDate > '') && (Sess001Dates.classEndDate > '')) {

        var sess001StartDate = this.FormatDate(Sess001Dates.classBeginDate);
        var sess001EndDate = this.FormatDate(Sess001Dates.classEndDate);
        var sessReqStartDate = this.FormatDate(this.session.dates.firstDayOfClass);
        var sessReqEndDate = this.FormatDate(this.session.dates.lastDayOfClass);

        if ((sess001StartDate === sessReqStartDate) && (sess001EndDate === sessReqEndDate)) {

          this.computedDates.lastDayForAddDrop = Sess001Dates.lastAddDropDate;
          this.computedDates.lastDayForEnrollmentChange = Sess001Dates.lastEnrollmentOptionDate;
          this.computedDates.lastDayForWithdrawal = Sess001Dates.withdrawWithWDate;
          this.session.dates.firstDayOfFinals = Sess001Dates.finalExamBeginDate;
          this.session.dates.lastDayOfFinals = Sess001Dates.finalExamEndDate;
          calculateDates = false;

        } else {
          calculateDates = true;
        }
      } else {
        calculateDates = true;
      }

    } // if ((Sess001Dates)

    if (calculateDates) {     // No Session 001 dates found for the semester or Session 001 dates doesn't match beginning/end class dates
                              // Then...compute the dates.
      var classBeginDate = this.session.dates.firstDayOfClass;
      var classEndDate = this.session.dates.lastDayOfClass;

      this.computedDates.lastDayForAddDrop = this.ComputeDate(classBeginDate, classEndDate, 20);
      this.computedDates.lastDayForEnrollmentChange = this.ComputeDate(classBeginDate, classEndDate, 40);
      this.computedDates.lastDayForWithdrawal = this.ComputeDate(classBeginDate, classEndDate, 80);

    }

    this.ComputeFinalGradingDates();

  } // ComputeDates()



  private ComputeFinalGradingDates() {    // Computes the First and Last Day of Final Grading

    this.computedDates.firstDayForFinalGrading = this.FormatDate(this.session.dates.firstDayOfFinals);

    var finalGradingDay = new Date(this.session.dates.lastDayOfFinals);

    for (var i = 0; i < MAXDAYS_TO_GRADE; ++i) {    // allow MAXDAYS_TO_GRADE days to compute grades

      finalGradingDay.setDate(finalGradingDay.getDate() + 1);
      finalGradingDay = this.AdjustDate(finalGradingDay.toDateString());
    }

    this.computedDates.lastDayForFinalGrading = this.FormatDate(finalGradingDay.toDateString());

  } // ComputeFinalGradingDates



  private ComputeDate(beginDate: string, endDate: string, percentAdd: number): string {

    var beginDt = new Date(beginDate);
    var endDt = new Date(endDate);

    var totalMilliSecs = endDt.getTime() - beginDt.getTime();
    var totalDays = totalMilliSecs / 1000 / 60 / 60 / 24;
    totalDays += 1;  // because EndDate + BeginDate + 1 = actual days including both dates

    var daysToAdd = Math.round(totalDays * (percentAdd / 100));
    var initialDate = new Date(beginDate);

    initialDate.setDate(beginDt.getDate() + daysToAdd);
    var adjustedDt = this.AdjustDate(initialDate.toDateString());

    if (adjustedDt > endDt) {
      adjustedDt = endDt;
    }

    return this.FormatDate(adjustedDt.toDateString());

  } // ComputeDate()



  private FormatDate(dateStr: string): string {

    var strDate = '';
    var givenDate = new Date(dateStr);

    if (givenDate) {
      strDate = (givenDate.getMonth() + 1) + '/' + givenDate.getDate() + '/' + givenDate.getFullYear();
    }

    return strDate;

  } // FormatDate()



  private AdjustDate(dateString: string) {

    var newDtMonthDay = '';
    var newDate = new Date(dateString);

    do {

      switch (newDate.getDay()) {                   // see which day of the week it falls on

        case WEEKDAY.Sunday:                        // if the computed day falls on a Sunday
          newDate.setDate(newDate.getDate() + 1);   // add a day to make it a Monday
          break;

        case WEEKDAY.Saturday:                      // Saturday
          newDate.setDate(newDate.getDate() + 2);   // add 2 days to make it a Monday
          break;

        default:
          break;
      } // switch()

      newDtMonthDay = this.FormatDate(newDate.toDateString());

      if (this.USCHolidays.indexOf(newDtMonthDay) > -1) {
        newDate.setDate(newDate.getDate() + 1);
        newDtMonthDay = this.FormatDate(newDate.toDateString());
      }

    } while ((newDate.getDay() == WEEKDAY.Sunday) || (newDate.getDay() == WEEKDAY.Saturday) || (this.USCHolidays.indexOf(newDtMonthDay) > -1));

    return newDate;

  } // AdjustDate()


  public SubmitForm() {
    this.submitFormService.saveToDatabase();

  } // SubmitForm()

}
