import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ActivatedRoute, Params } from '@angular/router';

import { RequestHistoryComponent } from '../request-history/request.history.component';
import { SQLDataService } from '../shared/services/sqldata.service';


@Component({
  selector: 'diff-page',
  templateUrl: './diff.page.component.html',
  styleUrls: ['./diff.page.component.css']
})

export class DiffPageComponent{

  private reqID: string = "20183888";
  private revID: number = 4;
  private subScribe: any;

  public currSess: any;
  public prevSess: any;
  public allRevsData: any[];
 
  public hideShowPrev: string = "Hide Previous";
  public showSection: boolean = true;     // a variable that Hides/shows the sections
  public showPrevious: boolean = true;   // Hides or shows the previous version of the request

  constructor(private sqlDataService: SQLDataService, private route: ActivatedRoute) {

    this.currSess = this.sqlDataService.getCurrentRevisionByRequestID(this.reqID);
    this.prevSess = this.sqlDataService.getPreviousRevisionByRequestID(this.reqID);
    this.allRevsData = this.sqlDataService.getAllRevsDataByRequestID(this.reqID);

  }

  @Output() pageTitle: string = "Diff Page";
  
  public HideShowPrevVersion() {

    this.showPrevious = !(this.showPrevious);
    if (this.showPrevious) {
      this.hideShowPrev = "Hide Previous";
    } else {
      this.hideShowPrev = "Show Previous";
    }
    return;
  }   // HideShowPrevVersion()

  
  public HiLiteDiff(newVal, oldVal?) {

    var cssClass = [];

    if (oldVal) {

      switch (true) {

        case ((newVal > '') && (oldVal == '')):
        case ((newVal.length > 0) && (oldVal.length == 0)):   // New Value
          //cssClass ['added'];
          cssClass = ['changed'];
          break;

        case ((newVal == '') && (oldVal > '')):
        case ((newVal.length == 0) && (oldVal.length > 0)):   // Deleted Value
          //cssClass = ['deleted'];
          cssClass = ['changed'];

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

  public ChangePreviousVersion(revNum) {
    console.log('received:', revNum);
    this.prevSess = this.allRevsData.find(sess => sess.version == revNum);
  }

  ngOnInit(): void {

    this.subScribe = this.route.params.subscribe(params => {
      this.reqID = params['requestid'];
    });

    console.log("Request ID: " + this.reqID);

  }

  ngOnDestroy() {
    this.subScribe.unsubscribe();
  }

}
