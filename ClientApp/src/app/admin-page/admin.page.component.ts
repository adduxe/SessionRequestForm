import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

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

  public recordCount = {
    needsMyAction: 0,
    deptRequests: 0,
    allPending: 0
  }

  constructor(private sqlDataService: SQLDataService, private router: Router)
  {
    this.ChangeDisplayedList();     // get the default queue
    this.recordCount.needsMyAction = this.sqlDataService.getNeedsMyActionRequests(this.userId).length;
    this.recordCount.deptRequests = this.sqlDataService.getMyDepartmentsRequests(this.deptId).length;
    this.recordCount.allPending = this.sqlDataService.getAllPendingRequests().length;
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

    var dataItem = rowEvent.selectedRows[0].dataItem;
    var requestID = dataItem.term + dataItem.sessionCode;
    console.log("Request ID: " + requestID);
    this.router.navigate(['/diff-page/' + requestID]);
    return;
  }

}

