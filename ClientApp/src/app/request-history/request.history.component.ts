import { Component, OnInit } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: "request-history",
  templateUrl: "request.history.component.html"
})

export class RequestHistoryComponent implements OnInit{

  public sessRevs: any[];
  private reqID: string = "20181555";

  constructor(private sqlDataService: SQLDataService) {
    // need this to inject the SQL Data Service into the component
  }

  ngOnInit() {
      this.sessRevs = this.sqlDataService.getAllRevsStatusByRequestID(this.reqID);
  }
}
