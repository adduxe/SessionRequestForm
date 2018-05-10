import { Component, OnInit } from '@angular/core';
import { mockSessionRequests } from '../shared/data/sessionrequests';
import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'sr-session-request-list',
  templateUrl: './session-request-list.component.html',
  styleUrls: ['./session-request-list.component.css']
})
export class SessionRequestListComponent implements OnInit {
  public sessionRequestList: SessionRequest[];

  constructor(private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    //this.sessionRequestList = mockSessionRequests;
    this.getSessionRequest();
  }

  getSessionRequest() {
    this.sessionRequestService.getAllSessionRequest().subscribe(res => {
      this.sessionRequestList = res;
    }, error => console.error(error));
  }
}
