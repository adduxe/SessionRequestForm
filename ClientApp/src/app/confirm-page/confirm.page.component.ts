import { Component, Output, OnInit } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';
import { PEDataService } from '../shared/services/pedata.service';

enum SECT {
  GENINFO = 0,
  DATES = 1,
  RATES = 2,
  SPECFEES = 3,
  CLASSLOCS = 4,
  COMMENTS = 5
}

enum weekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

const holidays = [
  "1/1/2018", "1/15/2018", "2/19/2018", "5/28/2018", "7/4/2018", "9/3/2018", "11/22/2018", "11/23/2018", "12/24/2018", "12/25/2018", "12/25/2018", "12/26/2018", "12/27/2018", "12/28/2018", "12/29/2018", "12/30/2017", "12/31/2018",
  "1/1/2019", "1/21/2019", "2/18/2019", "5/27/2019", "7/4/2019", "7/5/2019", "9/2/2019", "11/28/2019", "11/29/2019", "12/25/2019", "12/26/2019", "12/27/2019", "12/28/2019", "12/29/2019", "12/30/2019", "12/31/2019",
  "1/1/2020", "1/20/2020", "2/17/2020", "5/25/2020", "7/3/2020", "9/7/2020", "11/26/2020", "11/27/2020", "12/25/2020", "12/28/2020", "12/29/2020", "12/30/2020", "12/31/2020"
];


@Component({
  selector: 'detail-page',
  templateUrl: './confirm.page.component.html',
  styleUrls: ['./confirm.page.component.css']
})

export class ConfirmPageComponent implements OnInit{

  @Output() pageTitle: string = "Confirmation Page";
  
  private revNumber: number = 4;

  private term: number = 20183;
  private sessionCode: string = "888";
  private requestID: string = this.term.toString() + this.sessionCode;


  public session: any;
  public showAllValues: boolean = false;
  public Session001Dates: any;

  constructor(private sqlDataService: SQLDataService, private peDataService: PEDataService) {
    this.session = sqlDataService.getRequestByRevisionID(this.requestID, this.revNumber);
    this.Session001Dates = this.peDataService.GetSession001(this.term.toString());
  }

  ngOnInit() {

    this.ShowHideAll();

    var Sess001Dates = this.Session001Dates;

    this.ComputeDates();


    if ((Sess001Dates.firstDayOfClass > '') && (Sess001Dates.lastDayOfClass > '')) {

      var sess001StartDate = new Date(Sess001Dates.firstDayOfClass);
      var sess001EndDate = new Date(Sess001Dates.lastDayOfClass);
      var sessReqStartDate = new Date(this.session.firstDayOfClass);
      var sessReqEndDate = new Date(this.session.lastDayOfClass);

      if ((sess001StartDate === sessReqStartDate) && (sess001EndDate === sessReqEndDate)) {
        this.session.lastDayForAddDrop = Sess001Dates.lastDayForAddDrop;
        this.session.lastDayForEnrollmentOptionChange = Sess001Dates.lastDayForEnrollmentOptionChange;
        this.session.lastDayForWithdrawal = Sess001Dates.lastDayForWithdrawal;
        this.session.firstDayOfFinals = Sess001Dates.firstDayOfFinals;
        this.session.lastDayOfFinals = Sess001Dates.lastDayOfFinals;
      }

    }
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

    return;
  }


  private ComputeDates(): void {

    var classStartDate = this.session.firstDayOfClass;
    var classEndDate = this.session.lastDayOfClass;

    this.session.lastDayForAddDrop = this.ComputeDate(classStartDate, classEndDate, 20);
    this.session.lastDayForEnrollmentOptionChange = this.ComputeDate(classStartDate, classEndDate, 40);
    this.session.lastDayForWithdrawal = this.ComputeDate(classStartDate, classEndDate, 80);
  }


  private ComputeDate(beginDate: string, endDate: string, percentAdd: number) {

    var beginDt = new Date(beginDate);
    var endDt = new Date(endDate);

    var totalMilliSecs = endDt.getTime() - beginDt.getTime();
    var totalDays = totalMilliSecs / 1000 / 60 / 60 / 24;

    var daysToAdd = Math.round(totalDays * (percentAdd / 100));
    var initialDate = new Date(beginDate);


    initialDate.setDate(beginDt.getDate() + daysToAdd - 1);
    var adjustedDt = this.AdjustDate(initialDate);

    if (adjustedDt > endDt) {
      adjustedDt = endDt;
    }

    return this.FormatDate(adjustedDt);

  } // ComputeDate()


  private FormatDate(givenDate: Date): string {

    var strDate = '';

    if (givenDate) {
      strDate = (givenDate.getMonth() + 1) + '/' + givenDate.getDate() + '/' + givenDate.getFullYear();
    }

    return strDate;

  } // FormatDate()


  private AdjustDate(newDate: Date): Date {

    var newDtMonthDay = '';

    do {
      switch (newDate.getDay()) {                   // see which day of the week it falls on

        case weekDay.Sunday:                        // if the computed day falls on a Sunday
          newDate.setDate(newDate.getDate() + 1);   // add a day to make it a Monday
          break;

        case weekDay.Saturday:                      // Saturday
          newDate.setDate(newDate.getDate() + 2);   // add 2 days to make it a Monday
          break;

        default:
          break;
      } // switch()

      newDtMonthDay = this.FormatDate(newDate);

      if (holidays.indexOf(newDtMonthDay) > -1) {
        newDate.setDate(newDate.getDate() + 1);
        newDtMonthDay = this.FormatDate(newDate);
      }

    } while ((newDate.getDay() == 0) || (newDate.getDay() == 6) || (holidays.indexOf(newDtMonthDay) > -1));

    return newDate;

  } // AdjustDate()


}
