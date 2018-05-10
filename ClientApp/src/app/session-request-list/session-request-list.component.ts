import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

import { mockSessionRequests } from '../shared/data/sessionrequests';
import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'sr-session-request-list',
  templateUrl: './session-request-list.component.html',
  styleUrls: ['./session-request-list.component.css']
})
export class SessionRequestListComponent implements OnInit {
  public gridData: GridDataResult;
  public sessionRequestList: SessionRequest[];
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'or',
      filters: [
        { field: 'status', operator: 'contains', value: 'Waiting for Approval' },
        { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
      ]
    }
  };

  constructor(private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    this.sessionRequestList = mockSessionRequests;
    this.getSessionRequest();
    //this.gridData = process(this.sessionRequestList, this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.sessionRequestList, this.state);
  }
  getSessionRequest() {
    this.sessionRequestService.getAllSessionRequest().subscribe(res => {
      this.sessionRequestList = res;
      this.gridData = process(this.sessionRequestList, this.state);
    }, error => console.error(error));
  }
}
