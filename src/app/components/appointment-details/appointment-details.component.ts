import {AfterContentInit, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Appointment} from '../../models/appointment';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.less']
})
export class AppointmentDetailsComponent implements OnInit, AfterContentInit {

  @Input()
  currentCitizenId: number;

  @Input()
  currentAppointments: Array<Appointment>;

  @Input()
  citizenName: string;

  showCard: boolean;

  @Output()closeAppointmentDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    console.log('The Citizen ID for this Appointment is = ' + this.currentCitizenId);
  }

  endAppointmentDetails(): void {
    this.showCard = false;
    this.closeAppointmentDetails.emit(this.showCard);
  }

}
