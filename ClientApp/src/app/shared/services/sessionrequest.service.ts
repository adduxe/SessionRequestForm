import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SessionRequest } from '../models/sessionRequest';
import { SessionRequestRevision } from '../models/sessionRequestRevision';
import { SessionRequestState } from '../models/sessionRequestState';

@Injectable()
export class SessionRequestService {
  headers: Headers;
  options: RequestOptions;
  url: string;

  private srSource = new BehaviorSubject<SessionRequestState>(null);
  currentSessionRequest = this.srSource.asObservable();

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
    this.url = baseUrl + 'api/SessionRequest/';
  }

  changeSessionRequest(sessionRequestState: SessionRequestState) {
    this.srSource.next(sessionRequestState);
  }

  resetSessionRequest() {
    this.srSource.next(null);
  }
  getSessionByID(requestID: number): Observable<any> {
    console.log(this.url + 'api/SessionRequest/GetSessionByID');
    return this.http.get(this.url + 'api/SessionRequest/GetSessionByID')
      .catch(this.handleError);
  }


  getAllSessionRequest(): Observable<SessionRequest[]> {
    console.log(this.url + 'GetSessionRequests');
    return this.http.get(this.url + 'GetSessionRequests')
      .catch(this.handleError);
  }

  getPendingSessionRequest(): Observable<SessionRequest[]> {
    console.log(this.url + 'GetPendingSessionRequests');
    return this.http.get(this.url + 'GetPendingSessionRequests')
      .catch(this.handleError);
  }

  getSessionRequestRevisions(srId: number): Observable<SessionRequestRevision[]> {
    return this.http.get(this.url + 'GetSessionRequestRevisions?srId=' + srId)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
