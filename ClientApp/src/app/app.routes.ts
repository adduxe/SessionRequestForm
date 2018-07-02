import { Routes } from '@angular/router';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionRequestListComponent } from './session-request-list/session-request-list.component'
import { DiffPageComponent } from './diff-page/diff.page.component';
import { ConfirmPageComponent } from './confirm-page/confirm.page.component';
import { RequestFormComponent } from './request-form/request.form.component';
import { RequestHistoryComponent } from './request-history/request.history.component';
import { AdminPageComponent } from './admin-page/admin.page.component';
import { TestPageComponent } from './test-page/test.page.component';


export const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'srlist/:operation', component: SessionRequestListComponent },
  { path: 'diff-page/:requestid', component: DiffPageComponent },
  { path: 'confirm-page', component: ConfirmPageComponent },
  { path: 'request-form', component: RequestFormComponent },
  { path: 'request-history', component: RequestHistoryComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'test-page', component: TestPageComponent }
]
