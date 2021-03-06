import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { mockSessionRequests } from '../shared/data/sessionrequests';
import { SessionRequest } from '../shared/models/sessionRequest';
import { SessionRequestState } from '../shared/models/sessionRequestState';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'sr-session-request-list',
  templateUrl: './session-request-list.component.html',
  styleUrls: ['./session-request-list.component.css']
})
export class SessionRequestListComponent implements OnInit {
  private sub: any;
  private operation: string;
  private rowIndex: number;

  public title: string;
  public gridData: GridDataResult;
  public sessionRequestList: SessionRequest[];
  public currentSessionRequest: SessionRequestState;

  @ViewChild(GridComponent) grid: GridComponent;
  public items: any[];
  public mySelection: number[] = [];
  public state: State = {
    skip: 0,
    take: 3
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.operation = params['operation'];
      if (this.operation == 'all') {
        this.title = "All Session Requests";
      }
      else {
        this.title = "Pending Session Requests";
      }

      //this.sessionRequestList = mockSessionRequests;
      this.sessionRequestService.currentSessionRequest.subscribe(sr => this.currentSessionRequest = sr);
      if (this.currentSessionRequest != null)
      {
        this.mySelection = [this.currentSessionRequest.sessionRequest.sessionRequestID];
        this.state = this.currentSessionRequest.state;
        this.rowIndex = this.currentSessionRequest.rowIndex;
      }
      this.getSessionRequest();
    });
  }

  public ngAfterViewInit(): void {
    if (this.currentSessionRequest && this.currentSessionRequest.sessionRequest) {
      this.grid.expandRow(this.rowIndex);
    }
  }

  /*(detailExpand) = "loadRevisions($event)"
  public loadRevisions(detail) {
    console.log(detail);
    this.sessionRequestService.getSessionRequestRevisions(detail.dataItem.sessionRequestID).subscribe(srr => {
      detail.dataItem.revisions = srr;
    });
  }*/

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.sessionRequestList, this.state);

    let stateData = {
      sessionRequest: null,
      sessionRequestRevision: null,
      state: this.state,
      srrState: null,
      rowIndex: 0
    };

    if (this.currentSessionRequest) {
      stateData = {
        sessionRequest: this.currentSessionRequest.sessionRequest,
        sessionRequestRevision: null,
        state: this.state,
        srrState: null,
        rowIndex: this.currentSessionRequest.rowIndex
      };
    }
    this.sessionRequestService.changeSessionRequest(stateData);
  }

  private getSessionRequest() {
    if (this.operation == 'all') {
      this.sessionRequestService.getAllSessionRequest().subscribe(res => {
        this.sessionRequestList = res;
        this.filterData();
      }, error => console.error(error));
    }
    else {
      this.sessionRequestService.getPendingSessionRequest().subscribe(res => {
        this.sessionRequestList = res;
        this.filterData();
      }, error => console.error(error));
    }
  }

  private filterData() {
    if (this.sessionRequestList != null && this.sessionRequestList.length > 0) {
      this.gridData = process(this.sessionRequestList, this.state);
      /*this.gridData = {
        data: this.sessionRequestList.slice(this.state.skip, this.state.skip + this.state.take),
        total: this.sessionRequestList.length
      };*/
    }
  }

  public dataSelectionChange(selection) {
    const selectedData = {
      sessionRequest: selection.selectedRows[0].dataItem,
      sessionRequestRevision: null,
      state: this.state,
      srrState: null,
      rowIndex: selection.index
    };

    this.sessionRequestService.changeSessionRequest(selectedData);
    //console.log(JSON.stringify(selectedData));
    this.router.navigate(['/fetch-data']);
  }
}
