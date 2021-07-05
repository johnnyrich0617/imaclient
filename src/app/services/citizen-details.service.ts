import { Injectable } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Citizen} from '../models/citizen';
import {ILocation} from '../models/location';
import {MapService} from './map.service';
import {IMapData} from '../models/mapdata';

@Injectable({
  providedIn: 'root'
})
export class CitizenDetailsService {
  private readonly detailsURL: string;
  private locLookupData: Array<ILocation>;
  private mapData: IMapData;

  constructor(private appConfig: AppConfigService,
              private http: HttpClient,
              private locService: MapService) {
    if ( !this.appConfig.isMock ) {
      this.detailsURL = appConfig.apiBaseUrl + appConfig.apiVersion + '/citizens/';
    } else {
      this.detailsURL = '/assets/citizen-1.json';
    }
  }

  /**
   * Get the details of a given citizen for a given citizen Id
   * @param id
   */
  getCitizenDetails(id: number): Observable<any> {
    if ( !this.appConfig.isMock ) {
      return this.http.get<Citizen>(this.detailsURL + id);
    } else {
      return this.http.get<Citizen>(this.detailsURL);
    }
  }

  /**
   * Called during init() method for consuming components
   * to initialize the locations lookups
   */
  setLocationLookups(): void {
    this.locService.loadMapData().subscribe( mData => {
      this.mapData = mData;
      this.locLookupData = this.mapData.mapMarkers.locations;
      });
  }

  /**
   * Get the location name for a given location Id
   * @param locId
   */
  getLocationName(locId: number): string {
    for (const value of this.locLookupData) {
      if (value.locId === locId){
        return value.locName;
      }
    }
  }

  /**
   * Get the location address for a given location Id
   * @param locId
   */
  getLocationAddr(locId): string {
    for (const value of this.locLookupData) {
      if (value.locId === locId){
        return value.locAddr;
      }
    }
  }

}
