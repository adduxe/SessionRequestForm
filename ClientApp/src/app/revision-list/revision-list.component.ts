import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridDataResult, DataStateChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';

import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestState } from '../shared/models/sessionrequeststate';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'sr-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.css']
})
export class RevisionListComponent implements OnInit {
  @Input() public sr: SessionRequest;

  public gridData: GridDataResult;
  public mySelection: number[] = [];
  public currentSessionRequest: SessionRequestState;
  public state: State = {};

  constructor(private router: Router, private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    this.sessionRequestService.currentSessionRequest.subscribe(srs => {
      this.currentSessionRequest = srs;
      if (this.currentSessionRequest != null) {
        if (this.currentSessionRequest.sessionRequestRevision != null) {
          this.mySelection = [this.currentSessionRequest.sessionRequestRevision.versionNumber];
          this.state = this.currentSessionRequest.srrState;
        }
      }
      this.loadRevisions(); 
    });
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    if (this.sr.revisions != null && this.sr.revisions.length > 0) {
      this.gridData = process(this.sr.revisions, this.state);
    }
  }

  public dataSelectionChange(selection) {
    const selectedData = {
      sessionRequest: this.sr,
      sessionRequestRevision: selection.selectedRows[0].dataItem,
      state: this.isSRSame() ? this.currentSessionRequest.state : {skip: 0,take: 3},
      srrState: this.state
    };

    this.sessionRequestService.changeSessionRequest(selectedData);
    console.log('from revision:' + JSON.stringify(selectedData));
    this.router.navigate(['/fetch-data']);
  }

  private isSRSame(): boolean {
    if (this.currentSessionRequest) {
      if (this.currentSessionRequest.sessionRequest) {
        return this.currentSessionRequest.sessionRequest.sessionRequestID == this.sr.sessionRequestID;
      }
    }

    return false;
  }

  private loadRevisions() {
    console.log(this.sr.sessionRequestID);
    this.sessionRequestService.getSessionRequestRevisions(this.sr.sessionRequestID).subscribe(srr => {
      this.sr.revisions = srr;
      if (this.sr.revisions != null && this.sr.revisions.length > 0) {
        this.gridData = process(this.sr.revisions, this.state);
      }
    });
  }
}
