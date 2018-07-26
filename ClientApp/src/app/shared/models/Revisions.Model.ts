import { Session, DateRange, ClassLoc, SpecialFee } from '../models/Request.Form.Model';

class Action {

  id: number;
  group: string;
  name: string;
  comments: string;
  createdDTM: Date;
  revisionId: number

  constructor() {
    this.id = null;
    this.group = null;
    this.name = null;
    this.comments = null;
    this.createdDTM = null;
    this.revisionId = null;
  }

}   // Action{}


class Location {

  id: number;
  code: string;
  start: Date;
  end: Date;
  revisionId: number;

  constructor(classLoc?: ClassLoc) {

    this.id = null;
    this.revisionId = null;

    if (!!classLoc) {

      this.code = classLoc.campus.code;
      this.start = classLoc.startDate;
      this.end = classLoc.endDate;

    } else {

      this.code = null;
      this.start = null;
      this.end = null;

    } // if(!!classLoc)

  } //constructor()

}   // Location{}


export class RevBreak {

  start: Date;
  end: Date;

  constructor(startDate?: Date, endDate?: Date) {

    if (!!startDate && !!endDate) {

      this.start = startDate;
      this.end = endDate;

    } else {

      this.start = null;
      this.end = null;

    } // if (!!startDate)
  }   // constructor()

}   // Break{}


class Fee {

  id: number;
  code: string;
  amount: number;
  population: string;
  enrollment: string;

  constructor(specialFee?: SpecialFee) {

    this.id = null;

    if (!!specialFee) {

      this.code = specialFee.fee.code;
      this.amount = specialFee.amount;
      this.enrollment = specialFee.enrollType.code;
      this.population = specialFee.gradeLevel.code;

    } else {

      this.code = null;
      this.amount = null;
      this.population = null;
      this.enrollment = null;

    } // if (!!specialFee)

  }   // constructor()

}   // Fee{}


export class Revision {

  id: number;
  term: string;
  firstDayOfClass: Date;
  lastDayOfClass: Date;
  firstDayOfFinals: Date;
  lastDayOfFinals: Date;
  rateType: string;
  ratePerUnitAmount: number;
  otherFlatRateAmount: number;
  otherRatePerUnit: number;
  undergradFlatRateMin: number;
  undergradFlatRateMax: number;
  gradFlatRateMin: number;
  gradFlatRateMax: number;
  comments: string;
  createdBy: string;
  creatorEmail: string;
  createdDTM: Date;
  requestId: number;
  actions: Action[];
  breaks: RevBreak[];
  locations: Location[];
  specialFees: Fee[];

  constructor(session?: Session) {

    this.actions = [];
    this.breaks = [];
    this.locations = [];
    this.specialFees = [];

    if (!!session) {

      if (!!session.dates.sessionBreaks) {
        this.BuildSessionBreaks(session.dates.sessionBreaks);
      }

      if (!!session.classLocations) {
        this.BuildLocations(session.classLocations);
      }

      if (!!session.specialFees) {
        this.BuildSpecialFees(session.specialFees);
      }

    } else {

      this.id = null;
      this.term = null;
      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;
      this.rateType = null;
      this.ratePerUnitAmount = null;
      this.otherFlatRateAmount = null;
      this.otherRatePerUnit = null;
      this.undergradFlatRateMin = null;
      this.undergradFlatRateMax = null;
      this.gradFlatRateMin = null;
      this.gradFlatRateMax = null;
      this.comments = null;
      this.createdBy = null;
      this.creatorEmail = null;
      this.createdDTM = null;
      this.requestId = null;

    }
  }   // constructor()

  private BuildSessionBreaks(sessionBreaks: DateRange[]): void {

    var eachBreak: RevBreak = null;

    for (var i = 0; i < sessionBreaks.length; ++i) {      // Session Breaks

      eachBreak = new RevBreak(sessionBreaks[i].startDate, sessionBreaks[i].endDate);
      this.breaks.push(eachBreak);

    } // for(var i...)
  }   // FormSessionBreaks()


  private BuildLocations(classLocations: ClassLoc[]): void {

    var eachLoc: Location = null;

    for (var i = 0; i < classLocations.length; ++i) {

      eachLoc = new Location(classLocations[i]);
      this.locations.push(eachLoc);

    } // for (var i...)
  }   // BuildLocations()


  private BuildSpecialFees(specialFees: SpecialFee[]): void {

    var eachFee: Fee = null;

    for (var i = 0; i < specialFees.length; ++i) {

      eachFee = new Fee(specialFees[i]);
      this.specialFees.push(eachFee);

    } // for(var i = 0...

  } // BuildSpecialFees()

}   // Revision{}


export class Request {

  id: number;
  term: string;
  code: string;
  departmentCode: string;
  currentStatus: string;
  revisions: Revision[];

  constructor(session?: Session) {

    this.revisions = [];

    if (!!session) {

      this.id = 0;
      this.term = session.academicTerm.code;
      this.code = session.session.code;
      this.departmentCode = "XXX";
      this.currentStatus = null;

      var newRevision: Revision = new Revision(session);
      this.revisions.push(newRevision);

    } else {

      this.id = null;
      this.term = null;
      this.code = null;
      this.departmentCode = null;
      this.currentStatus = null;

    }

  } // constructor()
}   // Revisions{}
