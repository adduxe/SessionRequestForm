import { Component } from '@angular/core';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.page.component.html',
})

export class DetailPageComponent {

  public sampleVar = 1000;


  public specialFees = [
    { feeCode: 'M101', amount: 100 },
    { feeCode: 'T505', amount: 500 }
  ];

  public session = {
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
      submissions: [],
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
      isClassHeldAtUpc: false,
      uscCampusLocation: "CAT",
      otherCampusLocation: "",
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
}

/*
 *
{
  "submissionId": 0,
  "lastUpdatedTimeStamp": "2018-05-10T21:00:45.434Z",
  "faoAction": "string",
  "faoActionDate": "2018-05-10T21:00:45.434Z",
  "faoActionReason": "string",
  "rnrAction": "string",
  "rnrActionDate": "2018-05-10T21:00:45.434Z",
  "rnrActionReason": "string",
  "burAction": "string",
  "burActionDate": "2018-05-10T21:00:45.434Z",
  "burActionReason": "string",
  "requestId": 0,
  "session": {
    "requestId": 0,
    "lastUpdateTimeStamp": "2018-05-10T21:00:45.434Z",
    "academicTerm": "string",
    "sessionCode": "string",
    "owningSchool": "string",
    "owningDepartment": "string",
    "userContact": "string",
    "userEmail": "string",
    "userPhone": "string",
    "firstDayOfClass": "2018-05-10T21:00:45.434Z",
    "lastDayOfClass": "2018-05-10T21:00:45.434Z",
    "lastDayForAddDrop": "2018-05-10T21:00:45.434Z",
    "lastDayForWithdrawal": "2018-05-10T21:00:45.434Z",
    "firstDayOfFinals": "2018-05-10T21:00:45.434Z",
    "lastDayOfFinals": "2018-05-10T21:00:45.434Z",
    "firstDayForFinalGrading": "2018-05-10T21:00:45.434Z",
    "lastDayForFinalGrading": "2018-05-10T21:00:45.434Z",
    "lastDayForEnrollmentOptionChange": "2018-05-10T21:00:45.434Z",
    "isClassHeldAtUpc": true,
    "uscCampusLocation": "string",
    "otherCampusLocation": "string",
    "rateType": "string",
    "ratePerUnitAmount": 0,
    "flatRateAmount": 0,
    "flatRateUnitsMin": 0,
    "flatRateUnitsMax": 0,
    "gradFlatRateUnitsMin": 0,
    "gradFlatRateUnitsMax": 0,
    "requestDate": "2018-05-10T21:00:45.434Z",
    "comments": "string",
    "sections": [
      {
        "sectionId": 0,
        "lastUpdateTimeStamp": "2018-05-10T21:00:45.434Z",
        "sectionNumber": "string",
        "requestId": 0,
        "prefix": "string",
        "title": "string",
        "courseNumber": "string",
        "unitValue": 0,
        "instructorName": "string",
        "estimatedEnrollment": 0,
        "comments": "string",
        "incomeAccountNumber": 0,
        "schedules": [
          {
            "scheduleId": 0,
            "lastUpdateTimeStamp": "2018-05-10T21:00:45.434Z",
            "sectionId": 0,
            "classDayOfWeek": "string",
            "classStartTime": "string",
            "classEndTime": "string",
            "section": {}
          }
        ],
        "session": {}
      }
    ],
    "sessionBreaks": [
      {
        "id": 0,
        "lastUpdateTimeStamp": "2018-05-10T21:00:45.434Z",
        "startDate": "2018-05-10T21:00:45.434Z",
        "endDate": "2018-05-10T21:00:45.434Z",
        "requestId": 0,
        "session": {}
      }
    ],
    "submissions": [
      {}
    ],
    "specialFees": [
      {
        "feeId": 0,
        "requestId": 0,
        "feeCode": "string",
        "assessedTo": "string",
        "amount": 0
      }
    ]
  }
}
 *
*/
