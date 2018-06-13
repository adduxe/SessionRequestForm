import { Component } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin.page.component.html'
})

export class AdminPageComponent {

  public userId: string = "userID";
  public displayQueue: any[];

  constructor(private sqlDataService: SQLDataService) {
    this.displayQueue = sqlDataService.getNeedsMyActionRequests(this.userId); // default queue is Needs my Attention Queue
  }

}

