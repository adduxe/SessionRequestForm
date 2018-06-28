import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import { catchError } from 'rxjs/operators';

@Injectable()

export class PEDataService {

  private peURL = "http://oweb7-vm.usc.edu/peapi";

  constructor(private http: HttpClient){ }

  //public getCampusLocations(): Observable<any[]>{

  //  return this.http.get<any[]>(this.peURL + '/common/usclocations')
  //    .pipe(catchError(this.handleError<any[]>('getCampusLocations', [{campusCode: "XXX", campusName:"Failed fetching USC Locations"}])));
  //}


  //public getSpecialFeeList(): Observable<any[]> {

  //  return this.http.get<any[]>('/PeApi/common/usclocations')
  //    .pipe(catchError(this.handleError<any[]>('getCampusLocations', [])));
  //}

  public getActiveTerms() {
    return ACTIVETERMS;
  }

  public getCampusLocations(): any[]{
    return CAMPUSLOCS;
  }

  public getSpecialFeeList(acadTerm: string): any[]{
    return SPECIALFEES;
  }

  public getTermTuitionRates(acadTerm: string){
    return TUITIONRATES;
  }

  public getSessionCodes() {
    return SESSIONCODES;
  }

  public GetSession001(term: string) {
    return SESSION001DATES;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    }
  }

}

const CAMPUSLOCS = [
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

const SPECIALFEES = [
  "M46720182 Global Ed.D Program Fee Su2018",
  "T18920182 LSOA Student Fee Su2018",
  "T27120182 IPPAM Program Fee Su2018",
  "T30220182 ENGR Computing Access Fee - Su2018",
  "T30320182 CNTV Resource Access Fee - Su2018",
  "T31320182 MSM Program Fee Su2018",
  "T33320182 MS-Fin Program Fee Su2018",
  "T45420182 PM MBA Text Book Fee Su2018",
  "T46020182 OT Lab Fee Su2018",
  "T50920182 Dental Gown Usage Fee-Su2018",
  "T51320182 Malpractice Insurance Fee Su2018",
  "T51820182 Instrument Mngt System Fee Su2018",
  "T60520182 Summer Seminar Fee Su2018",
  "T60620182 Summer Seminar Lab Fee Su2018",
  "T61120182 OMBA Program Fee Su2018",
  "T61220182 OMBA Course Materials Fee Su2018"
];

const TUITIONRATES = [
  {
    term: "20182",
    termRates: [{
        rateTypeCode: "BUSG",
        rateTypeDesc: "Graduate Business",
        rateTypeUnitRate: 1847,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENSP",
        rateTypeDesc: "Special Dentistry International",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 30409
      }, {
        rateTypeCode: "DH",
        rateTypeDesc: "Dental Hygiene",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 24769
      }, {
        rateTypeCode: "PHAR",
        rateTypeDesc: "Pharmacy",
        rateTypeUnitRate: 1830,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "ENGRG",
        rateTypeDesc: "Graduate Engineering",
        rateTypeUnitRate: 1,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENT",
        rateTypeDesc: "Dentistry - DDS",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 30496
      }, {
        rateTypeCode: "MRED",
        rateTypeDesc: "Masters in Real Estate Development",
        rateTypeUnitRate: 2066,
        rateTypeFlatRate: 33056
      }, {
        rateTypeCode: "ZERO",
        rateTypeDesc: "Zero Tuition Rate",
        rateTypeUnitRate: 0,
        rateTypeFlatRate: 0
      }, {
        rateTypeCode: "CINAG",
        rateTypeDesc: "Graduate Cinema",
        rateTypeUnitRate: 1915,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "MED",
        rateTypeDesc: "Medicine",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 30714
      }, {
        rateTypeCode: "STD",
        rateTypeDesc: "Standard (Session 001)",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENTADV",
        rateTypeDesc: "Advanced Dentistry",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 30736
      }, {
        rateTypeCode: "LAW",
        rateTypeDesc: "Law",
        rateTypeUnitRate: 2393,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "MPA",
        rateTypeDesc: "Master in Physician Assistant",
        rateTypeUnitRate: 1800,
        rateTypeFlatRate: 26724
      }]
  }, {
    term: "20183",
    termRates: [{
        rateTypeCode: "DENSP",
        rateTypeDesc: "Special Dentistry International",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 31473
      }, {
        rateTypeCode: "DH",
        rateTypeDesc: "Dental Hygiene",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 25636
      }, {
        rateTypeCode: "DENT",
        rateTypeDesc: "Dentistry - DDS",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 31473
      }, {
        rateTypeCode: "DENTADV",
        rateTypeDesc: "Advanced Dentistry",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 22999
      }, {
        rateTypeCode: "CINAG",
        rateTypeDesc: "Graduate Cinema",
        rateTypeUnitRate: 1982,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "BUSG",
        rateTypeDesc: "Graduate Business",
        rateTypeUnitRate: 1912,
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "STD",
        rateTypeDesc: "Standard (Session 001)",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 27660
      }, {
        rateTypeCode: "ZERO",
        rateTypeDesc: "Zero Tuition Rate",
        rateTypeUnitRate: 0,
        rateTypeFlatRate: 0
      }, {
        rateTypeCode: "PHAR",
        rateTypeDesc: "Pharmacy",
        rateTypeUnitRate: 1894,
        rateTypeFlatRate: 28423
      }, {
        rateTypeCode: "MRED",
        rateTypeDesc: "Masters in Real Estate Development",
        rateTypeUnitRate: 2066,
        rateTypeFlatRate: 33056
      }, {
        rateTypeCode: "BKNPT3",
        rateTypeDesc: "BKN & PT Year 3",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 20358
      }, {
        rateTypeCode: "BKNPT1",
        rateTypeDesc: "BKN & PT Years 1-2",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 33695
      }, {
        rateTypeCode: "MPA",
        rateTypeDesc: "Master in Physician Assistant",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 27660
      }, {
        rateTypeCode: "MED",
        rateTypeDesc: "Medicine",
        rateTypeUnitRate: 1863,
        rateTypeFlatRate: 31482
      }, {
        rateTypeCode: "LAW",
        rateTypeDesc: "Law",
        rateTypeUnitRate: 2477,
        rateTypeFlatRate: 32032
      }, {
        rateTypeCode: "ENGRG",
        rateTypeDesc: "Graduate Engineering",
        rateTypeUnitRate: 2005,
        rateTypeFlatRate: null
      }]
  }, {
    term: "20191",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 27660
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31473
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: 1982,
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: 1,
      rateTypeFlatRate: 33695
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: 1894,
      rateTypeFlatRate: 28423
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 20358
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31811
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: 1800,
      rateTypeFlatRate: 1
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31482
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31473
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: 2066,
      rateTypeFlatRate: 33056
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: 2477,
      rateTypeFlatRate: 32032
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 25636
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: 0,
      rateTypeFlatRate: 0
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: 2005,
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: 1912,
      rateTypeFlatRate: null
    }]
  }, {
    term: "20192",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 27660
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31473
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: 1982,
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: 1,
      rateTypeFlatRate: 33695
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: 1894,
      rateTypeFlatRate: 28423
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 20358
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31811
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: 1800,
      rateTypeFlatRate: 1
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31482
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 31473
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: 2066,
      rateTypeFlatRate: 33056
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: 2477,
      rateTypeFlatRate: 32032
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: 1863,
      rateTypeFlatRate: 25636
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: 0,
      rateTypeFlatRate: 0
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: 2005,
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: 1912,
      rateTypeFlatRate: null
    }]
  }
];

