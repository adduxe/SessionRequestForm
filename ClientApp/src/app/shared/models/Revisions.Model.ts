import { Session } from '../models/Request.Form.Model';

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

  constructor() {

    this.id = null;
    this.code = null;
    this.start = null;
    this.end = null;
    this.revisionId = null;

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

  constructor() {

    this.id = null;
    this.code = null;
    this.amount = null;
    this.population = null;
    this.enrollment = null;

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
  breaks: any[];
  locations: Location[];
  specialFees: Fee[];

  constructor(session?: Session) {

    this.actions = [];
    this.breaks = [];
    this.locations = [];
    this.specialFees = [];

  }   // constructor()
}   // Revision{}


export class Revisions {

  id: number;
  term: string;
  code: string;
  departmentCode: string;
  currentStatus: string;
  revisions: Revision[];

  constructor(session?: Session) {

    this.id = null;
    this.term = null;
    this.code = null;
    this.departmentCode = null;
    this.currentStatus = null;
    this.revisions = [];

    if (!!session) {
      alert('In revision constructor!');

    }

  } // constructor()
}   // Revisions{}
