import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class DataService extends BehaviorSubject<GridDataResult>{
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
    this.loading = true;
    return this.http
      .get(`${this.baseUrl}${actionName}`)
      .pipe(
      map(response => (<GridDataResult>{
        data: response['value']
      })),
      tap(() => this.loading = false)
      );
  }

  public queryForPendingSessionRequest(actionName: string, state?: any): void {
    this.query(actionName, Object.assign({}, state, {
      filter: {
        logic: 'or',
        filters: [
          { field: 'status', operator: 'contains', value: 'Waiting for Approval' },
          { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
        ]
      }
    }));
  }

  public queryForCategory({ CategoryID }: { CategoryID: number }, actionName: string, state?: any): void {
    this.query(actionName, Object.assign({}, state, {
      filter: {
        filters: [{
          field: 'CategoryID', operator: 'eq', value: CategoryID
        }],
        logic: 'and'
      }
    }));
  }

  public queryForProductName(productName: string, actionName:string, state?: any): void {
    this.query(actionName, Object.assign({}, state, {
      filter: {
        filters: [{
          field: 'ProductName', operator: 'contains', value: productName
        }],
        logic: 'and'
      }
    }));
  }

  public queryAll(actionName: string, st?: any): Observable<GridDataResult> {
    const state = Object.assign({}, st);
    delete state.skip;
    delete state.take;

    return this.fetch(actionName, state);
  }
}
