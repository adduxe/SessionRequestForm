import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SessionRequestService } from '../shared/services/sessionrequest.service';
import { SessionRequest } from '../shared/models/sessionrequest';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public sessionRequest: SessionRequest;

  constructor(http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private location: Location,
    private sessionRequestService: SessionRequestService) {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
    this.sessionRequestService.currentSessionRequest.subscribe(sr => this.sessionRequest = sr);
    console.log(this.sessionRequest);
  }

  goBack() {
    this.location.back();
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
