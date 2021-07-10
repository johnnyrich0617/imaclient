import {Appointment} from './appointment';

export interface AddAppointmentEvent {
  showNewAppoint: boolean;
  newAppointmentDetails: Appointment;
}
