import { Component, Output, OnInit } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RequestHistoryComponent } from '../request-history/request.history.component';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: 'diff-page',
//  templateUrl: './diff.page.component.html',
  templateUrl: './diffpage.html',
  styleUrls: ['./diff.page.component.css']
})

export class DiffPageComponent{

  private reqID: string = "20183888";
  private revID: number = 4;

  public currSess: any;
  public prevSess: any;

  constructor(private sqlDataService: SQLDataService) {
    this.currSess = this.sqlDataService.getCurrentRevisionByRequestID(this.reqID);
    this.prevSess = this.sqlDataService.getPreviousRevisionByRequestID(this.reqID);
  }

  @Output() pageTitle: string = "Diff Page";

  public hideShowPrev: string = "Hide Previous";
  public showSection: boolean = true;

  public HideShowPrevVersion() {

    this.showPrevious = !(this.showPrevious);
    if (this.showPrevious) {
      this.hideShowPrev = "Hide Previous";
    } else {
      this.hideShowPrev = "Show Previous";
    }
    return;
  }   // HideShowPrevVersion()

  showPrevious: boolean = true;   // Hides or shows the previous version of the request

  public HiLiteDiff(newVal, oldVal?) {

    var cssClass = [];

    if (oldVal) {

      switch (true) {

        case ((newVal > '') && (oldVal == '')):
        case ((newVal.length > 0) && (oldVal.length == 0)):   // New Value
          cssClass = ['added'];
          break;

        case ((newVal == '') && (oldVal > '')):
        case ((newVal.length == 0) && (oldVal.length > 0)):   // Deleted Value
          cssClass = ['deleted'];
          break;

        case (JSON.stringify(newVal) != JSON.stringify(oldVal)): // Changed Value
          cssClass = ['changed'];
          break;

        default:                                              // No change
          break;
      }
    }
    return cssClass;
  } // HiLiteDiff()

  public DisplayClickedRevision(data) {

    console.log('received:', data);
  }

}
