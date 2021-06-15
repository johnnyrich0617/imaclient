import {VaccineBatchInfo} from './vaccineBatchInfo';

export interface Appointment {
  id: number;
  vaccine: VaccineBatchInfo;
  sched_dose_num: number;
  appointment_date: Date;
  completed: boolean;
}
