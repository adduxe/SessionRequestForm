import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class SubmitFormService {

  constructor(
    private router: Router
  ) { }

  public session: any;

  public submitForm(submittedFields: any) {
    this.session = submittedFields;
    var submitSuccess = true;
    this.router.navigate(['/confirm-page']);
    return submitSuccess;
  }
}
