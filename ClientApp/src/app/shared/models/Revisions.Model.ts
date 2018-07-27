import { Session, DateRange, ClassLoc, SpecialFee } from '../models/Request.Form.Model';

import { PEDataService } from '../services/pedata.service';

class Action {

  id: number;
  group: string;
  name: string;
  comments: string;
  createdDTM: string;
  revisionId: number

  constructor() {

    this.id = null;
    this.group = null;
    this.name = null;
    this.comments = null;
    this.createdDTM = null;
    this.revisionId = null;

  }   // constructor()
}   // Action{}


export class RevLocation {

  id: number;
  code: string;
  start: string;      // date string
  end: string;        // date string
  revisionId: number;

  constructor(classLoc?: ClassLoc) {

    this.id = null;
    this.revisionId = null;

    if (!!classLoc) {

      this.code = classLoc.campus.code;
      this.start = classLoc.startDate.toDateString();
      this.end = classLoc.endDate.toDateString();

    } else {

      this.code = null;
      this.start = null;
      this.end = null;

    } // if(!!classLoc)

  } //constructor()

}   // RevLocation{}


export class RevBreak {

  start: string;
  end: string;

  constructor(startDate?: Date, endDate?: Date) {

    if (!!startDate && !!endDate) {

      this.start = startDate.toDateString();
      this.end = endDate.toDateString();

    } else {

      this.start = null;
      this.end = null;

    } // if (!!startDate)
  }   // constructor()

}   // Break{}


export class RevFee {

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
  firstDayOfClass: string;
  lastDayOfClass: string;
  firstDayOfFinals: string;
  lastDayOfFinals: string;
  rateType: string;
  otherFlatRateAmount: number;
  otherRatePerUnit: number;
  undergradFlatRateMin: number;
  undergradFlatRateMax: number;
  gradFlatRateMin: number;
  gradFlatRateMax: number;
  comments: string;
  createdBy: string;
  creatorEmail: string;
  createdDTM: string;
  requestId: number;
  actions: Action[];
  breaks: RevBreak[];
  locations: RevLocation[];
  specialFees: RevFee[];

  constructor(session?: Session) {

    this.actions = [];
    this.breaks = [];
    this.locations = [];
    this.specialFees = [];

    if (!!session) {

      this.firstDayOfClass = session.dates.firstDayOfClass.toDateString();
      this.lastDayOfClass = session.dates.lastDayOfClass.toDateString();
      this.firstDayOfFinals = session.dates.firstDayOfFinals.toDateString();
      this.lastDayOfFinals = session.dates.lastDayOfFinals.toDateString();

      if (!!session.dates.sessionBreaks) {

        var eachBreak: RevBreak = null;
        for (var i = 0; i < session.dates.sessionBreaks.length; ++i) {      // Session Breaks
          eachBreak = new RevBreak(session.dates.sessionBreaks[i].startDate, session.dates.sessionBreaks[i].endDate);
          this.breaks.push(eachBreak);
        }
      }

      if (!!session.classLocations) {

        var eachLoc: RevLocation = null;
        for (var i = 0; i < session.classLocations.length; ++i) {
          eachLoc = new RevLocation(session.classLocations[i]);
          this.locations.push(eachLoc);
        } // for (var i...)
      }

      if (!!session.specialFees) {

        var eachFee: RevFee = null;
        for (var i = 0; i < session.specialFees.length; ++i) {
          eachFee = new RevFee(session.specialFees[i]);
          this.specialFees.push(eachFee);
        } // for(var i = 0...
      }

    } else {

      this.id = null;
      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;
      this.rateType = null;
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
