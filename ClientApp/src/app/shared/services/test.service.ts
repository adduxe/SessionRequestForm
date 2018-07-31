import { Injectable } from '@angular/core';

@Injectable()

export class TestService {

  public testSvcValue: string = "Value coming from Test Service.";
  public Session: string = '';

  constructor() {

  } // constructor()

  public UpdateSession(fromChild: string) {
    this.Session = fromChild;
    if 
  }

} // TestService{}
