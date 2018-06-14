import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent } from '@progress/kendo-angular-grid';
import { SQLDataService } from '../shared/services/sqldata.service';

enum QUEUE { MYATTENTION, DEPTREQUESTS, ALLPENDING }

@Component({
  selector: 'admin-page',
  templateUrl: './admin.page.component.html'
})

export class AdminPageComponent {

  public userId: string = "Gregory";
  public deptId: string = "MED";

  public displayQueue: any[];
  public QUEUE = QUEUE;         // to expose the enum to HTML

  constructor(private sqlDataService: SQLDataService, private router: Router)
  {
    this.ChangeDisplayedList();     // get the default queue
  }

  public ChangeDisplayedList(listName?: number): any[] {

    switch (listName) {

      case QUEUE.MYATTENTION:
        this.displayQueue = this.sqlDataService.getNeedsMyActionRequests(this.userId);
        break;

      case QUEUE.DEPTREQUESTS:
        this.displayQueue = this.sqlDataService.getMyDepartmentsRequests(this.deptId);
        break;

      case QUEUE.ALLPENDING:
        this.displayQueue = this.sqlDataService.getAllPendingRequests();
        break;

      default:     // the default queue is Needs my Attention Queue
        this.displayQueue = this.sqlDataService.getNeedsMyActionRequests(this.userId);
        break;
    }

    return this.displayQueue;
  }

  public RowClicked(rowEvent): void {
    console.log(rowEvent.index);
    this.router.navigate(['/diff-page?reqID=']);
    return;
  }

}

