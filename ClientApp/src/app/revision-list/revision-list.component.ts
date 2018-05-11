import { Component, Input, OnInit } from '@angular/core';
import { SessionRequest } from '../shared/models/sessionrequest';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';

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
    this.gridData = process(this.sr.revisions, this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.sr.revisions, this.state);
  }
}
