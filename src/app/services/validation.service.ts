import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {AppConfigService} from './app-config.service';
import {IValidated} from '../models/validated';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private readonly validationURL: string;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    if ( !this.appConfig.isMock ) {
      this.validationURL = appConfig.apiBaseUrl + appConfig.apiVersion + '/validate';
    } else {
      this.validationURL = '/assets/validation.json';
    }
  }
  validateCitizen(citizenCreds: string): Observable<any> {
    if ( !this.appConfig.isMock ) {
      return this.http.get<IValidated>(this.validationURL + '/' + citizenCreds);
    } else {
      return this.http.get<IValidated>(this.validationURL);
    }
  }
}
