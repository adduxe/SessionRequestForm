import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DetailPageComponent } from './detail-page/detail.page.component';
import { DiffPageComponent } from './diff-page/diff.page.component';
import { RequestFormComponent } from './request-form/request.form.component';
import { AdminPageComponent } from './admin-page/admin.page.component';

import { SessionRequestService } from './shared/services/sessionrequest.service';
import { SessionRequestListComponent } from './session-request-list/session-request-list.component'
import { RevisionListComponent } from './revision-list/revision-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestHistoryComponent } from './request-history/request.history.component';
import { TestPageComponent } from './test-page/test.page.component';

import { PEDataService } from './shared/services/pedata.service';
import { SQLDataService } from './shared/services/sqldata.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    SessionRequestListComponent,
    DetailPageComponent,
    DiffPageComponent,
    DashboardComponent,
    RevisionListComponent,
    RequestFormComponent,
    RequestHistoryComponent,
    AdminPageComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    DateInputsModule,
    IntlModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'srlist/:operation', component: SessionRequestListComponent },
      { path: 'diff-page/:requestid', component: DiffPageComponent },
      { path: 'detail-page', component: DetailPageComponent },
      { path: 'request-form', component: RequestFormComponent },
      { path: 'request-history', component: RequestHistoryComponent },
      { path: 'admin-page', component: AdminPageComponent },
      { path: 'test-page', component: TestPageComponent }
    ])
  ],
  providers: [
    SessionRequestService,
    PEDataService,
    SQLDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
