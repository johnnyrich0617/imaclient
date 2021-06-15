import {Vaccinetype} from './vaccinetype';
import {ILocation} from './location';

export interface VaccineBatchInfo {
  id: number;
  vaccine: Vaccinetype;
  ship_date: Date;
  location: ILocation;
  avail_date: Date;
  num_units: number;
  num_available: number;
  lot_num: string;
  des_dose: number;
}
