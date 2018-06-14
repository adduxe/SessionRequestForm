import { Injectable } from '@angular/core';
import { SessionRequest } from '../models/sessionRequest';

@Injectable()

export class SQLDataService {

  public getNeedsMyActionRequests(ownerName: string) {
    return ALLREQUESTSSTATUS.filter(queueList => queueList.owner === ownerName);
  }

  public getMyDepartmentsRequests(deptName: string) {
    return ALLREQUESTSSTATUS.filter(queueList => queueList.department === deptName);
  }

  public getAllPendingRequests() {
    return ALLREQUESTSSTATUS;
  }
  
  public getCurrentRevisionByRequestID(reqID: string) {    // gets the latest revision's data (assumes the first record is the latest)
    return ALLVERSIONSPERREQUEST[0];
  }

  public getRequestByRevisionID(reqID: string, revNum: number) {          // Just one revision's data by Revision ID
    return ALLVERSIONSPERREQUEST.find(val => val.version === revNum);
  }

  public getAllRevsStatusByRequestID(reqID: string) {     // All revisions' status associated to a request by Request ID (i.e. Term + Sess Code)
    return ALLREVSBYREQUESTID.revisions;
  }

  public getAllRevsDataByRequestID(reqID: string) {       // All revisions' data associated to a request by Request ID (i.e. Term + Sess Code)
    return ALLVERSIONSPERREQUEST;
  }

  public getPreviousRevisionByRequestID(reqID: string) {               // Get the most recent revision with a status
    return PREVIOUSREQUEST;
  }

}

const SESSIONREQUEST = {

  requestId: "20183888",
  academicTerm: 20183,
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
  comments: "Changed the rate type, Class Locations, and Special Fee Fields."
};

const ALLREVSBYREQUESTID =      // All revisions associated to a request
  {
    requestID: "20183888",
    term: 20183,
    sessionCode: "888",
    status: "Waiting for Fee",
    owner: "lipan",
    lateChange: false,
    ownerChanged: true,
    revisions: [
      {
        versionNumber: 4,
        actions: [{
            actionBy: "emily",
            action: "create",
            actionDate: new Date(2016, 10, 10),
          comment: "Every good boy does fine."
          },{
            actionBy: "anthony",
            action: "modify",
            actionDate: new Date(2016, 10, 14),
            comment: "The lazy dog jumped over the crazy hen."
          },{
            actionBy: "greg",
            action: "denied",
            actionDate: new Date(2016, 10, 18),
            comments: "Why does the chicken cross the street?"
          },
          {
            actionBy: "sebastian",
            action: "modified",
            actionDate: new Date(2016, 10, 22),
            comment: "Because it's too close to use Uber."
          }]
      },
      {
        versionNumber: 3,
        actions: [{
            actionBy: "emily",
            action: "create",
          actionDate: new Date(2016, 10, 10),
          comment: "The lazy dog jumped over the crazy hen."
          }, {
            actionBy: "anthony",
            action: "modify",
            actionDate: new Date(2016, 10, 14),
            comment: "The lazy dog jumped over the crazy hen."
          }, {
            actionBy: "greg",
            action: "denied",
            actionDate: new Date(2016, 10, 18),
            comment: "The lazy dog jumped over the crazy hen."
          },
          {
            actionBy: "sebastian",
            action: "modified",
            actionDate: new Date(2016, 10, 22),
            comment: "The lazy dog jumped over the crazy hen."
          }]
      },
      {
        versionNumber: 2,
        actions: [{
          actionBy: "emily",
          action: "create",
          actionDate: new Date(2016, 10, 10),
          comment: "The lazy dog jumped over the crazy hen."
        }, {
          actionBy: "anthony",
          action: "modify",
            actionDate: new Date(2016, 10, 14),
            comment: "The lazy dog jumped over the crazy hen."
        }, {
          actionBy: "greg",
          action: "denied",
            actionDate: new Date(2016, 10, 18),
            comments: "The lazy dog jumped over the crazy hen."
        },
        {
          actionBy: "sebastian",
          action: "modified",
          actionDate: new Date(2016, 10, 22),
          comment: "The lazy dog jumped over the crazy hen."
        }]
      },
      {
        versionNumber: 1,
        actions: [{
          actionBy: "emily",
          action: "create",
          actionDate: new Date(2016, 10, 10),
          comment: "The lazy dog jumped over the crazy hen."
        }, {
          actionBy: "anthony",
          action: "modify",
          actionDate: new Date(2016, 10, 14),
          comment: "The lazy dog jumped over the crazy hen."
        }, {
          actionBy: "greg",
          action: "denied",
            actionDate: new Date(2016, 10, 18),
            comment: "The lazy dog jumped over the crazy hen."
        },
        {
          actionBy: "sebastian",
          action: "modified",
          actionDate: new Date(2016, 10, 22),
          comment: "The lazy dog jumped over the crazy hen."
        }]
      }]
  };

