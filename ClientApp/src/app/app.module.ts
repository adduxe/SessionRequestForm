import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ConfirmPageComponent } from './confirm-page/confirm.page.component';
import { DiffPageComponent } from './diff-page/diff.page.component';
import { RequestFormComponent } from './request-form/request.form.component';
import { AdminPageComponent } from './admin-page/admin.page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestHistoryComponent } from './request-history/request.history.component';
import { SessionRequestListComponent } from './session-request-list/session-request-list.component'
import { RevisionListComponent } from './revision-list/revision-list.component';
import { TestPageComponent } from './test-page/test.page.component';

import { SessionRequestService } from './shared/services/sessionrequest.service';
import { PEDataService } from './shared/services/pedata.service';
import { SQLDataService } from './shared/services/sqldata.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    SessionRequestListComponent,
    ConfirmPageComponent,
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
    InputsModule,
    DropDownsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SessionRequestService,
    PEDataService,
    SQLDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
