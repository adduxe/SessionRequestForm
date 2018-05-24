import { Component } from '@angular/core';

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html'
})

export class RequestFormComponent{

  public MAXUNITS: number = 100;

  public semesters = [
    { semCode: 20182, semName: "2018 Summer"},
    { semCode: 20183, semName: "2018 Fall"},
    { semCode: 20191, semName: "2019 Spring"},
    { semCode: 20192, semName: "2019 Summer"}
  ];

  public rates = [
    {
    term: "20182",
    termRates: [{
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1847",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "30409"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "24769"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1830",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "1",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "30496"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1915",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "30714"
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "30736"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2393",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "26724"
    }]
  }, {
    term: "20183",
    termRates: [{
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "25636"
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "22999"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1982",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1912",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1894",
      rateTypeFlatRate: "28423"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "20358"
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "33695"
    }, {
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31482"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2477",
      rateTypeFlatRate: "32032"
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "2005",
      rateTypeFlatRate: null
    }]
  }, {
    term: "20191",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1982",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: "1",
      rateTypeFlatRate: "33695"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1894",
      rateTypeFlatRate: "28423"
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "20358"
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31811"
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "1"
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31482"
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2477",
      rateTypeFlatRate: "32032"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "25636"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "2005",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1912",
      rateTypeFlatRate: null
    }]
  }, {
    term: "20192",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1982",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: "1",
      rateTypeFlatRate: "33695"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1894",
      rateTypeFlatRate: "28423"
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "20358"
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31811"
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "1"
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31482"
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2477",
      rateTypeFlatRate: "32032"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "25636"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "2005",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1912",
      rateTypeFlatRate: null
    }]
  }];

  public termRates = this.rates[0].termRates;

  public uscCampuses = [
    {
      campusCode: "ATT",
      campusName: "ATT Center"
    }, {
      campusCode: "CAT",
      campusName: "Catalina"
    }, {
      campusCode: "HSC",
      campusName: "Health Science Campus"
    }, {
      campusCode: "LAC",
      campusName: "L.A. Center"
    }, {
      campusCode: "NOF",
      campusName: "No Tuition or Fees"
    }, {
      campusCode: "USA",
      campusName: "Off Campus but in U.S."
    }, {
      campusCode: "OCC",
      campusName: "Orange County Campus"
    }, {
      campusCode: "OVS",
      campusName: "Overseas"
    }, {
      campusCode: "SAC",
      campusName: "Sacramento"
    }, {
      campusCode: "SD",
      campusName: "San Diego"
    }, {
      campusCode: "SKB",
      campusName: "Skirball"
    }, {
      campusCode: "UPC",
      campusName: "University Park"
    }, {
      campusCode: "VIR",
      campusName: "Virtual(DEN/Online)"
    }, {
      campusCode: "DC",
      campusName: "Washington D.C."
    }];

  public session = {

    sessionBreaks: [
      //{
      //  startDate: "2018-05-20T15:20:52.657",
      //  endDate: "2018-05-25T15:20:52.657"
      //}
    ]
  }

  public AddSessionBreak() {
    var newBreak = { startDate: "", endDate: "" };
    this.session.sessionBreaks.push(newBreak)
    return;
  }


}
