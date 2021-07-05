import {AfterContentInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Citizen, CitizenMetaData} from '../../models/citizen';
import {CitizenDetailsService} from '../../services/citizen-details.service';
import {Appointment, AppointmentMetaData} from '../../models/appointment';


@Component({
  selector: 'app-citizen-details',
  templateUrl: './citizen-details.component.html',
  styleUrls: ['./citizen-details.component.less']
})
export class CitizenDetailsComponent implements OnInit, AfterContentInit {

  currentCitizenId: number;
  currentCitizen: Citizen;
  showAppointmentDetails: boolean;
  addAppointment: boolean;
  appointments: Array<Appointment>;
  appointmentsMd: Array<AppointmentMetaData>;
  citizenMd: CitizenMetaData;

  constructor(private route: ActivatedRoute, private detailsService: CitizenDetailsService) {
  }

  /**
   * Get the citizen Id from the route for this citizen
   */
  ngOnInit(): void {
    this.showAppointmentDetails = false;
    this.addAppointment = false;
    this.route.params.subscribe(params => {
      console.log('AppointmentDetailsComponent:: The Validated Citizen id of this route is: ', params.id);
      this.currentCitizenId = params.id;
    });
    console.log('Outside of route.params subscription');
  }

  /**
   * Initialize the display content and setup the component
   */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called............');
    this.detailsService.getCitizenDetails(this.currentCitizenId).subscribe(citizen => {
      console.log('The Retrieved Citizen is = ' + citizen.first_name + ', ' + citizen.last_name + ' With id = ' + citizen.id);
      this.currentCitizen = citizen;
    });
    this.appointments = this.currentCitizen.appointments;
    this.extractCitizenMetadata();
    this.extractAppointmentMetadata();
  }
  viewAppointmentDetails(): void {
    this.showAppointmentDetails = true;
  }
  closeAppointmentView(e): void {
    this.showAppointmentDetails = e.showCard;
  }
  closeAddAppointment(e): void {
    this.addAppointment = e.showNewAppoint;
  }

  newAppointmentAdded(e): void {
  }

  addNewAppointment(): void {
    this.addAppointment = true;
  }

  /**
   * Extract the appointment metadata for this citizen
   * @private
   */
  private extractAppointmentMetadata(): void {
    for (const appt of this.appointments) {
      const apptrow: AppointmentMetaData = {
        apptId: appt.id, vaccineName: appt.vaccine.vaccine.cn,
        doseNumber: appt.sched_dose_num, apptDate: appt.appointment_date,
        locName: appt.vaccine.location.locName, locAddr: appt.vaccine.location.locAddr,
        isComplete: appt.completed
      };
      this.appointmentsMd.push( apptrow );
    }
  }

  /**
   * Extract the metadata for display
   * @private
   */
  private extractCitizenMetadata(): void {
    this.citizenMd = {
      first_name: this.currentCitizen.first_name,
      last_name: this.currentCitizen.last_name,
      middle_init: this.currentCitizen.middle_init,
      address_1: this.currentCitizen.address_1,
      address_2: this.currentCitizen.address_2,
      city: this.currentCitizen.city,
      state: this.currentCitizen.state
    };
  }
}
