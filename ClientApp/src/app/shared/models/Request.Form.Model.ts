import { PEDataService } from '../services/pedata.service';

import { Request, Revision, RevBreak, RevFee, RevLocation } from '../models/Revisions.Model';

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

  constructor(startDate?: string, endDate?: string) {

    if (!!startDate && !!endDate) {

      this.startDate = new Date(startDate);
      this.endDate = new Date(endDate);

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

  constructor(revLoc?: RevLocation) {

    if (!!revLoc) {

      this.campus = new CodeNamePair(revLoc.code, GetLocationName(revLoc.code));
      this.startDate = revLoc.start;
      this.endDate = revLoc.end;

    } else {

      this.campus = new CodeNamePair();
      this.startDate = null;
      this.endDate = null;

    } // if(!!revLoc)
  }   // constructor()
};  // classLoc{}


export class SpecialFee {

  fee: CodeNamePair;

  amount: number;

  gradeLevel: CodeNamePair;

  enrollType: CodeNamePair;

  constructor(revFee?: RevFee, term?: string) {

    if (!!revFee && !!term) {

      this.fee = new CodeNamePair(revFee.code, GetFeeName(revFee.code, term));
      this.amount = null;
      this.gradeLevel = new CodeNamePair(revFee.population, GetGradeLevel(revFee.population));
      this.enrollType = new CodeNamePair(revFee.enrollment, GetEnrollType(revFee.enrollment));

    } else {

      this.fee = new CodeNamePair();
      this.amount = null;
      this.gradeLevel = new CodeNamePair();
      this.enrollType = new CodeNamePair();

    } // if(!!revFee)

  }   // constructor()

};  // SpecialFee{}


class sessDates {

  firstDayOfClass: Date;
  lastDayOfClass: Date;
  firstDayOfFinals: Date;
  lastDayOfFinals: Date;
  sessionBreaks:    DateRange[];

  constructor(revision?: Revision){

    this.sessionBreaks = [];

    if (!!revision) {

      this.firstDayOfClass = new Date(revision.firstDayOfClass);
      this.lastDayOfClass = new Date(revision.lastDayOfClass);
      this.firstDayOfFinals = new Date(revision.firstDayOfFinals);
      this.lastDayOfFinals = new Date(revision.lastDayOfFinals);

      var eachBreak: DateRange = null;

      for (var i = 0; i < revision.breaks.length; ++i) {
        eachBreak = new DateRange(revision.breaks[i].start, revision.breaks[i].end);
        this.sessionBreaks.push(eachBreak);
      }

    } else {

      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;

    }   // if (!!revision)

  } // constructor()

};  // sessDates()


class UnitRange {

  minimum: number;
  maximum: number;

  constructor(min?: number, max?: number) {

    if (!!min && !!max) {

      this.minimum = min;
      this.maximum = max;

    } else {

      this.minimum = null;
      this.maximum = null;

    } //else
  } // constructor()

}   // UnitRange{}


class FlatRateUnitRange {

  graduate: UnitRange;
  undergraduate: UnitRange

  constructor(revision?: Revision) {

    if (!!revision) {

      if (!!revision.gradFlatRateMin && !!revision.gradFlatRateMax) {
        this.graduate = new UnitRange(revision.gradFlatRateMin, revision.gradFlatRateMax);
      }

      if (!!revision.undergradFlatRateMin && !!revision.undergradFlatRateMax) {
        this.undergraduate = new UnitRange(revision.undergradFlatRateMin, revision.undergradFlatRateMax);
      }

    } else {

      this.graduate = new UnitRange();
      this.undergraduate = new UnitRange();

    } // if(!!revision)
  } // constructor()
};  // FlatRateUnitRange{}


class RateType {

  code:         string;
  description:  string;
  unitRate:     number;
  flatRate:     number;
  flatRateUnitRange: FlatRateUnitRange;

  constructor(revision?: Revision, term?: string) {

    if (!!revision && !!term) {

      this.code = revision.rateType;
      this.description = GetRateName(revision.rateType, term);
      this.unitRate = revision.otherRatePerUnit;
      this.flatRate = revision.otherFlatRateAmount;
      this.flatRateUnitRange = new FlatRateUnitRange(revision);

    } else {

      this.code = null;
      this.description = null;
      this.unitRate = null;
      this.flatRate = null;
      this.flatRateUnitRange = new FlatRateUnitRange();
    } // else

  } // constructor()

}   // rateType{}


export class Session {

  academicTerm: CodeNamePair;

  session: CodeNamePair;

  dates: sessDates;

  classLocations: ClassLoc[];

  rateType: RateType;

  specialFees: SpecialFee[]

  comments: string;

  constructor(request?: Request) {

    this.classLocations = [];
    this.specialFees = [];
    this.comments = null;

    if (!!request) {

      this.academicTerm = new CodeNamePair(request.term, GetTermName(request.term));
      this.session = new CodeNamePair(request.code);

      if (request.revisions.length > 0) {

        this.dates = new sessDates(latestRev);                            // Form the Session Dates section

        //this.rateType.code = latestRev.rateType;                          // Set the rate-related fields
        //this.rateType.description = GetRateName(latestRev.rateType, request.term);
        this.rateType = new RateType(latestRev, request.term);

        var newestRev: number = request.revisions.length - 1;             // assumes that the last record is the latest revision
        var latestRev: Revision = request.revisions[newestRev];

        var eachFee: SpecialFee;
        for (var i = 0; i < latestRev.specialFees.length; ++i) {
          eachFee = new SpecialFee(latestRev.specialFees[i], request.term);
          this.specialFees.push();
        }

        var eachLocation: ClassLoc;
        for (var i = 0; i < latestRev.locations.length; ++i){
          eachLocation = new ClassLoc(latestRev.locations[i]);
          this.classLocations.push(eachLocation);
        }

      } // if (request...

    } else {

      this.academicTerm = new CodeNamePair();
      this.session = new CodeNamePair();
      this.rateType = new RateType();
      this.dates = new sessDates();

    }   // if(!!request)

  }   // constructor()

}; // session


function GetFeeName(feeCode: string, term: string): string {

  var peDataService: PEDataService;
  var TermFees = peDataService.getSpecialFeeList(term); // Get the list of fees for the term

  var eachFee: string = '';
  var strIndex: number = -1;
  var feeName: string = '';

  for (var i = 0; i < TermFees.length; ++i) {   // Look for the specific fee and get it's description

    eachFee = TermFees[i];
    strIndex = eachFee.indexOf(feeCode);

    if (strIndex == 0) {    // found the fee!
      feeName = eachFee;
      break;
    }
  }

  return feeName;

}   // GetFeeName()


function GetTermName(term: string): string {

  var termName: string = '';
  var acadYear: string = term.substr(0, 4);
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
};   // GetTermName()


function GetRateName(rateCode: string, term: string): string {

  var peDataService: PEDataService;
  var TermRates = peDataService.getTermTuitionRates(term);
  var targetRate = TermRates.filter((tRates) => tRates.code === rateCode);
  var rateName: string = targetRate[0].description;

  return rateName;
} // GetRateName()


function GetLocationName(campusCode: string): string {

  var peDataService: PEDataService;
  var UscCampuses = peDataService.getCampusLocations();
  var targetCampus = UscCampuses.filter((campuses) => campuses.code === campusCode);
  var campusName: string = targetCampus[0].name;

  return campusName;

} // GetLocationName()

function GetGradeLevel(gradeCode: string): string {

  var gradeLevel: string = '';

  switch (gradeCode.toUpperCase()) {

    case 'B':
      gradeLevel = "All";
      break;

    case 'G':
      gradeLevel = "Graduate";
      break;

    case 'U':
      gradeLevel = "Undergraduate";
      break;

    default:
      break;

  } // switch()

  return gradeLevel;

} // GetGradeLevel()


function GetEnrollType(enrollCode: string): string {

  var enrollmentType: string = '';

  switch (enrollCode.toUpperCase()) {

    case 'FULL':
      enrollmentType = "Full-load";
      break;

    case 'HALF':
      enrollmentType = "Half-load";
      break;

    case 'NONE':
      enrollmentType = "Not enrolled";
      break;
    default:
      break;

  } // switch()

  return enrollmentType;
}   // GetEnrollType()
