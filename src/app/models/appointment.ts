import {VaccineBatchInfo} from './vaccineBatchInfo';

export interface Appointment {
  id: number;
  vac_data: VaccineBatchInfo;
  sched_dose_num: number;
  appointment_date: Date;
  completed: boolean;
}

export interface AppointmentMetaData {
  apptId: number;
  vaccineName: string;
  locName: string;
  locAddr: string;
  doseNumber: number;
  apptDate: Date;
  isComplete: boolean;
}
