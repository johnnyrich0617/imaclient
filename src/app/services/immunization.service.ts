import {Injectable, OnInit} from '@angular/core';
import {AppConfigService} from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationService {

  private readonly apiVersion: string;
  private readonly apiBaseUrl: string;

  constructor(private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.apiBaseUrl;
    this.apiVersion = appConfigService.apiVersion;
    console.log('ImmunizationService::The IMAServer URL is ' + this.apiBaseUrl + this.apiVersion);
  }
}
