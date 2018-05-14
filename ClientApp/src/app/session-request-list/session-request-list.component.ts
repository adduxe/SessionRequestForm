import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

import { mockSessionRequests } from '../shared/data/sessionrequests';
import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'sr-session-request-list',
  templateUrl: './session-request-list.component.html',
  styleUrls: ['./session-request-list.component.css']
})
export class SessionRequestListComponent implements OnInit {
  private sub: any;
  private operation: string;

  public gridData: GridDataResult;
  public sessionRequestList: SessionRequest[];
  @ViewChild(GridComponent) grid: GridComponent;

  public mySelection: number[] = [2137];
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

  constructor(private route: ActivatedRoute, private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.operation = params['operation'];
      //this.sessionRequestList = mockSessionRequests;
      this.getSessionRequest();
    });
  }

  public ngAfterViewInit(): void {
    // Expand the first row initially
    this.grid.expandRow(0);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.sessionRequestList, this.state);
  }

  getSessionRequest() {
    this.sessionRequestService.getAllSessionRequest().subscribe(res => {
      this.sessionRequestList = res;
      if (this.operation == 'all') {
        delete this.state.filter;
      }

      this.gridData = process(this.sessionRequestList, this.state);
    }, error => console.error(error));
  }

  dataSelectionChange(selection) {
    const selectedData = selection.selectedRows[0].dataItem;
    this.sessionRequestService.changeSessionRequest(selectedData);
    console.log(selectedData);
  }
}
