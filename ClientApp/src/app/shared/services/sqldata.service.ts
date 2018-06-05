import { Injectable } from '@angular/core'

@Injectable()

export class SQLDataService {

  public getSessionByRevisionID(revID: number) {      // Just one revision's data by Revision ID
    return SESSIONREQUEST;
  }

  public getAllRevsStatusByRequestID(reqID: string) { // All revisions' status associated to a request by Request ID (i.e. Term + Sess Code)
    return ALLREVSBYREQUESTID.revisions;
  }

  public getAllRevsDataByRequestID(reqID: string) {// All revisions' data associated to a request by Request ID (i.e. Term + Sess Code)
    return ALLVERSIONSPERREQUEST;
  }

}

const SESSIONREQUEST = {

  requestId: 10421,
  academicTerm: "20183",
  sessionCode: "888",
  lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
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
  sessionBreakStart_1: "2018-04-1T15:20:52.657",
  sessionBreakEnd_1: "2018-04-5T15:20:52.657",
  sessionBreakStart_2: "2018-04-20T15:20:52.657",
  sessionBreakEnd_2: "2018-04-25T15:20:52.657",
  specialFees: [
    {
      feeId: 28,
      requestId: 10421,
      feeCode: "M22520001",
      assessedTo: "U",
      amount: 777
    },
    {
      feeId: 29,
      requestId: 10421,
      feeCode: "M225",
      assessedTo: "G",
      amount: 888
    },
    {
      feeId: 30,
      requestId: 10421,
      feeCode: "M19920063",
      assessedTo: "B",
      amount: 666
    }
  ],
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
  comments: "Catalina\nM22520001\nM225\nM19920063"
};

// All revisions associated to a request
const ALLREVSBYREQUESTID =
  {
    sessionRequestID: 2135,
    term: "20173",
    sessionCode: "321",
    status: "Waiting for Fee",
    owner: "lipan",
    lateChange: false,
    ownerChanged: true,
    revisions: [
      {
        versionNumber: 0,
        actionBy: "emily",
        action: "create",
        actionDate: new Date(2016, 10, 10)
      },
      {
        versionNumber: 1,
        actionBy: "anthony",
        action: "modify",
        actionDate: new Date(2016, 10, 14)
      },
      {
        versionNumber: 2,
        actionBy: "greg",
        action: "denied",
        actionDate: new Date(2016, 10, 18)
      }]
  };

const ALLVERSIONSPERREQUEST = [
  {
    requestId: "20183888",
    version: 0,
    academicTerm: 20183,
    sessionCode: "888",
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "Emily",
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
    sessionBreakStart_1: "2018-04-1T15:20:52.657",
    sessionBreakEnd_1: "2018-04-5T15:20:52.657",
    sessionBreakStart_2: "2018-04-20T15:20:52.657",
    sessionBreakEnd_2: "2018-04-25T15:20:52.657",
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "M22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "M225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "M19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
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
    comments: "Catalina\nM22520001\nM225\nM19920063"
  },
  {
    requestId: "20183888",
    version: 1,
    academicTerm: 20183,
    sessionCode: "888",
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "Anthony",
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
    sessionBreakStart_1: "2018-04-1T15:20:52.657",
    sessionBreakEnd_1: "2018-04-5T15:20:52.657",
    sessionBreakStart_2: "2018-04-20T15:20:52.657",
    sessionBreakEnd_2: "2018-04-25T15:20:52.657",
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "M22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "M225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "M19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
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
    comments: "Catalina\nM22520001\nM225\nM19920063"
  },
  {
    requestId: "20183888",
    version: 2,
    academicTerm: 20183,
    sessionCode: "888",
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "Greg",
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
    sessionBreakStart_1: "2018-04-1T15:20:52.657",
    sessionBreakEnd_1: "2018-04-5T15:20:52.657",
    sessionBreakStart_2: "2018-04-20T15:20:52.657",
    sessionBreakEnd_2: "2018-04-25T15:20:52.657",
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "M22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "M225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "M19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
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
    comments: "Catalina\nM22520001\nM225\nM19920063"
  },
  {
    requestId: "20183888",
    version: 3,
    academicTerm: 20183,
    sessionCode: "888",
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "Sebastian",
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
    sessionBreakStart_1: "2018-04-1T15:20:52.657",
    sessionBreakEnd_1: "2018-04-5T15:20:52.657",
    sessionBreakStart_2: "2018-04-20T15:20:52.657",
    sessionBreakEnd_2: "2018-04-25T15:20:52.657",
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "M22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "M225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "M19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
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
    comments: "Catalina\nM22520001\nM225\nM19920063"
  }
];