const SESSIONCODES = [
  {
    sessionCode: "001",
    sessionDesc: "GENERAL UPC MAIN SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "002",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "003",
    sessionDesc: "KECK - MD PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "004",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "005",
    sessionDesc: "PHAR - PSCI & MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "006",
    sessionDesc: "DENT - First Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "007",
    sessionDesc: "DENT - Dental Hygiene First Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "008",
    sessionDesc: "DENT - International First Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "009",
    sessionDesc: "DENT - 1st Year Prosthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "010",
    sessionDesc: "DENT - 2nd Year Prosthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "011",
    sessionDesc: "DENT - Pediatric Dentistry Second Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "012",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "013",
    sessionDesc: "PHAR - Continuing Student Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "014",
    sessionDesc: "ENGR - DEN Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "015",
    sessionDesc: "ENGR - DEN Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "016",
    sessionDesc: "DORNSIFE - PHYS - Special Credit Exams for Subject Credit",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "017",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "018",
    sessionDesc: "MAIN - Session with no tuition or fees",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "019",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "020",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "021",
    sessionDesc: "PPD - Washington Semester",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "022",
    sessionDesc: "PPD - Sacramento Semester",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "023",
    sessionDesc: "DENT - Oral Surgery Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "024",
    sessionDesc: "DENT - Incoming Advanced",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "025",
    sessionDesc: "DENT - Oral Surgery (final trimester)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "026",
    sessionDesc: "DENT - Extended Enrollment",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "027",
    sessionDesc: "DENT - First Year Pediatric Dentistry",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "028",
    sessionDesc: "DENT - Incoming Oral Surgery",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "029",
    sessionDesc: "DENT - Extended Enrollment",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "030",
    sessionDesc: "DENT - 3rd Year Prosthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "031",
    sessionDesc: "MAIN - Credit Exams, Subject, and Units",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "032",
    sessionDesc: "DENT - 1st Year Orthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "033",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "034",
    sessionDesc: "ENGR - DEN Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "035",
    sessionDesc: "PHAR - Practicum",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "036",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "037",
    sessionDesc: "CINEMATIC ARTS - GRADUATE PROGRAMS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "038",
    sessionDesc: "PPD - MRED Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "039",
    sessionDesc: "DENT - Second Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "040",
    sessionDesc: "DENT - Third Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "041",
    sessionDesc: "DENT - Fourth Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "042",
    sessionDesc: "DENT - International Second Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "043",
    sessionDesc: "DENT - Dental Hygiene Program Second Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "044",
    sessionDesc: "CINEMATIC ARTS - GRADUATE PROGRAMS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "045",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "046",
    sessionDesc: "GENERAL HSC-CAMPUS SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "047",
    sessionDesc: "KECK - MD PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "048",
    sessionDesc: "ENGR - Graduate Programs",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "049",
    sessionDesc: "KECK - MD PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "050",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 6 WEEKS MAY TO JUNE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "051",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 6 WEEKS JULY TO AUGUST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "052",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 4 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "053",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 5 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "054",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 7 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "055",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 8 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "056",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 9 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "057",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 10 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "058",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 11 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "059",
    sessionDesc: "GENERAL - UPC SUMMER SESSION - 12 WEEKS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "060",
    sessionDesc: "REGISTRAR SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "061",
    sessionDesc: "GENERAL 15-WEEK SESSION WITHOUT FINALS WEEK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "062",
    sessionDesc: "KECK - PCPA - MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "063",
    sessionDesc: "PPD - GLOBAL MPP PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "064",
    sessionDesc: "PPD - GLOBAL MPP PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "065",
    sessionDesc: "DORNSIFE - WRITING FELLOWS PRACTICUM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "066",
    sessionDesc: "EDUC - DOHA - QATAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "067",
    sessionDesc: "REGISTRAR SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "068",
    sessionDesc: "ROSKI - IOVING YOUNG ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "069",
    sessionDesc: "EDUC - HELSINKI - FINLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "070",
    sessionDesc: "OVERSEAS - JAPAN SEMESTER - TOKYO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "071",
    sessionDesc: "OVERSEAS - JAPAN SEMESTER - TOKYO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "072",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "073",
    sessionDesc: "DORNSIFE - EARTH SCIENCES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "074",
    sessionDesc: "REGISTRAR - PostDoctoral Fellow Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "075",
    sessionDesc: "ROSKI - IOVINE YOUNG ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "076",
    sessionDesc: "GENERAL - 8 WEEK SUMMER SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "077",
    sessionDesc: "GERO - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "078",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "079",
    sessionDesc: "EDUC - DOHA - QATAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "080",
    sessionDesc: "KECK - MD PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "081",
    sessionDesc: "OVERSEAS - GREECE - CYA - ATHENS YR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "082",
    sessionDesc: "EDUC - HELSINKI - FINLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "083",
    sessionDesc: "GERO - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "084",
    sessionDesc: "MUSIC - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "085",
    sessionDesc: "GEOL - MAYMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "086",
    sessionDesc: "FINANCIAL AID CONSORTIUM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "087",
    sessionDesc: "MUSIC - UNIVERSITY OF THE ARTS HELSINKI - FINLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "088",
    sessionDesc: "DORNSIFE - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "089",
    sessionDesc: "OVERSEAS - BRAZIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "090",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "091",
    sessionDesc: "OVERSEAS - MEXICO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "092",
    sessionDesc: "OVERSEAS - SCOTLAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "093",
    sessionDesc: "OVERSEAS - SO. KOREA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "094",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "095",
    sessionDesc: "DORNSIFE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "096",
    sessionDesc: "DORNSIFE - PSYC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "097",
    sessionDesc: "DORNSIFE - PSYC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "098",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "099",
    sessionDesc: "MAIN - INTERNATIONAL COURSES ONLY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "100",
    sessionDesc: "DENT - CERTIFICATE GDEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "1000",
    sessionDesc: "SSM Fort Knox",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "101",
    sessionDesc: "OVERSEAS - KENYA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "102",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "103",
    sessionDesc: "USC - UCLA Cross Registration",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "104",
    sessionDesc: "OVERSEAS - GERMANY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "105",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "106",
    sessionDesc: "ANNENBERG X (1ST SESSION)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "107",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "108",
    sessionDesc: "MARSHALL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "109",
    sessionDesc: "DORNSIFE - SPAN-PORT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "110",
    sessionDesc: "DORNSIFE - CHEMISTRY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "1100",
    sessionDesc: "TEST1100",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "111",
    sessionDesc: "OVERSEAS - FUDAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "1111",
    sessionDesc: "TEST1111",
    ugUnitFeeFlag: null
  },
  {
    sessionCode: "112",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "113",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "114",
    sessionDesc: "OVERSEAS - BELGIUM",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "115",
    sessionDesc: "KECK- DENMARK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "116",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "117",
    sessionDesc: "KECK- PANAMA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "118",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "119",
    sessionDesc: "DORNSIFE - CHEMISTRY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "120",
    sessionDesc: "FINANCIAL AID CONSORTIUM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "121",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "122",
    sessionDesc: "LAW - SEMESTER ABROAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "123",
    sessionDesc: "OVERSEAS - MARSHALL- SPAIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "1234",
    sessionDesc: "TEST1234",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "124",
    sessionDesc: "OVERSEAS - JORDAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "125",
    sessionDesc: "OVERSEAS - MARSHALL - MADRID",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "126",
    sessionDesc: "OVERSEAS - HUNGARY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "127",
    sessionDesc: "OVERSEAS - LAW - ITALY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "128",
    sessionDesc: "OVERSEAS - ISRAEL",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "129",
    sessionDesc: "OVERSEAS - MEXICO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "130",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "1300",
    sessionDesc: "TEST1300",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "131",
    sessionDesc: "DORNSIFE - BISC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "132",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "133",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "134",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "135",
    sessionDesc: "OVERSEAS - MARSHAL - KOREA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "136",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "137",
    sessionDesc: "GERO - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "138",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "139",
    sessionDesc: "OVERSEAS - MARSHALL - FINLAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "140",
    sessionDesc: "OVERSEAS - MARSHALL - FRANCE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "141",
    sessionDesc: "OVERSEAS - THAILAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "142",
    sessionDesc: "OVERSEAS - THAILAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "143",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "144",
    sessionDesc: "THE GRADUATE SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "145",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "146",
    sessionDesc: "OVERSEAS - MARSHALL - CHINA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "147",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "148",
    sessionDesc: "ROSKI - FA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "149",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "150",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "151",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "152",
    sessionDesc: "OVERSEAS - GERMANY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "153",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "154",
    sessionDesc: "ENGR - ITP",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "155",
    sessionDesc: "DORNSIFE - AMST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "156",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "157",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "158",
    sessionDesc: "OVERSEAS - MARSHALL - SINGAPORE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "159",
    sessionDesc: "OVERSEAS - PORTUGAL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "160",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "161",
    sessionDesc: "OVERSEAS - MARSHALL - AUSTRIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "162",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "163",
    sessionDesc: "DORNSIFE - ENGL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "164",
    sessionDesc: "OVERSEAS - MARSHALL - FINLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "165",
    sessionDesc: "OVERSEAS - MARSHALL - FRANCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "166",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "167",
    sessionDesc: "MUSIC - MANCHESTER - ENGLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "168",
    sessionDesc: "OVERSEAS - MARSHALL - HONG KONG",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "169",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "170",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "171",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "172",
    sessionDesc: "OVERSEAS - AMSTERDAM",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "173",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "174",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "175",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "176",
    sessionDesc: "DORNSIFE - HISTORY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "177",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "178",
    sessionDesc: "DORNSIFE - GEOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "179",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "180",
    sessionDesc: "KECK- NEPAL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "181",
    sessionDesc: "DORNSIFE - CHEM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "182",
    sessionDesc: "DORNSIFE - AMST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "183",
    sessionDesc: "THE GRADUATE SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "184",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "185",
    sessionDesc: "DORNSIFE - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "186",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "187",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "188",
    sessionDesc: "OVERSEAS - DORNSIFE - WASHINGTON DC",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "189",
    sessionDesc: "KECK - PCPA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "190",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "191",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "192",
    sessionDesc: "OVERSEAS - LAW - UK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "193",
    sessionDesc: "DORNSIFE - LBST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "194",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "195",
    sessionDesc: "DORNSIFE - BISC - OXFORD, ENGLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "196",
    sessionDesc: "DENT - PEDO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "197",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "198",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "199",
    sessionDesc: "PROVOST - INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "200",
    sessionDesc: "OVERSEAS - ARGENTINA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "201",
    sessionDesc: "HONG KONG - CHINA - CUHK SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "202",
    sessionDesc: "OVERSEAS - EGYPT",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "203",
    sessionDesc: "OVERSEAS - ITALY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "204",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "205",
    sessionDesc: "KECK- INDIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "206",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "207",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "208",
    sessionDesc: "OVERSEAS - GHANA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "209",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "210",
    sessionDesc: "OVERSEAS - SINGAPORE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "211",
    sessionDesc: "ARCH - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "212",
    sessionDesc: "DENT - ADVANCED CERTIFICATE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "213",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "214",
    sessionDesc: "OVERSEAS - LAW - AUSTRALIA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "215",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "216",
    sessionDesc: "OVERSEAS - NEW ZEALAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "217",
    sessionDesc: "OVERSEAS - NEW ZEALAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "218",
    sessionDesc: "OVERSEAS - AUSTRALIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "219",
    sessionDesc: "OVERSEAS - AUSTRALIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "220",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "221",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "222",
    sessionDesc: "OVERSEAS - CZECH PRAGUE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "2222",
    sessionDesc: "TEST222",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "223",
    sessionDesc: "DORNSIFE - ENGL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "224",
    sessionDesc: "KECK - OTEP",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "225",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "226",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "227",
    sessionDesc: "OVERSEAS - ISRAEL",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "228",
    sessionDesc: "OVERSEAS - ISRAEL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "229",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "230",
    sessionDesc: "OVERSEAS - EALC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "231",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "232",
    sessionDesc: "OVERSEAS - MADRID",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "233",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "234",
    sessionDesc: "DORNSIFE - EASC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "235",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "236",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "237",
    sessionDesc: "ENGR - CE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "238",
    sessionDesc: "DORNSIFE - SLL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "239",
    sessionDesc: "DORNSIFE - MPW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "240",
    sessionDesc: "DORNSIFE - MPW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "241",
    sessionDesc: "OVERSEAS - NEW ZEALAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "242",
    sessionDesc: "DORNSIFE - MPW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "243",
    sessionDesc: "OVERSEAS - CHINA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "244",
    sessionDesc: "OVERSEAS - MARSHALL - KOREA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "245",
    sessionDesc: "OVERSEAS - MARSHALL - BARCELONA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "246",
    sessionDesc: "OVERSEAS - MARSHALL - FRANCE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "247",
    sessionDesc: "OVERSEAS - NETHERLAND - ROTTERDAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "248",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "249",
    sessionDesc: "OVERSEAS - AUSTRALIA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "250",
    sessionDesc: "OVERSEAS - AUSTRALIA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "251",
    sessionDesc: "OVERSEAS- CHINA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "252",
    sessionDesc: "OVERSEAS - MARSHALL - ISRAEL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "253",
    sessionDesc: "ENGR- DEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "254",
    sessionDesc: "DORNSIFE - RELIGION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "255",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "256",
    sessionDesc: "OVERSEAS - GERMANY - WHU OTTO BEISHEIM",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "257",
    sessionDesc: "OVERSEAS - UK - LONDON",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "258",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "259",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "260",
    sessionDesc: "OVERSEAS - UK - BADA SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "261",
    sessionDesc: "CONTINUING EDUCATION SUMMER SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "262",
    sessionDesc: "DORNSIFE - SWMS - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "263",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "264",
    sessionDesc: "DORNSIFE - ALI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "265",
    sessionDesc: "KECK - SCRM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "266",
    sessionDesc: "DORNSIFE - ALI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "267",
    sessionDesc: "DORNSIFE - BISC - CATALINA ISLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "268",
    sessionDesc: "KAUFMAN - DANCE IN L.A. - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "269",
    sessionDesc: "DORNSIFE - ANTH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "270",
    sessionDesc: "ENGR - EE - 11 WEEK SESSION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "271",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "272",
    sessionDesc: "DORNSIFE - MAYMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "273",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "274",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "275",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "276",
    sessionDesc: "KECK - PREVENTIVE MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "277",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "278",
    sessionDesc: "OVERSEAS - SINGAPORE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "279",
    sessionDesc: "ANNENBERG - CMGT - LSE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "280",
    sessionDesc: "ENGR - DEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "281",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "282",
    sessionDesc: "MARSHALL - EMBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "283",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "284",
    sessionDesc: "MARSHALL - SOCIAL ENTREPRENEURSHIP PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "285",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "286",
    sessionDesc: "CINEMATIC ARTS - CTPR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "287",
    sessionDesc: "CINEMATIC ARTS - CTPR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "288",
    sessionDesc: "CINEMATIC ARTS - CTPR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "289",
    sessionDesc: "MARSHALL - EMBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "290",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "291",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "292",
    sessionDesc: "ENGR - ITP",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "293",
    sessionDesc: "CINEMATIC ARTS - CTPR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "294",
    sessionDesc: "MARSHALL - OVERSEAS - CHILE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "295",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "296",
    sessionDesc: "KECK - SCRM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "297",
    sessionDesc: "MARSHALL - BUAD - LOS ANGELES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "298",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "299",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "300",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "301",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "302",
    sessionDesc: "OVERSEAS - CZECH - PRAGUE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "303",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "304",
    sessionDesc: "THTR - ACTING SUMMER INSTITUTE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "305",
    sessionDesc: "EDUC - FRESNO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "306",
    sessionDesc: "EDUC - GRADUATE CENTERS PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "307",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "308",
    sessionDesc: "EDUC - HICKAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "309",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "310",
    sessionDesc: "DENT - GDEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "311",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "312",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "313",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "314",
    sessionDesc: "OVERSEAS - SHANGHAI",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "315",
    sessionDesc: "DENT - GDEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "316",
    sessionDesc: "OVERSEAS - IRELAND - GALWAY NUY SCIENCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "317",
    sessionDesc: "EDUC - HAWAII",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "318",
    sessionDesc: "DENT - 2ND YEAR OPERATIVE DENT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "319",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "320",
    sessionDesc: "EDUC - HAWAII",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "321",
    sessionDesc: "EDUC - HICKAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "322",
    sessionDesc: "EDUC - HICKAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "323",
    sessionDesc: "EDUC - HICKAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "324",
    sessionDesc: "DENT - 2nd Year Orthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "325",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "326",
    sessionDesc: "OVERSEAS - JAPAN - NANZAN SEMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "327",
    sessionDesc: "OVERSEAS - SPAIN - BOSTON UNIVERSITY OF MADRID YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "328",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "329",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "330",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "331",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "332",
    sessionDesc: "DORNSIFE - EALC - BEIJING SUMMER PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "333",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "334",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "335",
    sessionDesc: "OVERSEAS - ARGENTINA - UNIVERSITY OF SAN ANDRES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "336",
    sessionDesc: "OVERSEAS - GERMANY - BERLIN IES YEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "337",
    sessionDesc: "OVERSEAS - GERMANY - DRESDEN BU YEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "338",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "339",
    sessionDesc: "ANNENBERG - PD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "340",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "341",
    sessionDesc: "DENT- 1ST YEAR - OROFACIAL PAIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "342",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "343",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "344",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "345",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "346",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "347",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "348",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "349",
    sessionDesc: "DORNSIFE - ANTH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "350",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "351",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "352",
    sessionDesc: "EDUC - HONG KONG",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "353",
    sessionDesc: "SOWK - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "354",
    sessionDesc: "DORNSIFE - SSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "355",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "356",
    sessionDesc: "OVERSEAS - ITALY - FLORENCE, SYRACUSE UNIVERSITY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "357",
    sessionDesc: "OVERSEAS - AUSTRALIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "358",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "359",
    sessionDesc: "EDUC - LA CENTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "360",
    sessionDesc: "EDUC - LA CENTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "361",
    sessionDesc: "EDUC - LA CENTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "362",
    sessionDesc: "DORNSIFE - MPW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "363",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "364",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "365",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "366",
    sessionDesc: "DENT - INCOMING OROFACIAL PAIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "367",
    sessionDesc: "DENT - 2ND YEAR OROFACIAL PAIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "368",
    sessionDesc: "DENT - 3rd Year Orthodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "369",
    sessionDesc: "DENT - 1st Year Periodontology",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "370",
    sessionDesc: "DENT - 2nd Year Periodontology",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "371",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "372",
    sessionDesc: "MARSHALL - GSBA - ONLINE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "373",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "374",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "375",
    sessionDesc: "ENGR - ISE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "376",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "377",
    sessionDesc: "CINEMATIC ARTS - CTIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "378",
    sessionDesc: "MARSHALL - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "379",
    sessionDesc: "EDUC - ORANGE COUNTY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "380",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "381",
    sessionDesc: "EDUC - WMLT - MANDARIN - HKUST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "382",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "383",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "384",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "385",
    sessionDesc: "KECK - ACMD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "386",
    sessionDesc: "EDUC - EDPT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "387",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "388",
    sessionDesc: "DENT - INCOMING OPERATIVE DENTISTRY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "389",
    sessionDesc: "OVERSEAS - SOUTH KOREA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "390",
    sessionDesc: "MARSHALL - MLIS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "391",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "392",
    sessionDesc: "OVERSEAS - NEW ZEALAND - AUCKLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "393",
    sessionDesc: "DORNSIFE - PSYC - ONLINE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "394",
    sessionDesc: "DENT - 3rd Year Periodontology",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "395",
    sessionDesc: "DORNSIFE - SSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "396",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "397",
    sessionDesc: "DORNSIFE - WRIT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "398",
    sessionDesc: "DENT - OFPM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "399",
    sessionDesc: "OVERSEAS - JAPAN - SEMESTER IN TOKYO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "400",
    sessionDesc: "DORNSIFE - SOCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "401",
    sessionDesc: "THE GRADUATE SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "402",
    sessionDesc: "DORNSIFE - MATH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "403",
    sessionDesc: "KECK - SCRM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "404",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "405",
    sessionDesc: "DORNSIFE - AHIS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "406",
    sessionDesc: "MARSHALL - MASTER OF BUSINESS FOR VETERANS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "407",
    sessionDesc: "KECK - PREVENTIVE MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "408",
    sessionDesc: "KECK - PREVENTIVE MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "409",
    sessionDesc: "OVERSEAS - JAPAN - NANZAN SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "410",
    sessionDesc: "OVERSEAS - UK - ENGLAND UNIVERSITY EAST ANG",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "411",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "412",
    sessionDesc: "OVERSEAS - AUSTRIA - VIENNA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "413",
    sessionDesc: "MARSHALL- GSBA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "414",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "415",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "416",
    sessionDesc: "DORNSIFE - PHIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "417",
    sessionDesc: "CINEMATIC ARTS - SUMMER PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "418",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "419",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "420",
    sessionDesc: "ANSC - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "421",
    sessionDesc: "DORNSIFE - EALC - KOREAN PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "422",
    sessionDesc: "DORNSIFE - EALC - BEIJING PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "423",
    sessionDesc: "LAW - FRANCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "424",
    sessionDesc: "DORNSIFE - AMST - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "425",
    sessionDesc: "OVERSEAS - AUSTRIA - VIENNA Wirtschafts Universitat",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "426",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "427",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "428",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "429",
    sessionDesc: "DORNSIFE - POSC - WASHINGTON DC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "430",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "431",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "432",
    sessionDesc: "DENT - CERTIFICATE GDEN FINAL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "433",
    sessionDesc: "DORNSIFE - SPANISH - ONLINE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "434",
    sessionDesc: "KECK - ANST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "435",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "436",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "437",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "438",
    sessionDesc: "OVERSEAS - SPAIN - CIEE ALICANTE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "439",
    sessionDesc: "OVERSEAS - SPAIN UNIVERSITY OF M.Y.P",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "440",
    sessionDesc: "DENT - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "441",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "442",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "443",
    sessionDesc: "OVERSEAS - CZECH - PRAGUE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "444",
    sessionDesc: "OVERSEAS - CHILE - SANTIAGO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "4444",
    sessionDesc: "TEST4444",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "445",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "446",
    sessionDesc: "OVERSEAS - AUSTRALIA - BRISBANE UQ",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "447",
    sessionDesc: "MARSHALL - BUAD - UNDERGRADUATE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "448",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "449",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "450",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "451",
    sessionDesc: "OVERSEAS - SPAIN - MADRID - IES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "452",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "453",
    sessionDesc: "OVERSEAS - AUSTRALIA - UNIVERSITY OF MELBOURNE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "454",
    sessionDesc: "OVERSEAS - FRANCE - PARIS - GROUPE HEC-ISA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "455",
    sessionDesc: "MARSHALL - GERMANY - BUAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "456",
    sessionDesc: "OVERSEAS - HONG KONG - UNIVERSITY OF SCIENCE AND TECH",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "457",
    sessionDesc: "DORNSIFE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "458",
    sessionDesc: "OVERSEAS - PHILIPPINES - ASIAN INSTITUTE OF MANAGEMENT",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "459",
    sessionDesc: "MARSHALL - SINGAPORE - UNIVERSITY OF SINGAPORE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "460",
    sessionDesc: "MARSHALL - TAIWAN - BUSINESS ADMINISTRATION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "461",
    sessionDesc: "MARSHALL - THAILAND - BUSINESS ADMINISTRATION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "462",
    sessionDesc: "MARSHALL - UK - MANCHESTER - BUSINESS ADMINISTRATION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "463",
    sessionDesc: "MARSHALL - GSBA - JAPANESE EXECUTIVES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "464",
    sessionDesc: "OVERSEAS - GERMANY - BERLIN - IIE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "465",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "466",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "467",
    sessionDesc: "DORNSIFE - FREN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "468",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "469",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "470",
    sessionDesc: "GERONTOLOGY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "471",
    sessionDesc: "THE GRADUATE SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "472",
    sessionDesc: "OVERSEAS - TAIWAN - CIEE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "473",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "474",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "475",
    sessionDesc: "OVERSEAS - CAMBRIDGE SUMMER PROGRAM",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "476",
    sessionDesc: "MARSHALL - MOR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "477",
    sessionDesc: "FINANCIAL AID CONSORTIUM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "478",
    sessionDesc: "MARSHALL - SWITZERLAND PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "479",
    sessionDesc: "OVERSEAS - BRAZIL - FUNDACAO GETULIO VARGAS",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "480",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "481",
    sessionDesc: "OVERSEAS - FUDAN - CHINA P.R.C",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "482",
    sessionDesc: "OVERSEAS - COSTA RICA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "483",
    sessionDesc: "OVERSEAS - COPENHAGEN - DENMARK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "484",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "485",
    sessionDesc: "DORNSIFE - ENGL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "486",
    sessionDesc: "OVERSEAS - SEOUL - KOREA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "487",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "488",
    sessionDesc: "MARSHALL - OVERSEAS - INSTITUTO PANAMERICANO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "489",
    sessionDesc: "MARSHALL - OVERSEAS - ESCUELA SUPERIOR SPAIN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "490",
    sessionDesc: "OVERSEAS - SCOTLAND - EDINBURGH",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "491",
    sessionDesc: "OVERSEAS - UNIVERSITY OF SEVILLE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "492",
    sessionDesc: "OVERSEAS - ISRAEL - TEL AVIV YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "493",
    sessionDesc: "OVERSEAS - PEKING",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "494",
    sessionDesc: "OVERSEAS - SPAIN - BOSTON YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "495",
    sessionDesc: "OVERSEAS - SPAIN - CIEE U. OF SEV YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "496",
    sessionDesc: "OVERSEAS - CHINA - NANJING",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "497",
    sessionDesc: "DORNSIFE - WRIT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "498",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "499",
    sessionDesc: "KECK - ACMD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "500",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "5000",
    sessionDesc: "Uvaldos session",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "501",
    sessionDesc: "PPD - WASHINGTON DC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "502",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "503",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "504",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "505",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "506",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "507",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "508",
    sessionDesc: "ROSKI - ACAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "509",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "510",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "511",
    sessionDesc: "PPD - SACRAMENTO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "512",
    sessionDesc: "PPD - SACRAMENTO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "513",
    sessionDesc: "PPD - SACRAMENTO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "514",
    sessionDesc: "DORNSIFE - POIR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "515",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "516",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "517",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "518",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "519",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "520",
    sessionDesc: "PPD - HERTIE EXCHANGE PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "521",
    sessionDesc: "PPD - PUAD AFFAIRS CTR WASHINGTON DC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "522",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "523",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "524",
    sessionDesc: "PPD - DCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "525",
    sessionDesc: "PPD - DCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "526",
    sessionDesc: "PPD - DCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "527",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "528",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "529",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "530",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "531",
    sessionDesc: "PPD - MRED Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "532",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "533",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "534",
    sessionDesc: "DORNSIFE - FREN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "535",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "536",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "537",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "538",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "539",
    sessionDesc: "EDUC - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "540",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "541",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "542",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "543",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "544",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "545",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "546",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "547",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "548",
    sessionDesc: "PPD - MRED Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "549",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "550",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "551",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "552",
    sessionDesc: "DORNSIFE - EASC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "553",
    sessionDesc: "DORNSIFE - CHEMISTRY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "554",
    sessionDesc: "ENGR - DEN Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "555",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "556",
    sessionDesc: "DORNSIFE - FREN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "557",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "558",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "559",
    sessionDesc: "GERONTOLOGY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "560",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "561",
    sessionDesc: "ENGR - DEN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "562",
    sessionDesc: "DENT - 1ST YEAR GENERAL PRACTICE RESIDENCY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "563",
    sessionDesc: "PPD - SACRAMENTO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "564",
    sessionDesc: "PPD - SACRAMENTO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "565",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "566",
    sessionDesc: "PHAR - PSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "567",
    sessionDesc: "CINEMATIC ARTS - CTPR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "568",
    sessionDesc: "PPD - OVERSEAS - RIO DE JANEIRO CIEE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "569",
    sessionDesc: "MARSHALL - BUAD",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "570",
    sessionDesc: "OVERSEAS - MARSHALL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "571",
    sessionDesc: "MARSHALL- EUROPEAN BUSINESS SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "572",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "573",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "574",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "575",
    sessionDesc: "OVERSEAS - IRELAND - DUBLIN EXCH SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "576",
    sessionDesc: "OVERSEAS - YONSEI - U YEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "577",
    sessionDesc: "PHAR - PHRD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "578",
    sessionDesc: "OVERSEAS - NANZAN - JAPAN YEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "579",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "580",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "581",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "582",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "583",
    sessionDesc: "CINEMATIC ARTS - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "584",
    sessionDesc: "DORNSIFE - PHYS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "585",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "586",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "587",
    sessionDesc: "OVERSEAS - MOROCCO - RABAT SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "588",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "589",
    sessionDesc: "ANNENBERG - OVERSEAS - RIO DE JANEIRO CIEE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "590",
    sessionDesc: "OVERSEAS - ISRAEL - JERUSALEM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "591",
    sessionDesc: "PPD - OVERSEAS - KOREA - YONSEI U. YEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "592",
    sessionDesc: "WASHINGTON - SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "593",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "594",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "595",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "596",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "597",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "598",
    sessionDesc: "PPD - INTENSIVE SEMINAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "599",
    sessionDesc: "ENGR - SUMMER PROGRAM IN EUROPE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "600",
    sessionDesc: "OVERSEAS - FRANCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "601",
    sessionDesc: "OVERSEAS - ENGLAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "602",
    sessionDesc: "OVERSEAS - GERMANY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "603",
    sessionDesc: "OVERSEAS - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "604",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "605",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "606",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "607",
    sessionDesc: "GERONTOLOGY - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "608",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "609",
    sessionDesc: "GERONTOLOGY - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "610",
    sessionDesc: "GERONTOLOGY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "611",
    sessionDesc: "OVERSEAS - LONDON - UNIVERSITY OF ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "612",
    sessionDesc: "OVERSEAS - MADRID - SPAIN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "613",
    sessionDesc: "OVERSEAS - PARIS - FRANCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "614",
    sessionDesc: "OVERSEAS - TEL AVIV - ISRAEL",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "615",
    sessionDesc: "OVERSEAS - FUDAN - CHINA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "616",
    sessionDesc: "OVERSEAS - WASEDA - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "617",
    sessionDesc: "PROVOST - INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "618",
    sessionDesc: "ANSC - COMM - JOUR- MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "619",
    sessionDesc: "OVERSEAS - CHINA - BEIJING",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "620",
    sessionDesc: "OVERSEAS - IRELAND - TRINITY COLLEGE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "621",
    sessionDesc: "GERONTOLOGY - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "622",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "623",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "624",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "625",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "626",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "627",
    sessionDesc: "ANSC - NY - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "628",
    sessionDesc: "MARSHALL - GSBA - EMBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "629",
    sessionDesc: "MARSHALL - EMBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "630",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "631",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "632",
    sessionDesc: "OVERSEAS - NANZAN UNIVERSITY - JAPAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "633",
    sessionDesc: "OVERSEAS - ENGLAND - UNIVERSITY OF SUSSEX",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "634",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "635",
    sessionDesc: "GERONTOLOGY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "636",
    sessionDesc: "ENGR - CSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "637",
    sessionDesc: "DENT - 1st Year Endodontics",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "638",
    sessionDesc: "ROSKI - FA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "639",
    sessionDesc: "DORNSIFE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "640",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "641",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "642",
    sessionDesc: "DORNSIFE - NSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "643",
    sessionDesc: "DORNSIFE - NSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "644",
    sessionDesc: "ROSKI - ACAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "645",
    sessionDesc: "OVERSEAS - FRANCE - SWEET BRIAR COLLEGE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "646",
    sessionDesc: "MARSHALL- GSBA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "647",
    sessionDesc: "HUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "648",
    sessionDesc: "ROSKI - ACAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "649",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "650",
    sessionDesc: "OVERSEAS - GERMANY - UNIVERSITY OF FREIBURG",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "651",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "652",
    sessionDesc: "OVERSEAS - ENGLAND - UNIVERSITY OF KENT",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "653",
    sessionDesc: "OVERSEAS - JAPAN - UNIVERSITY OF WASEDA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "654",
    sessionDesc: "REGISTRAR - HOWARD UNIVERSITY EXCHANGE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "655",
    sessionDesc: "OVERSEAS - ISRAEL - HEBREW UNIVERSITY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "656",
    sessionDesc: "OVERSEAS YEAR - SPAIN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "657",
    sessionDesc: "OVERSEAS - AUSTRALIA - NATIONAL UNIVERSITY - CANBERRA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "658",
    sessionDesc: "OVERSEAS - AFRICA - KENYA COASTAL",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "659",
    sessionDesc: "OVERSEAS - AFRICA - ZIMBABWE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "660",
    sessionDesc: "DORNSIFE - HISTORY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "661",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "662",
    sessionDesc: "OVERSEAS - KENYA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "663",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "664",
    sessionDesc: "DORNSIFE - PHIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "665",
    sessionDesc: "DORNSIFE - PHIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "666",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "667",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "668",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "669",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "670",
    sessionDesc: "ANSC - COMM - JOUR - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "671",
    sessionDesc: "OVERSEAS - RUSSIA - LENINGRAD UNIVERSITY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "672",
    sessionDesc: "FLORENCE - ITALY - SEMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "673",
    sessionDesc: "MARSHALL - SYDNEY - AUSTRALIA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "674",
    sessionDesc: "ENGR - CSCI",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "675",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "676",
    sessionDesc: "ENGR - TSINGHUA UNIVERSITY - CHINA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "677",
    sessionDesc: "IRELAND - TRINITY IRISH SCHOOL ECUMENICS SEMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "678",
    sessionDesc: "PROVOST - INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "679",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "680",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "681",
    sessionDesc: "DORNSIFE - THEMATIC OPTION",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "682",
    sessionDesc: "OVERSEAS - CHINA - FUDAN UNIVERSITY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "683",
    sessionDesc: "COMM - ANNENBERG - MAYMESTER - L.A. SPORTS TREK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "684",
    sessionDesc: "DORNSIFE - SOCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "685",
    sessionDesc: "DORNSIFE - LINGUISTICS - PWP",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "686",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "687",
    sessionDesc: "DORNSIFE - JAPAN - TIU - YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "688",
    sessionDesc: "SUMMER PROGRAMS - BOVARD COLLEGE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "689",
    sessionDesc: "SUMMER PROGRAMS - BOVARD COLLEGE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "690",
    sessionDesc: "AHIS - VISS - DORNSIFE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "691",
    sessionDesc: "ANNENBERG SCHOOL OF COMM - BERLIN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "692",
    sessionDesc: "PHAR- MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "693",
    sessionDesc: "MARSHALL - MEDICAL MANAGEMENT (MMM)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "694",
    sessionDesc: "MARSHALL - MEDICAL MANAGEMENT (MMM)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "695",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "696",
    sessionDesc: "MARSHALL - MEDICAL MANAGEMENT (MMM)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "697",
    sessionDesc: "MARSHALL - MEDICAL MANAGEMENT (MMM)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "698",
    sessionDesc: "ANNENBERG SCHOOL OF COMM - CAPE TOWN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "699",
    sessionDesc: "ANNENBERG SCHOOL OF COMM - HONG KONG",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "700",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "701",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "702",
    sessionDesc: "China: Shanghai Semester",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "703",
    sessionDesc: "GERO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "704",
    sessionDesc: "DORNSIFE - SPAN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "705",
    sessionDesc: "DORNSIFE - SSCI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "706",
    sessionDesc: "MARSHALL - WASADA UNIVERSITY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "707",
    sessionDesc: "BUAD OVERSEAS HONG KONG",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "708",
    sessionDesc: "DORNSIFE - FSEM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "709",
    sessionDesc: "DORNSIFE - CLAS - ITALY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "710",
    sessionDesc: "OVERSEAS - UK - WALES",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "711",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "712",
    sessionDesc: "OVERSEAS - SINGAPORE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "713",
    sessionDesc: "DORNSIFE - SPAN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "714",
    sessionDesc: "ANSC - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "715",
    sessionDesc: "DENT - First Year Operative Dentistry",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "716",
    sessionDesc: "DORNSIFE - FREN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "717",
    sessionDesc: "ENGR - OVERSEAS",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "718",
    sessionDesc: "OVERSEAS - BRAZIL - SAN PAULO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "719",
    sessionDesc: "OVERSEAS - INDIA - NEW DEHLI",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "720",
    sessionDesc: "OVERSEAS - ITALY - FLORENCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "721",
    sessionDesc: "OVERSEAS - JORDAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "722",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "723",
    sessionDesc: "OVERSEAS - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "724",
    sessionDesc: "OVERSEAS - UK - UCL",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "725",
    sessionDesc: "LAW - BRAZIL - FGV",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "726",
    sessionDesc: "OVERSEAS - UK - CAMBRIDGE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "727",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "728",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "729",
    sessionDesc: "ENGR - Exchange Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "730",
    sessionDesc: "OVERSEAS - UK - MED SEMESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "731",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "732",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "733",
    sessionDesc: "ANNENBERG SCHOOL OF COMM - SAO PAULO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "734",
    sessionDesc: "MUSIC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "735",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "736",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "737",
    sessionDesc: "MARSHALL - OVERSEAS - BUDAPEST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "738",
    sessionDesc: "OVERSEAS - NETHERLANDS - Maastricht",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "739",
    sessionDesc: "DENT - GENERAL PRACTICE RESIDENCY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "740",
    sessionDesc: "MARSHALL - IBEAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "741",
    sessionDesc: "DORNSIFE - GEOG",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "742",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "743",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "744",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "745",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "746",
    sessionDesc: "GERO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "747",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "748",
    sessionDesc: "ANSC - PUBD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "749",
    sessionDesc: "OVERSEAS - SPAN - PWP - PERU",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "750",
    sessionDesc: "DORNSIFE - IR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "751",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "752",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "753",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "754",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "755",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "756",
    sessionDesc: "DENT - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "757",
    sessionDesc: "ANSC - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "758",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "759",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "760",
    sessionDesc: "DORNSIFE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "761",
    sessionDesc: "DORNSIFE - ANTH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "762",
    sessionDesc: "GERO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "763",
    sessionDesc: "DENT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "764",
    sessionDesc: "DORNSIFE - WRITING PROGRAM - HAITI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "765",
    sessionDesc: "DORNSIFE - ECON",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "766",
    sessionDesc: "DORNSIFE - EALC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "767",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "768",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "769",
    sessionDesc: "DENT - Certificate Orofacial Pain",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "770",
    sessionDesc: "ANSC - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "771",
    sessionDesc: "DORNSIFE - SLL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "772",
    sessionDesc: "OVERSEAS - NEW ZEALAND - AUCKLAND SEMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "773",
    sessionDesc: "ANSC - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "774",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "775",
    sessionDesc: "CINEMATIC ARTS - GRADUATE PROGRAMS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "776",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "777",
    sessionDesc: "DORNSIFE - ANTH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "778",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "779",
    sessionDesc: "EDUC - WMLT - KOREAN - YONSEI UNIVERSITY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "780",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "781",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "782",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "783",
    sessionDesc: "DENT - OFPM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "784",
    sessionDesc: "OVERSEAS - NETHERLANDS - AMSTERDAM",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "785",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "786",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "787",
    sessionDesc: "LAW - GETULIO LAW SCHOOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "788",
    sessionDesc: "MARSHALL - COPENHAGEN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "789",
    sessionDesc: "MARSHALL - AUSTRALIA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "790",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "791",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "792",
    sessionDesc: "DORNSIFE - MPW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "793",
    sessionDesc: "OVERSEAS - BRAZIE - ICEE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "794",
    sessionDesc: "DENT - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "795",
    sessionDesc: "DENT - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "796",
    sessionDesc: "OVERSEAS - FRANCES - SCIENCES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "797",
    sessionDesc: "DORNSIFE - HISTORY - NEW MEXICO",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "798",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "799",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "800",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "801",
    sessionDesc: "OVERSEAS - SOUTH AFRICA - BOTSWANA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "802",
    sessionDesc: "DORNSIFE - PHED",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "803",
    sessionDesc: "DORNSIFE - GEOL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "804",
    sessionDesc: "OVERSEAS - GERMANY - DRESDEN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "805",
    sessionDesc: "MARSHALL - HKUST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "806",
    sessionDesc: "EDUC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "807",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "808",
    sessionDesc: "PROVOST - INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "809",
    sessionDesc: "OVERSEAS - SOUTH AFRICA - DURBAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "810",
    sessionDesc: "PROVOST - INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "811",
    sessionDesc: "OVERSEAS - SWMS - MAYMESTER",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "812",
    sessionDesc: "OVERSEAS - GERMANY - KOBLENZ",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "813",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "814",
    sessionDesc: "EDUC - WMLT - SPANISH - IBERO UNIVERSIDAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "815",
    sessionDesc: "UCLA - USC Cross Enrollment",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "816",
    sessionDesc: "DORNSIFE - PSYC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "817",
    sessionDesc: "OVERSEAS - CHINA - NANJING",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "818",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "819",
    sessionDesc: "MARSHALL - BOCCONI",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "820",
    sessionDesc: "PPD - HEALTH PROGRAMS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "821",
    sessionDesc: "OVERSEAS - SOUTH AFRICA - CIEE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "822",
    sessionDesc: "OVERSEAS - TAIWAN - CIEE YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "823",
    sessionDesc: "OVERSEAS - UK - LONDON - QUEEN MARY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "824",
    sessionDesc: "OVERSEAS - UK - LONDON - QUEEN MARY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "825",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "826",
    sessionDesc: "PPD - HEALTH PROGRAMS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "827",
    sessionDesc: "OVERSEAS - BERLIN - IES",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "828",
    sessionDesc: "MARSHALL - HONG KONG UNIVERSITY - WBB PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "829",
    sessionDesc: "DORNSIFE - ENST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "830",
    sessionDesc: "DORNSIFE - EALC",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "831",
    sessionDesc: "OVERSEAS - NETHERLANDS - AMSTERDAM - CIEE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "832",
    sessionDesc: "DORNSIFE - SPAN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "833",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "834",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "835",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "836",
    sessionDesc: "DORNSIFE - PHIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "837",
    sessionDesc: "DORNSIFE - ENST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "838",
    sessionDesc: "OVERSEAS - AUSTRIA - VIENNA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "839",
    sessionDesc: "EDUC - HONOLULU",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "840",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "841",
    sessionDesc: "DORNSIFE - ENST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "842",
    sessionDesc: "SOWK",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "843",
    sessionDesc: "DORNSIFE - BISC - CATALINA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "844",
    sessionDesc: "OVERSEAS - IRELAND - DUBLIN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "845",
    sessionDesc: "OVERSEAS - TURKEY - BOGAZICI",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "846",
    sessionDesc: "DORNSIFE - ENST",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "847",
    sessionDesc: "OVERSEAS - EAST ASIA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "848",
    sessionDesc: "DENT - Certificate Oral Pathology and Radiology",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "849",
    sessionDesc: "OVERSEAS - ENGLAND - SAINT MARY'S COLLEGE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "850",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "851",
    sessionDesc: "DORNSIFE - FREN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "852",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "853",
    sessionDesc: "DENT - (ASPID)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "854",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "855",
    sessionDesc: "OVERSEAS - UK - EDIN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "856",
    sessionDesc: "DORNSIFE - ANTH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "857",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "858",
    sessionDesc: "LAW - CONSORTIUM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "859",
    sessionDesc: "DORNSIFE - PHED",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "860",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "861",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "862",
    sessionDesc: "DENT - Orofacial Pain and Oral Medicine",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "863",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "864",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "865",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "866",
    sessionDesc: "PHAR - MPTX",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "867",
    sessionDesc: "DORNSIFE - ALI - HSC PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "868",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "869",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "870",
    sessionDesc: "DORNSIFE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "871",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "872",
    sessionDesc: "KECK - GLOBAL MEDICINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "873",
    sessionDesc: "OVERSEAS - UK - LONDON",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "874",
    sessionDesc: "OVERSEAS - EGYPT - CAIRO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "875",
    sessionDesc: "OVERSEAS - TAIWAN - CIEE YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "876",
    sessionDesc: "OVERSEAS - SCOTLAND - EDINBURGH",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "877",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "878",
    sessionDesc: "OVERSEAS - SCOTLAND -EDINBURGH",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "879",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "880",
    sessionDesc: "OVERSEAS - CANADA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "881",
    sessionDesc: "OVERSEAS - COSTA RICA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "882",
    sessionDesc: "OVERSEAS - KENYA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "883",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "884",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "885",
    sessionDesc: "KECK - PM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "886",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "887",
    sessionDesc: "OVERSEAS - GREECE - ATHENS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "888",
    sessionDesc: "OVERSEAS - AUSTRALIA - QUEENSLAND",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "889",
    sessionDesc: "OVERSEAS - HONG KONG",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "890",
    sessionDesc: "OVERSEAS - MARSHALL - SINGAPORE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "891",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "892",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "893",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "894",
    sessionDesc: "MARSHALL - BUAD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "895",
    sessionDesc: "OVERSEAS - ITALY - MILAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "896",
    sessionDesc: "OVERSEAS - NEW ZEALAND - UNIVERSITY OF OTAGO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "897",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "898",
    sessionDesc: "OVERSEAS - ITALY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "899",
    sessionDesc: "OVERSEAS - IRELAND - GALWAY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "900",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "901",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "902",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "903",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "904",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "905",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "906",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "907",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "908",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "909",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "910",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "911",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "912",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "913",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "914",
    sessionDesc: "COMM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "915",
    sessionDesc: "ARCH",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "916",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "917",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "918",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "919",
    sessionDesc: "PPD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "920",
    sessionDesc: "ENGR - ISE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "921",
    sessionDesc: "CINEMATIC - ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "922",
    sessionDesc: "CINEMATIC - ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "923",
    sessionDesc: "DORNSIFE - BISC - CATALINA ISLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "924",
    sessionDesc: "DORNSIFE - BISC - CATALINA ISLAND",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "925",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "926",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "927",
    sessionDesc: "OVERSEAS - UK - UNIVERSITY OF KENT",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "928",
    sessionDesc: "MARSHALL - BUAD - HIGH SCHOOL ACADEMY OF FINANCE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "929",
    sessionDesc: "OVERSEAS - ITALY - FLORENCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "930",
    sessionDesc: "MUSIC - LYON - FRANCE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "931",
    sessionDesc: "OVERSEAS - AUSTRALIA - BRISBANE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "932",
    sessionDesc: "EDUC - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "933",
    sessionDesc: "OVERSEAS - SPAIN - BALBOA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "934",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "935",
    sessionDesc: "OVERSEAS - CHINA - HONG KONG",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "936",
    sessionDesc: "OVERSEAS - UK - MANCHESTER",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "937",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "938",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "939",
    sessionDesc: "OVERSEAS - ITALY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "940",
    sessionDesc: "MARSHALL - OVERSEAS",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "941",
    sessionDesc: "LAW: Upper Division Session",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "942",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "943",
    sessionDesc: "MARSHALL - GSBA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "944",
    sessionDesc: "OVERSEAS - UK - LONDON SCHOOL OF ECON",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "945",
    sessionDesc: "OVERSEAS - AUSTRALIA - BRISBANE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "946",
    sessionDesc: "OVERSEAS - SPAIN - BILBAO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "947",
    sessionDesc: "CINEMATIC ARTS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "948",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "949",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "950",
    sessionDesc: "AnnenbergX (First Session)",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "951",
    sessionDesc: "OVERSEAS - ANNENBERG - LSE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "952",
    sessionDesc: "ENGR - DEN Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "953",
    sessionDesc: "KECK - MED - DSR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "954",
    sessionDesc: "INTERNATIONAL ACADEMY",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "955",
    sessionDesc: "ANNENBERG - JOUR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "956",
    sessionDesc: "DORNSIFE - PHIL",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "957",
    sessionDesc: "DENTISTRY - PT-BKN",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "958",
    sessionDesc: "OVERSEAS - THEATRE - LONDON",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "959",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "960",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "961",
    sessionDesc: "DORNSIFE - PHYS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "962",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "963",
    sessionDesc: "DENT - BKN - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "964",
    sessionDesc: "DENT - BKN - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "965",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "966",
    sessionDesc: "ENGR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "967",
    sessionDesc: "AVAILABLE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "968",
    sessionDesc: "LAW - LLM PROGRAM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "969",
    sessionDesc: "DENT - BKN-PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "970",
    sessionDesc: "OVERSEAS - UK - KING'S COLLEGE",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "971",
    sessionDesc: "ENGLAND - UNIVERSITY - LONDON SEMESTER - UK",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "972",
    sessionDesc: "EDUC - ONLINE",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "973",
    sessionDesc: "DORNSIFE - GE - MDA",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "974",
    sessionDesc: "DORNSIFE - AHIS",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "975",
    sessionDesc: "DENT - AEGD Second Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "976",
    sessionDesc: "OVERSEAS - SOUTH KOREA - YONSEI UNIVERSITY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "977",
    sessionDesc: "OVERSEAS - NEW ZEALAND - UNIVERSITY OF OTAGO",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "978",
    sessionDesc: "OVERSEAS - GERMANY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "979",
    sessionDesc: "OVERSEAS - ITALY - MILAN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "980",
    sessionDesc: "OVERSEAS - Nicaragua",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "981",
    sessionDesc: "BOVARD COLLEGE - HRM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "982",
    sessionDesc: "LAW - HONG KONG UNIVERSITY",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "983",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "984",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "985",
    sessionDesc: "DENT - BKN - PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "986",
    sessionDesc: "DENT - BKN-PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "987",
    sessionDesc: "DENT - BKN-PT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "988",
    sessionDesc: "BOVARD COLLEGE - HRM",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "989",
    sessionDesc: "DENT - Second Year OFPM & AEGD",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "990",
    sessionDesc: "DENT - Advanced Final Year",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "991",
    sessionDesc: "LAW: First Year Session",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "992",
    sessionDesc: "LAW",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "993",
    sessionDesc: "OVERSEAS - RUSSIA - ST. PETERSBURG CIEE YEAR",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "994",
    sessionDesc: "OVERSEAS - KOREA",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "995",
    sessionDesc: "OVERSEAS - SOUTH AFRICA - CAPE TOWN",
    ugUnitFeeFlag: "Y"
  },
  {
    sessionCode: "996",
    sessionDesc: "LAW: Master of Comparative Program",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "997",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "998",
    sessionDesc: "PHAR",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "999",
    sessionDesc: "DENT - OT",
    ugUnitFeeFlag: "N"
  },
  {
    sessionCode: "9999",
    sessionDesc: "TEST999",
    ugUnitFeeFlag: "N"
  }
];

