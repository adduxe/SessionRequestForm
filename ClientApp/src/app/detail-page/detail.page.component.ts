import { Component, Inject, Output, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

//import { SessionRequestService } from '../shared/services/sessionrequest.service';
//import { SessionRequest } from '../shared/models/sessionrequest';
//import { SessionRequestState } from '../shared/models/sessionrequeststate';

import { SQLDataService } from '../shared/services/sqldata.service';

enum SECT {
  GENINFO = 0,
  DATES = 1,
  RATES = 2,
  SPECFEES = 3,
  CLASSLOCS = 4,
  COMMENTS = 5
}

@Component({
  selector: 'detail-page',
  templateUrl: './detail.page.component.html',
  styleUrls: ['./detail.page.component.css']
})

export class DetailPageComponent implements OnInit{

  @Output() pageTitle: string = "Detail Page";
  
  //public sessionRequestState: SessionRequestState;
  //public sessionRequest: SessionRequest;
  //public session: any;

  //constructor( @Inject('BASE_URL') baseUrl: string,
  //  private location: Location,
  //  private sessionRequestService: SessionRequestService) {

  //  this.sessionRequestService.currentSessionRequest.subscribe(srs => {
  //    this.sessionRequestState = srs;
  //    this.sessionRequestService.getSessionByID(srs.sessionRequest.sessionRequestID).subscribe(s => {
  //      this.session = s;
  //    });

  //    if (this.sessionRequestState) {
  //      this.sessionRequest = this.sessionRequestState.sessionRequest;
  //    }
  //  });
  //  console.log(this.sessionRequest);
  //}

  public session: any;
  public showAllValues: boolean = false;
  private revisionID: number = 1003;

  constructor(private sqlDataService: SQLDataService) {
    // need this to inject the SQLDataService into the component
  }

  ngOnInit() {

    this.session = this.sqlDataService.getSessionByRevisionID(this.revisionID);
    this.ShowHideAll();
  }

  public SECT = SECT;

  public showThisSection: boolean[] = [false, false, false, false, false, false];

  public showHideButton: string = "Show All";

  public ShowHideAll() {

    this.showAllValues = !this.showAllValues;

    if (this.showAllValues) {
      this.showHideButton = "Hide All";
      for (var i = SECT.GENINFO; i <= SECT.COMMENTS; ++i) {
        this.showThisSection[i] = true;
      }
    } else {
      this.showHideButton = "Show All";
      for (var i = SECT.GENINFO; i <= SECT.COMMENTS; ++i) {
        this.showThisSection[i] = false;
      }
    }

    return;
  }

}
