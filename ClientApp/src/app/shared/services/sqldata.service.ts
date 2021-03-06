import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Session } from '../models/Request.Form.Model';
import { Request } from '../models/Revisions.Model';
@Injectable()

export class SQLDataService {

  constructor(private http: HttpClient) {
  }

//  public getNeedsMyActionRequests(ownerName: string): Observable<any[]> {
//    return this.http.get<any[]>('/DataApi/requests/:' + ownerName)
//      .pipe(catchError(this.handleError<any[]>('getNeedsMyActionRequests', [])));
//  }

//  public getMyDepartmentsRequests(deptName: string): Observable<any[]> {
//    return this.http.get<any[]>('/DatApi/request/:' + deptName)
//      .pipe(catchError(this.handleError<any[]>('getMyDepartmentsRequests', [])))
//  }

//  public getAllPendingRequests(): Observable<any[]> {
//  return this.http.get<any[]>('/DataApi/requests/all')
//    .pipe(catchError(this.handleError<any[]>('getAllPendingRequests', [])));
//  }


  public getNeedsMyActionRequests(ownerName: string): any[] {
    return ALLREQUESTSSTATUS.filter(queueList => queueList.owner === ownerName);
  }


  public getMyDepartmentsRequests(deptName: string): any[] {
    return ALLREQUESTSSTATUS.filter(queueList => queueList.department === deptName);
  }


  public getAllPendingRequests(): any[] {
    return ALLREQUESTSSTATUS;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    }
  }


  public getCurrentRevisionByRequestID(acadTerm: number, sessCode: string) {    // gets the latest revision's data (assumes the first record is the latest)
    return ALLVERSIONSPERREQUEST[0];
  }


  public getAllRevsStatusByRequestID(acadTerm: number, sessCode: string) {     // All revisions' status associated to a request by Request ID (i.e. Term + Sess Code)
    return ALLREVSBYREQUESTID.revisions;
  }


  public getAllRevsDataByRequestID(acadTerm: number, sessCode: string) {      // All revisions' data associated to a request
    return ALLVERSIONSPERREQUEST;
  }


  public getPreviousRevisionByRequestID(acadTerm: number, sessCode: string) { // Get the most recent revision with a status
    return PREVIOUSREQUEST;
  }


  public getCurrentRevByReqID(acadTerm: string, sessionCode: string): Request  {      // uses actual json structure to be used in project.  Will eventually replace getCurrentRevisionByRequestID
//  public getCurrentRevByReqID(acadTerm: string, sessionCode: string): Session {      // uses actual json structure to be used in project.  Will eventually replace getCurrentRevisionByRequestID

    return SAMPLE_REQUEST[0];
//    return ALLREVISIONSBYREQID;
  }

}

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
    firstDayOfClass: "2018-08-21T00:00:00",
    lastDayOfClass: "2018-12-01T00:00:00",
    lastDayForAddDrop: "2018-04-02T00:00:00",
    lastDayForWithdrawal: "2018-04-27T00:00:00",
    firstDayOfFinals: "2018-05-20T00:00:00",
    lastDayOfFinals: "2018-05-26T00:00:00",
    firstDayForFinalGrading: "2018-05-20T00:00:00",
    lastDayForFinalGrading: "2018-06-20T00:00:00",
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

