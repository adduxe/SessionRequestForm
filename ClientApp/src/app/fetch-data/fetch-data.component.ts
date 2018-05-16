import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SessionRequestService } from '../shared/services/sessionrequest.service';
import { SessionRequest } from '../shared/models/sessionrequest';
import { SessionRequestState } from '../shared/models/sessionrequeststate';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public sessionRequestState: SessionRequestState;
  public sessionRequest: SessionRequest;

  constructor(http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private location: Location,
    private sessionRequestService: SessionRequestService) {
   
    this.sessionRequestService.currentSessionRequest.subscribe(srs => {
      this.sessionRequestState = srs;
      if (this.sessionRequestState)
      {
        this.sessionRequest = this.sessionRequestState.sessionRequest;
      }
    });
    console.log(this.sessionRequest);
  }

  goBack() {
    this.location.back();
  }
}
