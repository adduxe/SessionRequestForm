import { Component, OnInit } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: "request-history",
  templateUrl: "request.history.component.html"
})

export class RequestHistoryComponent implements OnInit{

  public sessRevs: any[];
  public allRevsData: any[];
  private reqID: string = "20183888";

  constructor(private sqlDataService: SQLDataService) {
    // need this to inject the SQL Data Service into the component
  }

  ngOnInit() {
    this.sessRevs = this.sqlDataService.getAllRevsStatusByRequestID(this.reqID);
    this.allRevsData = this.sqlDataService.getAllRevsDataByRequestID(this.reqID);
  }

  public ViewVersion(versionNum: number) {
    console.log(versionNum);
  }
}
