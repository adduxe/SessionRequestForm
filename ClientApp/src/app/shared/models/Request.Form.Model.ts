import { Revision, SessBreak } from '../models/Revisions.Model';


export class CodeNamePair {

  public code: string;
  public name: string;

  constructor(Code ?: any | null, Name ?: string | null){

    if (!!Code) {

      this.code = Code.toString();
      this.name = Name;

    } else {

      this.code = null;
      this.name = null;
    } // if(!!code)
  } // constructor()
};  // CodeNamePair{}


export class DateRange {

  startDate: Date;
  endDate: Date;

  constructor(startDate?: Date, endDate?: Date) {

    if (!!startDate && !!endDate) {

      this.startDate = startDate;
      this.endDate = endDate;

    } else {

      this.startDate = null;
      this.endDate = null;

    } // if(!!start..)
  } // constructor()
}   // DateRange{}


export class ClassLoc {

  campus: CodeNamePair;

  startDate: Date;
  endDate: Date;

  constructor(classLoc?: ClassLoc) {

    this.campus = new CodeNamePair(classLoc.campus.code, classLoc.campus.name);
    this.startDate = null;
    this.endDate = null;

  }   // constructor()
};  // classLoc{}


export class SpecialFee {

  fee: CodeNamePair;

  amount: number;

  gradeLevel: CodeNamePair;

  enrollType: CodeNamePair;

  constructor() {
    this.fee = new CodeNamePair();
    this.amount = null;
    this.gradeLevel = new CodeNamePair();
    this.enrollType = new CodeNamePair();
  } // constructor()

};  // SpecialFee{}


class sessDates {

  firstDayOfClass: Date;
  lastDayOfClass: Date;
  firstDayOfFinals: Date;
  lastDayOfFinals: Date;
  sessionBreaks: DateRange[];

  private FormSessionBreaks(sessBreaks: SessBreak[]) {

    var eachBreak: DateRange = null;

    for (var i = 0; i < sessBreaks.length; ++i) {
      eachBreak = new DateRange(sessBreaks[i].start, sessBreaks[i].end);
      this.sessionBreaks.push(eachBreak);
    }   // for()

  } // FormSessionBreaks

  constructor(session?: Revision) {

    if (!!session) {

      this.firstDayOfClass = session.firstDayOfClass;
      this.lastDayOfClass = session.lastDayOfClass;
      this.firstDayOfFinals = session.firstDayOfFinals;
      this.lastDayOfFinals = session.lastDayOfFinals;
      this.FormSessionBreaks(session.breaks);
      this.sessionBreaks = [];

    } else {

      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;
      this.sessionBreaks = [];

    }   // if (!!session)
  } // constructor

};  // sessDates()


export class Session {

  academicTerm: CodeNamePair;

  session: CodeNamePair;

  dates: sessDates;

  classLocations: ClassLoc[];

  rateType: any;

  specialFees: SpecialFee[]

  comments: string;

  constructor(session?: Revision) {

    if (!!session) {

      this.dates = new sessDates(session);

    } else {

      this.dates = new sessDates();
    }

    this.classLocations = [];

    this.specialFees = [];

    this.academicTerm = new CodeNamePair();

    this.session = new CodeNamePair();

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
