import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import {IMapData} from '../models/mapdata';
import {MapService} from '../services/map.service';

@Injectable({
  providedIn: 'root'
})

export class MapResolver implements Resolve<any> {

  constructor( private mapService: MapService ){}

  resolve(): Observable<any> {
    return this.mapService.loadMapData();
  }
}

