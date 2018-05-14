import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

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
    RevisionListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    GridModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'srlist/:operation', component: SessionRequestListComponent },
    ])
  ],
  providers: [
    SessionRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
