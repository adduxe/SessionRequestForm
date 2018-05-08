import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { SessionRequest } from '../models/sessionrequest';

@Injectable()
export class SessionRequestService {
  headers: Headers;
  options: RequestOptions;
  url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
    this.url = baseUrl;
  }

  getAllSessionRequest(): Observable<SessionRequest[]> {
    console.log(this.url + 'api/SessionRequest/GetSessionRequests');
    return this.http.get(this.url + 'api/SessionRequest/GetSessionRequests')
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
