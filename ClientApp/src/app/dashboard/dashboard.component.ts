import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionRequestService } from '../shared/services/sessionrequest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private sessionRequestService: SessionRequestService) { }

  ngOnInit() {
    this.sessionRequestService.resetSessionRequest();
  }

  getAllSessionRequests() {
    let operation = "all";
    this.router.navigate(['/srlist', operation]);
  }

  getPendingSessionRequests() {
    let operation = "pending";
    this.router.navigate(['/srlist', operation]);
  }
}
