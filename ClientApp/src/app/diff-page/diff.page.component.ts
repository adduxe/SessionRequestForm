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
  NOTHING = 0,
  ACADTERM = 1,
  SESSCODE = 2,
  OWNSCHOOL = 3,
  OWNDEPT = 4,
  USERCONTACT = 5,
  USEREMAIL = 6,
  USERPHONE = 7,
  CLASSFIRSTDAY = 8,
  CLASSLASTDAY = 9,
  DROPLASTDAY = 10,
  WITHDRAWLASTDAY = 11,
  FINALSFIRSTDAY = 12,
  FINALSLASTDAY = 13,
  GRADESFIRSTDAY = 14,
  GRADESLASTDAY = 15,
  RATETYPE = 16,
  PERUNITAMOUNT = 17,
  FLATRATEAMOUNT = 18,
  UGRADUNITSMIN = 19,
  UGRADUNITSMAX = 20,
  GRADUNITSMIN = 21,
  GRADUNITSMAX = 22,
  CLASSLOCATION = 23,
  SPECIALFEES = 24,
  SESSIONBREAKS = 25,
  COMMENTS = 26
}

enum DIFF {
  SAME = 0,
  NEW = 1,
  CHANGED = 2,
  DELETED = 3,
}


@Component({
  selector: 'diff-page',
  templateUrl: './diff.page.component.html',
})


export class DiffPageComponent {

  diffArr: boolean[][] = [[false, false, false, false], [false, false, false, false]];

  DIFF = DIFF;    // to export the DIFF enum to the HTML
  SESS = SESS;    // to export the SESS enum to the HTML

  sample() {
    console.log('clicked');
    this.diffArr[SESS.ACADTERM][DIFF.NEW] = true;
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
