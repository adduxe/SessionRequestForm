import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Revision, Revisions } from '../models/Revisions.Model';
import { Session } from '../models/Request.Form.Model';

@Injectable()

export class SubmitFormService {

  constructor(
    private router: Router
  ) { }

  public session: Session;
  
  public cacheSubmittedFields(submittedFields: Session) {   // Just to save the data here in this service.

    this.session = submittedFields;
    var submitSuccess = true;
    this.router.navigate(['/confirm-page']);
    return submitSuccess;

  }   // cacheSubmittedFields()

  
  public saveToDatabase() {     // Save the submitted fields to the database.

    var webServicePacket: Revisions = new Revisions(this.session);

    if (this.sendToDB(webServicePacket)) {

      alert('Data sent to database');
      this.router.navigate(['/admin-page']);

    } else {

      alert('Error in writing to the database!');
      this.router.navigate(['/request-form']);

    } // else
   
  } // saveToDatabase()



  private sendToDB(sessReqData: any) {      // dummy web service call


    return true;
  }

}
