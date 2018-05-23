import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'app';

  public shibInfo = {
    userName: 'Requester Name',
    collegeName: 'Requesting College',
    departmentName: 'Requesting Department',
    phoneNumber: '',
    emailAddress: ''
  }

}
