import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { toODataString } from '@progress/kendo-data-query';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class GidDataService extends BehaviorSubject<GridDataResult>{
  public loading: boolean;
  public baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(null);
    this.baseUrl = baseUrl + 'api/SessionRequest/';
  }

  public query(actionName:string, state: any): void {
    this.fetch(actionName, state)
      .subscribe(x => super.next(x));
  }

  private fetch(actionName: string, state: any): Observable<GridDataResult> {
    const queryStr = `${toODataString(state)}&$count=true`;
    this.loading = true;

    return this.http
      .get(`${this.baseUrl}${actionName}?${queryStr}`)
      .pipe(
        map(response => (<GridDataResult>{
          data: response['value'],
          total: parseInt(response['@odata.count'], 10)
        })),
        tap(() => this.loading = false)
      )
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public queryForPendingSessionRequest(actionName: string, state?: any): void {
    /*this.query(actionName, Object.assign({}, state, {
      filter: {
        logic: 'or',
        filters: [
          { field: 'status', operator: 'contains', value: 'Waiting for Approval' },
          { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
        ]
      }
    }));*/

    const filters = {
      filter: {
        filters: [{ field: 'status', operator: 'contains', value: 'Waiting for Approval' },
                  { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
        ],
        logic: 'and'
      }
    };

    const newState = { state, ...filters };
    this.query(actionName, newState);
  }

  public queryForCategory({ CategoryID }: { CategoryID: number }, actionName: string, state?: any): void {
    /*this.query(actionName, Object.assign({}, state, {
      filter: {
        filters: [{
          field: 'CategoryID', operator: 'eq', value: CategoryID
        }],
        logic: 'and'
      }
    }));*/

    const filters = {
      filter: {
        filters: [{ field: 'CategoryID', operator: 'eq', value: CategoryID}],
        logic: 'and'
      }
    };

    const newState = { state, ...filters };
    this.query(actionName, newState);
  }

  public queryForProductName(productName: string, actionName: string, state?: any): void {
    const filters = {
      filter: {
        filters: [{ field: 'ProductName', operator: 'contains', value: productName}],
        logic: 'and'
      }
    };

    const newState = { state, ...filters };
    this.query(actionName, newState);

    /*this.query(actionName, Object.assign({}, state, {
      filter: {
        filters: [{
          field: 'ProductName', operator: 'contains', value: productName
        }],
        logic: 'and'
      }
    }));*/
  }

  public queryAll(actionName: string, st?: any): Observable<GridDataResult> {
    const state = st; //Object.assign({}, st);
    delete state.skip;
    delete state.take;

    return this.fetch(actionName, state);
  }
}
