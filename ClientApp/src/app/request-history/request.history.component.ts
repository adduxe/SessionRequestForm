import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: "request-history",
  templateUrl: "request.history.component.html"
})

export class RequestHistoryComponent implements OnInit{

  @Output() revisionClicked = new EventEmitter();

  public sessRevs: any[];
  public allRevsData: any[];

  private reqID: string = "20183888";

  constructor(private sqlDataService: SQLDataService) {
    this.sessRevs = this.sqlDataService.getAllRevsStatusByRequestID(this.reqID);
    this.allRevsData = this.sqlDataService.getAllRevsDataByRequestID(this.reqID);
  }

  ngOnInit() {
  }

  public ViewVersion(versionNum: number) {

    this.revisionClicked.emit(versionNum);
    console.log(versionNum);
  }

}
