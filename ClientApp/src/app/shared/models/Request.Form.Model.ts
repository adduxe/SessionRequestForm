export class CodeNamePair {

  public code: string;
  public name: string;

//  constructor();
  constructor(Code ?: any | null, Name ?: string | null){

    if (!!Code) {
      this.code = Code.toString();
      this.name = Name;
    } else {
      this.code = null;
      this.name = null;
    }
  }
};


export class sessBreak {

  startDate: Date;
  endDate: Date;

  constructor() {
    this.startDate = null;
    this.endDate = null;
  }

};


export class classLoc {

  code: any;

  startDate: Date;
  endDate: Date;

  constructor() {

    this.code = {
      campusCode: null,
      campusName: null
    };
    this.startDate = null;
    this.endDate = null;
  }
};


export class SpecialFee {

  fee: CodeNamePair;

  amount: number;

  gradeLevel: CodeNamePair;

  enrollType: CodeNamePair;

  constructor() {
    this.fee = new CodeNamePair();
    this.gradeLevel = new CodeNamePair();
    this.enrollType = new CodeNamePair();
  }

};


class sessDates {

  firstDayOfClass: Date;
  lastDayOfClass: Date;
  firstDayOfFinals: Date;
  lastDayOfFinals: Date;
  sessionBreaks: sessBreak[];

  constructor() {
    this.sessionBreaks = [];
    this.firstDayOfClass = null;
    this.lastDayOfClass = null;
    this.firstDayOfFinals = null;
    this.lastDayOfFinals = null;
  }

};


export class Session {

  academicTerm: CodeNamePair;

  code: any;

  dates: sessDates;

  classLocations: classLoc[];

  rateType: any;

  specialFees: SpecialFee[]

  comments: string;

  constructor() {

    this.classLocations = [];

    this.specialFees = [];

    this.dates = new sessDates();

    this.academicTerm = new CodeNamePair();

    this.code = {
      sessionCode: null,
      sessionDesc: null
    }

    this.rateType = {

      code: null,
      description: null,
      unitRate: null,
      flatRate: null,

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
    };
  }   // constructor()

}; // session