const ACTIVETERMS = [
  { semCode: "", semName: "" },
  { semCode: 20182, semName: "2018 Summer" },
  { semCode: 20183, semName: "2018 Fall" },
  { semCode: 20191, semName: "2019 Spring" },
  { semCode: 20192, semName: "2019 Summer" }
];

const SESSION001DATES = {
  sessionId: "20173-001",
  lastApplyDate: null,
  preRegBeginDate: null,
  preRegEndDate: null,
  earlyRegBeginDate: null,
  earlyRegEndDate: null,
  regBeginDate: null,
  regEndDate: null,
  classBeginDate: "2017-08-21T00:00:00",
  classEndDate: "2017-12-01T00:00:00",
  lateRegBeginDate: null,
  lateRegEndDate: null,
  lastAddDropDate: "2017-09-08T00:00:00",
  healthInsuranceDueDate: null,
  withdrawWithoutWDate: null,
  withdrawWithWDate: "2017-11-10T00:00:00",
  gradePostDate: null,
  finalExamBeginDate: "2017-12-05T00:00:00",
  finalExamEndDate: "2017-12-13T00:00:00",
  stopDate: "2017-12-02T00:00:00",
  week2BeginDate: null,
  week2EndDate: null,
  week3BeginDate: null,
  week3EndDate: "2017-09-08T00:00:00",
  midTermGradingBeginDate: "2017-09-25T00:00:00",
  midTermGradingEndDate: "2017-10-27T00:00:00",
  finalGradingBeginDate: "2017-12-06T00:00:00",
  finalGradingEndDate: "2017-12-19T00:00:00",
  break1BeginDate: "2017-11-22T00:00:00",
  break1EndDate: "2017-11-26T00:00:00",
  break2BeginDate: null,
  break2EndDate: null,
  lastEnrollmentOptionDate: "2017-10-06T00:00:00"
};
