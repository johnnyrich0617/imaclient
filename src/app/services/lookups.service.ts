import { Injectable } from '@angular/core';
import {ILocation} from '../models/location';
import {AppConfigService} from './app-config.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {


  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    if ( !this.appConfig.isMock ) {

    } else {

    }
  }
}
