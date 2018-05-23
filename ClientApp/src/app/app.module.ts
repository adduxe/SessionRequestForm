import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DetailPageComponent } from './detail-page/detail.page.component';
import { DiffPageComponent } from './diff-page/diff.page.component';
import { RequestFormComponent } from './request-form/request.form.component';

import { SessionRequestService } from './shared/services/sessionrequest.service';
import { SessionRequestListComponent } from './session-request-list/session-request-list.component'
import { RevisionListComponent } from './revision-list/revision-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    RequestFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'srlist/:operation', component: SessionRequestListComponent },
      { path: 'diff-page', component: DiffPageComponent },
      { path: 'detail-page', component: DetailPageComponent },
      { path: 'request-form', component: RequestFormComponent }
    ])
  ],
  providers: [
    SessionRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
