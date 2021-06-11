import {IMapPoint} from './mappoint';
import {IMapPins} from './mappins';

export interface IMapData{
  center: IMapPoint;
  mapMarkers: IMapPins;
}
