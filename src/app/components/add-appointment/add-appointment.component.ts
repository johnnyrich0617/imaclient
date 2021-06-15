import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/appointment';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.less']
})
export class AddAppointmentComponent implements OnInit {

  newAppointment: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

  saveAppointment(): void {

  }

  cancelNewAppointment(): void {

  }

}