const ALLVERSIONSPERREQUEST = [
  {
    requestId: "20183888",
    version: 4,
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
    sessionBreaks: [],
    rateType: "BKNPT1",
    ratePerUnitAmount: 1863,
    flatRateAmount: 33695,
    flatRateUnitsMin: 1,
    flatRateUnitsMax: 2,
    gradFlatRateUnitsMin: 1,
    gradFlatRateUnitsMax: 2,
    requestDate: "2018-04-18T15:20:52.643",
    comments: "Revision 3"
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
    sessionBreaks: [],
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
    comments: "Revision 2"
  },
  {
    requestId: "20183888",
    version: 1,
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
    sessionBreaks: [],
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
    comments: "Version 1"
  }
];

const PREVIOUSREQUEST = {

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
    academicTerm: 20183,
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
    ratePerUnitAmount: "",
    flatRateAmount: 33695,
    flatRateUnitsMin: 1,
    flatRateUnitsMax: 2,
    gradFlatRateUnitsMin: 1,
    gradFlatRateUnitsMax: 2,
    requestDate: "2018-04-18T15:20:52.643",
    comments: "Catalina\nM22520001\nM225\nM19920063"
  };

const ALLREQUESTSSTATUS = [
  {
    sessionRequestID: 2134,
    sessionCode: "136",
    term: 20172,
    status: "Waiting for Approval",
    owner: "Emily",
    lateChange: false,
    ownerChanged: true,
    department: "MED"
  },
  {
    sessionRequestID: 2135,
    sessionCode: "321",
    term: 20173,
    status: "Waiting for Fee",
    owner: "Anthony",
    lateChange: false,
    ownerChanged: true,
    department: "MED"
  },
  {
    sessionRequestID: 2136,
    sessionCode: "123",
    term: 20174,
    status: "Approved",
    owner: "Sebastian",
    lateChange: true,
    ownerChanged: true,
    department: "MED"
  },
  {
    sessionRequestID: 2137,
    sessionCode: "545",
    term: 20174,
    status: "Approved",
    owner: "Gregory",
    lateChange: true,
    ownerChanged: true,
    department: "MED"
  },
  {
    sessionRequestID: 2134,
    sessionCode: "111",
    term: 20172,
    owner: "Sebastian",
    status: "Waiting for Approval",
    lateChange: false,
    ownerChanged: true,
    department: "DENT"
  },
  {
    sessionRequestID: 2135,
    sessionCode: "222",
    term: 20173,
    status: "Waiting for Fee",
    owner: "Anthony",
    lateChange: false,
    ownerChanged: true,
    department: "DENT"
  },
  {
    sessionRequestID: 2136,
    sessionCode: "333",
    term: 20174,
    status: "Approved",
    owner: "Gregory",
    lateChange: true,
    ownerChanged: true,
    department: "DENT"
  },
  {
    sessionRequestID: 2137,
    sessionCode: "444",
    term: 20174,
    status: "Approved",
    owner: "Emily",
    lateChange: true,
    ownerChanged: true,
    department: "DENT"
  },
  {
    sessionRequestID: 2134,
    sessionCode: "777",
    term: 20172,
    owner: "Sebastian",
    status: "Waiting for Approval",
    lateChange: false,
    ownerChanged: true,
    department: "LAW"
  },
  {
    sessionRequestID: 2135,
    sessionCode: "561",
    term: 20173,
    status: "Waiting for Fee",
    owner: "Anthony",
    lateChange: false,
    ownerChanged: true,
    department: "LAW"
  },
  {
    sessionRequestID: 2136,
    sessionCode: "897",
    term: 20174,
    status: "Approved",
    owner: "Gregory",
    lateChange: true,
    ownerChanged: true,
    department: "LAW"
  },
  {
    sessionRequestID: 2137,
    sessionCode: "765",
    term: 20174,
    status: "Approved",
    owner: "Emily",
    lateChange: true,
    ownerChanged: true,
    department: "LAW"
  }
];
