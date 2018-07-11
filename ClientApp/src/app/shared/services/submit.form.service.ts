import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class SubmitFormService {

  constructor(
    private router: Router
  ) { }

  public session: any;
  
  public cacheSubmittedFields(submittedFields: any) {   // Just to save the data here in this service.
    this.session = submittedFields;
    var submitSuccess = true;
    this.router.navigate(['/confirm-page']);
    return submitSuccess;
  }
  
  public saveToDatabase() {     // Save the submitted fields to the database.

    if (this.sendToDB(this.session)) {
      alert('Data sent to database');
      this.router.navigate(['/admin-page']);
    } else {
      alert('Error in writing to the database!');
      this.router.navigate(['/request-form']);
    }
   
  } // saveToDatabase()



  private sendToDB(sessReqData: any) {      // dummy web service call
    return true;
  }

}
