import { Component } from '@angular/core';

let shallowArray = function (a, b, compare) {
  var l = a.length
  if (l !== b.length) return false

  if (compare) {
    for (var i = 0; i < l; i++)
      if (!compare(a[i], b[i])) return false
  } else {
    for (var i = 0; i < l; i++) {
      if (a[i] !== b[i]) return false
    }
  }

  return true
}

let shallowObject = function (a, b, compare) {

  var ka = 0
  var kb = 0

  if (compare) {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        !compare(a[key], b[key])
      ) return false

      ka++
    }
  } else {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        a[key] !== b[key]
      ) return false

      ka++
    }
  }

  for (var key in b) {
    if (b.hasOwnProperty(key)) kb++
  }

  return ka === kb
}

let flat = function (type) {
  return (
    type !== 'function' &&
    type !== 'object'
  )
}

let shallow = function (a, b, compare) {
  var aIsNull = a === null
  var bIsNull = b === null

  if (aIsNull !== bIsNull) return false

  var aIsArray = Array.isArray(a)
  var bIsArray = Array.isArray(b)

  if (aIsArray !== bIsArray) return false

  var aTypeof = typeof a
  var bTypeof = typeof b

  if (aTypeof !== bTypeof) return false
  if (flat(aTypeof)) return compare
    ? compare(a, b)
    : a === b

  return aIsArray
    ? shallowArray(a, b, compare)
    : shallowObject(a, b, compare)
}

enum SESS {
  ACADTERM      = 0,
  SESSCODE      = 1,
  OWNSCHOOL     = 2,
  OWNDEPT       = 3,
  USERCONTACT   = 4,
  USEREMAIL     = 5,
  USERPHONE     = 6,
  CLASSFIRSTDAY = 7,
  CLASSLASTDAY  = 8,
  DROPLASTDAY   = 9,
  WITHDRAWLASTDAY = 10,
  FINALSFIRSTDAY  = 11,
  FINALSLASTDAY = 12,
  GRADESFIRSTDAY  = 13,
  GRADESLASTDAY = 14,
  RATETYPE      = 15,
  PERUNITAMOUNT = 16,
  FLATRATEAMOUNT = 17,
  UGRADUNITSMIN = 18,
  UGRADUNITSMAX = 19,
  GRADUNITSMIN  = 20,
  GRADUNITSMAX  = 21,
  CLASSLOCATION = 22,
  SPECIALFEES   = 23,
  SESSIONBREAKS = 24,
  COMMENTS      = 25
}

enum DIFF {
  NEW     = 1,
  CHANGED = 2,
  DELETED = 3,
}


@Component({
  selector: 'diff-page',
  templateUrl: './diff.page.component.html',
})


export class DiffPageComponent {

  diffArr: boolean[][] = [    // Need to initialize the array or else the HTML will error out.
    [false, false, false],   // Acad term
    [false, false, false],   // Session Code
    [false, false, false],   // Owning School
    [false, false, false],   // Owning Department
    [false, false, false],   // User Contact
    [false, false, false],   // User Email
    [false, false, false],   // User Phone
    [false, false, false],   // First Day of Classes
    [false, false, false],   // Last Day of Classes
    [false, false, false],   // Last Day to Add/Drop Classes
    [false, false, false],   // Last Day to Withdraw Classes
    [false, false, false],   // First Day of Finals
    [false, false, false],   // Last Day of Finals
    [false, false, false],   // First Day for Grading
    [false, false, false],   // Last Day for Grading
    [false, false, false],   // Rate Type
    [false, false, false],   // Rate per Unit Amount
    [false, false, false],   // Flate rate Amount
    [false, false, false],   // Undergrad Units Min
    [false, false, false],   // Undergrad Units Max
    [false, false, false],   // Grad Units Min
    [false, false, false],   // Grad Units Max
    [false, false, false],   // Class Location
    [false, false, false],   // Session Breaks
    [false, false, false],   // Special Fees
    [false, false, false]    // Comments
  ];

  DIFF = DIFF;    // to export the DIFF enum to the HTML
  SESS = SESS;    // to export the SESS enum to the HTML

