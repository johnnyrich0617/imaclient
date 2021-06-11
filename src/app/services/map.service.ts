import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {AppConfigService} from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private readonly mapUrl: string;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    if ( !this.appConfigService.isMock ) {
      this.mapUrl = appConfigService.apiBaseUrl + appConfigService.apiVersion + '/map';
    } else {
      this.mapUrl = '/assets/map.json';
    }
  }

  loadMapData(): Observable<any> {
    return this.http.get<any>( this.mapUrl );
  }
}
