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


class Break {

  start: Date;
  end: Date;

  constructor() {

    this.start = null;
    this.end = null;

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
  breaks: DateRange[];
  locations: Location[];
  specialFees: Fee[];


  private FormSessionBreaks(sessionBreaks: DateRange[]): void {

    var eachBreak: DateRange = null;

    for (var i = 0; i < sessionBreaks.length; ++i) {      // Session Breaks

      eachBreak = new DateRange(sessionBreaks[i].startDate, sessionBreaks[i].endDate);
      this.breaks.push(eachBreak);

    } // for(var i...)
  }   // FormSessionBreaks()


  private FormLocations(classLocations: ClassLoc[]): void {

    var eachLoc: Location = null;

    for (var i = 0; i < classLocations.length; ++i) {

      eachLoc = new Location(classLocations[i]);
      this.locations.push(eachLoc);

    } // for (var i...)
  }   // FormLocations()


  private FormSpecialFees(specialFees: SpecialFee[]): void {

    var eachFee: Fee = null;

    for (var i = 0; i < specialFees.length; ++i) {

      eachFee = new Fee(specialFees[i]);
      this.specialFees.push(eachFee);

    } // for(var i = 0...

  } // FormSpecialFees()


  constructor(session?: Session) {

    alert("In Revision.constructor!");

    this.actions = [];
    this.breaks = [];
    this.locations = [];
    this.specialFees = [];

    if (!!session) {

      this.FormSessionBreaks(session.dates.sessionBreaks);
      this.FormLocations(session.classLocations);
      this.FormSpecialFees(session.specialFees);

    } else {

      this.id = null;
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
}   // Revision{}


export class Request {

  id: number;
  term: string;
  code: string;
  departmentCode: string;
  currentStatus: string;
  revisions: Revision[];

  constructor(session?: Session) {

    alert('In Request constructor!');

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