const ALLREVISIONSBYREQID = {        // new: actual json structure to be followed.  Will eventually replace ALLREVSBYREQUESTID.

  academicTerm: {
    code: "20182",
    name: "2018 Summer"
  },

  session: {
    code: "004",
    name: "PHAR",
  },

  dates: {

    firstDayOfClass: new Date("07/01/2018"),

    lastDayOfClass: new Date("08/30/2018"),

    firstDayOfFinals: new Date("08/28/2018"),

    lastDayOfFinals: new Date("08/30/2018"),

    sessionBreaks: [
      {
        startDate: new Date("07/22/2018"),
        endDate: new Date("07/28/2018")
      },
      {
        startDate: new Date("08/12/2018"),
        endDate: new Date("08/18/2018")
      }
    ]
  },

  classLocations: [
    {
      campus: { code: "CAT", name: "Catalina" },
      startDate: new Date("07/01/2018"),
      endDate: new Date("07/31/2018")
    },
    {
      campus: { code: "ATT", name: "ATT Center" },
      startDate: new Date("08/01/2018"),
      endDate: new Date("08/30/2018")
    }
  ],
  
  rateType: {

    code: "OTHFLAT",
    description: "Other Flat Rate",
    unitRate: 1800,
    flatRate: 30409,

    flatRateUnitRange: {

      graduate: {
        minimum: 3,
        maximum: 4
      },

      undergraduate: {
        minimum: 1,
        maximum: 2
      }
    }
  },

  specialFees: [
    {
      fee: { code: "T30320182", name: "CNTV Resource Access Fee" },
      amount: 300,
      gradeLevel: { code: "U", name: "Undergraduate" },
      enrollType: { code: "NONE", name: "Not Enrolled" }
    },
    {
      fee: { code: "T50920182", name: "Dental Gown Usage Fee" },
      amount: 500,
      gradeLevel: { code: "G", name: "Graduate" },
      enrollType: { code: "HALF", name: "Half Load" }
    },
    {
      fee: { code: "M46720182", name: "Global Ed.D Program Fee" },
      amount: 100,
      gradeLevel: { code: "B", name: "All" },
      enrollType: { code: "FULL", name: "Full Load" }
    }
  ],

  comments: "This is the User's comments for this request."

};

const SAMPLE_REQUEST = [
  {
    id: 73,
    term: "20182",
    code: "004",
    departmentCode: "PHARM",
    currentStatus: "PendingSessionApproval",
    revisions: [
      {
        id: 93,
        firstDayOfClass: "2018-07-01T00:00:00",
        lastDayOfClass: "2018-08-30T00:00:00",
        firstDayOfFinals: "2018-08-28T00:00:00",
        lastDayOfFinals: "2018-08-30T00:00:00",
        rateType: "OTHFLAT",
        otherFlatRateAmount: 30409,
        otherRatePerUnit: 1800,
        undergradFlatRateMin: 3,
        undergradFlatRateMax: 4,
        gradFlatRateMin: 1,
        gradFlatRateMax: 2,
        comments: "This is a sample Comment",
        createdBy: "tester 2",
        creatorEmail: "lipan@usc.edu",
        createdDTM: "2018-07-10T09:59:12.4999671-07:00",
        requestId: 73,
        actions: [
          {
            id: 0,
            group: null,
            name: "Submit",
            actor: "tester 2",
            comments: "from system",
            createdDTM: "2018-07-10T09:59:12.5454239-07:00",
            revisionId: 93
          }
        ],
        breaks: [
          {
            start: "2018-07-22T09:59:12.5454239-07:00",
            end: "2018-07-28T09:59:12.5454239-07:00"
          },
          {
            start: "2018-08-12T09:59:12.5454239-07:00",
            end: "2018-08-18T09:59:12.5454239-07:00"
          }
        ],
        locations: [
          {
            id: 95,
            code: "CAT",
            start: "2018-07-05T00:00:00",
            end: "2019-07-31T00:00:00",
            revisionId: 93
          },
          {
            id: 96,
            code: "ATT",
            start: "2018-08-01T00:00:00",
            end: "2018-08-30T00:00:00",
            revisionId: 93
          }
        ],
        specialFees: [
          {
            id: 0,
            code: "T30320182",
            amount: 300,
            population: "U",
            enrollment: "NONE"
          },
          {
            id: 1,
            code: "T50920182",
            amount: 500,
            population: "G",
            enrollment: "HALF"
          },
          {
            id: 2,
            code: "M46720182",
            amount: 100,
            population: "B",
            enrollment: "FULL"
          }
      ]
    }
  ],
  approvals: null
}];


