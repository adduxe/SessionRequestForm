import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DetailPageComponent } from './detail-page/detail.page.component';
import { DiffPageComponent } from './diff-page/diff.page.component';

import { SessionRequestListComponent } from './session-request/session-request-list/session-request-list.component'

import { SessionRequestService } from './shared/services/sessionrequest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SessionRequestListComponent,
    DetailPageComponent,
    DiffPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    GridModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'srlist', component: SessionRequestListComponent },
      { path: 'diff-page', component: DiffPageComponent },
      { path: 'detail-page', component: DetailPageComponent }
    ])
  ],
  providers: [
    SessionRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
