import { Component, OnInit } from '@angular/core';
import { PEDataService } from '../shared/services/pedata.service';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: 'test-page',
    templateUrl: './test.page.component.html'
})

export class TestPageComponent{

  private term: number = 20183;
  private sessionCode: string = "555";
  public termRates: any[];

  public session: any = {

    rateType: {

      rateTypeCode: null,
      rateTypeDesc: null,
      rateTypeUnitRate: null,
      rateTypeFlatRate: null,

      flatRateUnitRange: {
        graduate: {
          minimum: null,
          maximum: null
        },
        undergraduate: {
          minimum: null,
          maximum: null
        }
      }
    }
  };

  private thisSess: any; 

  constructor(
    private peDataService: PEDataService,
    private sqlDataService: SQLDataService
  ){
    this.termRates = this.peDataService.getTermTuitionRates(this.term);
    this.thisSess = this.sqlDataService.getCurrentRevByReqID(this.term, this.sessionCode);
    this.session.rateType = this.thisSess.rateType;    
  }

  ngOnInit() {
    console.log(this.termRates);
    console.log(this.session);
  }

}
