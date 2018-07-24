import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class sessBreak {

  startDate: Date;
  endDate: Date;

  constructor() {
    this.startDate = null;
    this.endDate = null;
  }
};

class sessDates {

  firstDayOfClass: Date;
  lastDayOfClass: Date;
  sessionBreaks: sessBreak[];

  constructor() {
    this.sessionBreaks = [];
  }
};

class Request {

  term: number;
  sessionCode: string;

  dates: sessDates;

  constructor() {
    this.term = 20183;
    this.sessionCode = "555";
    this.dates = new sessDates();
  }
};

@Component({
  selector: 'test-page',
  templateUrl: './test.page.component.html'
})

export class TestPageComponent{

  public username: string = '';
  public session: Request;

  constructor(){

  }

  ngOnInit() {

    this.session = new Request();

    var newBreak: sessBreak = new sessBreak();
    newBreak.startDate = new Date("10/22/1969");
    newBreak.endDate = new Date("01/01/2001");

    this.session.dates.sessionBreaks.push(newBreak);

  }

}
