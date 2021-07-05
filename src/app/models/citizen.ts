import {Appointment} from './appointment';

export interface Citizen {
  id: number;
  first_name: string;
  last_name: string;
  middle_init: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  ssn: string;
  appointments: Array<Appointment>;
}

export interface CitizenMetaData {
  first_name: string;
  last_name: string;
  middle_init: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
}
