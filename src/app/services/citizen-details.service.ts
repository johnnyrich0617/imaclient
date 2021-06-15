import { Injectable } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Citizen} from '../models/citizen';

@Injectable({
  providedIn: 'root'
})
export class CitizenDetailsService {
  private detailsURL: string;

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    if ( !this.appConfig.isMock ) {
      this.detailsURL = appConfig.apiBaseUrl + appConfig.apiVersion + '/citizens/';
    } else {
      this.detailsURL = '/assets/citizen-1.json';
    }
  }

  getCitizenDetails(id: number): Observable<any> {
    if ( !this.appConfig.isMock ) {
      return this.http.get<Citizen>(this.detailsURL + id);
    } else {
      return this.http.get<Citizen>(this.detailsURL);
    }
  }
}
