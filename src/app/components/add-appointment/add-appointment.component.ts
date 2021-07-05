import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Appointment} from '../../models/appointment';
import {AddAppointmentEvent} from '../../models/new-appointment-event';
import {Router} from '@angular/router';
import {CitizenDetailsService} from '../../services/citizen-details.service';
import {AlertService} from '../../_alert';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.less']
})
export class AddAppointmentComponent implements OnInit {

  newAppointment: Appointment;

  @Input()
  currentCitizenId: number;
  @Output()appointmentAdded: EventEmitter<AddAppointmentEvent> = new EventEmitter<AddAppointmentEvent>();
  @Output()closeAddAppointment: EventEmitter<boolean> = new EventEmitter<boolean>();
  private citizenRoute = '/citizendetails/';

  optionsSuccess = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  optionsCancel = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  constructor(private router: Router,
              private citizenService: CitizenDetailsService,
              private alertService: AlertService) { }

  ngOnInit(): void {
  }

  saveAppointment(): void {
    const showAddAppointment = false;
    this.alertService.info('<div><h5>Success</h5></div> <div>New Immunization Appointment added</div>', this.optionsSuccess);
    this.closeAddAppointment.emit(showAddAppointment);
    // this.router.navigateByUrl(this.citizenRoute + this.currentCitizenId).then(
    //   r => { if (!r) { console.log('ERROR ROUTING..............................'); } }
    // );
  }

  cancelNewAppointment(): void {
    const showAddAppointment = false;
    this.closeAddAppointment.emit(showAddAppointment);
  }

}
