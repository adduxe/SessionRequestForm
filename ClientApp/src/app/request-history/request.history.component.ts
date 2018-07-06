import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: "request-history",
  templateUrl: "request.history.component.html"
})

export class RequestHistoryComponent implements OnInit{

  @Output() revisionClicked = new EventEmitter();

  private term: number = 20183;
  private sessionCode: string = "888";
  public revHistory: any[];
  public allRevsData: any[];

  private reqID: string = this.term.toString() + this.sessionCode;

  constructor(private sqlDataService: SQLDataService) {
    this.revHistory = this.sqlDataService.getAllRevsStatusByRequestID(this.term, this.sessionCode);
    this.allRevsData = this.sqlDataService.getAllRevsDataByRequestID(this.term, this.sessionCode);
  }

  ngOnInit() {
  }

  public ViewVersion(versionNum: number) {
    this.revisionClicked.emit(versionNum);
    console.log(versionNum);
  }

}
