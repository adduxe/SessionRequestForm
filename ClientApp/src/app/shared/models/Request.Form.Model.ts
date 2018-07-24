class codeNamePair {

  public code: string;
  public name: string;

  constructor();
  constructor(Code?: any | null, Name?: string | null) {

    if (!!Code) {
      this.code = Code.toString();
      this.name = Name;
    }
  }
};


export class sessBreak {

  startDate: Date;
  endDate: Date;

};


export class classLoc {

  code: {
    campusCode: string;
    campusName: string;
  }

  startDate: Date;
  endDate: Date;

};


export class specialFee {

  fee: codeNamePair;

  amount: number;

  gradeLevel: codeNamePair;

  enrollType: codeNamePair;

  constructor() {
    this.fee = new codeNamePair();
    this.gradeLevel = new codeNamePair();
    this.enrollType = new codeNamePair();
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
  }

};


export class Session {

  academicTerm: codeNamePair;

  code: any;

  dates: sessDates;

  classLocations: classLoc[];

  rateType: any;

  specialFees: specialFee[]

  comments: string;

  constructor() {

    this.classLocations = [];

    this.specialFees = [];

    this.dates = new sessDates();

    this.academicTerm = new codeNamePair();

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
