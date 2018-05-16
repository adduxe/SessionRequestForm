import { Component } from '@angular/core';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.page.component.html',
})

export class DetailPageComponent {

  session = {
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
      comments: "Catalina\nM22520001\nM225\nM19920063"
  };

}
