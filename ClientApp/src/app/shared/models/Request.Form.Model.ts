import { Request, Revision, RevBreak } from '../models/Revisions.Model';

export class CodeNamePair {

  public code: string;
  public name: string;

  constructor(Code ?: any, Name ?: string){

    if (!!Code && !!Name) {

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

  constructor() {
   
    this.campus = new CodeNamePair();
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

  firstDayOfClass:  Date;
  lastDayOfClass:   Date;
  firstDayOfFinals: Date;
  lastDayOfFinals:  Date;
  sessionBreaks:    DateRange[];

  constructor(revision?: Revision) {

    this.sessionBreaks = [];

    if (!!revision) {

      this.firstDayOfClass = revision.firstDayOfClass;
      this.lastDayOfClass = revision.lastDayOfClass;
      this.firstDayOfFinals = revision.firstDayOfFinals;
      this.lastDayOfFinals = revision.lastDayOfFinals;

      this.FormSessionBreaks(revision.breaks);

    } else {

      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;

    }   // if (!!session)
  } // constructor


  private FormSessionBreaks(revBreaks: RevBreak[]) {

    var eachBreak: DateRange = null;

    for (var i = 0; i < revBreaks.length; ++i) {
      eachBreak = new DateRange(revBreaks[i].start, revBreaks[i].end);
      this.sessionBreaks.push(eachBreak);
    } // for()

  } // FormSessionBreaks()

};  // sessDates()


export class Session {

  academicTerm: CodeNamePair;

  session: CodeNamePair;

  dates: sessDates;

  classLocations: ClassLoc[];

  rateType: any;

  specialFees: SpecialFee[]

  comments: string;

  constructor(request?: Request) {

    this.classLocations = [];
    this.specialFees = [];

    if (!!request) {

      this.academicTerm = new CodeNamePair(request.term, this.ReturnTermName(request.term));
      this.session = new CodeNamePair(request.code);

      if (request.revisions.length > 0) {

        var mostRecentRev: number = request.revisions.length - 1;         // assumes that the last record is the latest revision
        var latestRev: Revision = request.revisions[mostRecentRev];

        this.dates = new sessDates(latestRev);                            // Form the Session Dates section

      }

    } else {

      this.academicTerm = new CodeNamePair();
      this.session = new CodeNamePair();
      this.dates = new sessDates();

    }   // if(!!revision)


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

  private ReturnTermName(term: string): string {

    var termName: string = '';
    var acadYear: string = term.substr(0,4);
    var semCode: string = term.charAt(term.length - 1);

    switch (semCode) {

      case '1':
        termName = acadYear + " Spring";
        break;

      case '2':
        termName = acadYear + " Summer";
        break;

      case '3':
        termName = acadYear + " Fall";
        break;

      default:
        break;

    }   // switch(semCode)

    return termName;
  }   // ReturnTermName()

}; // session
