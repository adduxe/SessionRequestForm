import { Component, Input, OnInit } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestService } from '../shared/services/sessionrequest.service';
@Component({
  selector: 'sr-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.css']
})
export class RevisionListComponent implements OnInit {
  @Input() public sr: SessionRequest;
  public gridData: GridDataResult;

  public state: State = {
    skip: 0,
    take: 20
  };
  constructor() { }

  ngOnInit() {
    if (this.sr.revisions != null && this.sr.revisions.length > 0) {
      this.gridData = process(this.sr.revisions, this.state);
    }
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    if (this.sr.revisions != null && this.sr.revisions.length > 0) {
      this.gridData = process(this.sr.revisions, this.state);
    }
  }
}