  markChanges() {   // will mark the fields that changed in current and previous revisions
    console.log('clicked');
    if (this.currSess.rateType != this.prevSess.rateType) {
      this.diffArr[SESS.RATETYPE][DIFF.CHANGED] = true;
    }

    if (this.currSess.classLocations != this.prevSess.classLocations) {
      this.diffArr[SESS.CLASSLOCATION][DIFF.CHANGED] = true;
    }

    if ((this.prevSess.specialFees.length > 0) && (this.currSess.specialFees.length == 0)) {
      this.diffArr[SESS.SPECIALFEES][DIFF.DELETED] = true;
    }

    if ((this.currSess.sessionBreaks.length > 0) && (this.prevSess.sessionBreaks.length == 0)) {
      this.diffArr[SESS.SESSIONBREAKS][DIFF.NEW] = true;
    }


  }
  
  public currSess = {
    sessionBreaks: [
      {
        id: 1022,
        lastUpdateTimeStamp: "2017-05-16T10:31:02.033",
        startDate: "2017-05-15T00:00:00",
        endDate: "2017-05-16T00:00:00",
        requestId: 1092
      },
      {
        id: 1023,
        lastUpdateTimeStamp: "2017-05-16T10:31:02.033",
        startDate: "2017-05-08T00:00:00",
        endDate: "2017-05-09T00:00:00",
        requestId: 1092
      }
    ],
    specialFees: [],
    requestId: 10421,
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    academicTerm: "20183",
    sessionCode: "888",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "BUR Admin Tester",
    userEmail: "anthondd@usc.edu",
    userPhone: "+1 213 111 1111",
    firstDayOfClass: "2018-03-25T00:00:00",
    lastDayOfClass: "2018-05-05T00:00:00",
    lastDayForAddDrop: "2018-04-02T00:00:00",
    lastDayForWithdrawal: "2018-04-27T00:00:00",
    firstDayOfFinals: "2018-05-20T00:00:00",
    lastDayOfFinals: "2018-05-26T00:00:00",
    firstDayForFinalGrading: "2018-05-20T00:00:00",
    lastDayForFinalGrading: "2018-06-01T00:00:00",
    lastDayForEnrollmentOptionChange: "2018-04-10T00:00:00",
    classLocations: [
      {
        location: "Catalina Island",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      },
      {
        location: "Health Science Campus",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      },
      {
        location: "Marina del Rey",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      }
    ],
    rateType: "BKNPT1",
    ratePerUnitAmount: 1863,
    flatRateAmount: 33695,
    flatRateUnitsMin: 1,
    flatRateUnitsMax: 2,
    gradFlatRateUnitsMin: 1,
    gradFlatRateUnitsMax: 2,
    requestDate: "2018-04-18T15:20:52.643",
    comments: "Changed the rate type, Class Locations, and Special Fee Fields."
  };

  public prevSess = {
    sessionBreaks: [],
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "T22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "D225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "C19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
    requestId: 10421,
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    academicTerm: "20183",
    sessionCode: "888",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "BUR Admin Tester",
    userEmail: "anthondd@usc.edu",
    userPhone: "+1 213 111 1111",
    firstDayOfClass: "2018-03-25T00:00:00",
    lastDayOfClass: "2018-05-05T00:00:00",
    lastDayForAddDrop: "2018-04-02T00:00:00",
    lastDayForWithdrawal: "2018-04-27T00:00:00",
    firstDayOfFinals: "2018-05-20T00:00:00",
    lastDayOfFinals: "2018-05-26T00:00:00",
    firstDayForFinalGrading: "2018-05-20T00:00:00",
    lastDayForFinalGrading: "2018-06-01T00:00:00",
    lastDayForEnrollmentOptionChange: "2018-04-10T00:00:00",
    classLocations: [
      {
        location: "Catalina Island",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      },
      {
        location: "Health Science Campus",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      }
    ],
    rateType: "BKNPT2",
    ratePerUnitAmount: 1863,
    flatRateAmount: 33695,
    flatRateUnitsMin: 1,
    flatRateUnitsMax: 2,
    gradFlatRateUnitsMin: 1,
    gradFlatRateUnitsMax: 2,
    requestDate: "2018-04-18T15:20:52.643",
    comments: "Catalina\nM22520001\nM225\nM19920063"
  };

  showPrevious: boolean = true;

  rateType: boolean = (this.currSess.rateType != this.prevSess.rateType);

}
