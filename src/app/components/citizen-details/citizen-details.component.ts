import {AfterContentInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Citizen} from '../../models/citizen';
import {CitizenDetailsService} from '../../services/citizen-details.service';


@Component({
  selector: 'app-citizen-details',
  templateUrl: './citizen-details.component.html',
  styleUrls: ['./citizen-details.component.less']
})
export class CitizenDetailsComponent implements OnInit, AfterContentInit {

  currentCitizenId: number;
  currentCitizen: Citizen;
  showAppointmentDetails = false;

  constructor(private route: ActivatedRoute, private detailsService: CitizenDetailsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('AppointmentDetailsComponent:: The Validated Citizen id of this route is: ', params.id);
      this.currentCitizenId = params.id;
    });
    console.log('Outside of route.params subscription');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called............');
    this.detailsService.getCitizenDetails(this.currentCitizenId).subscribe(citizen => {
      console.log('The Retrieved Citizen is = ' + citizen.first_name + ', ' + citizen.last_name + ' With id = ' + citizen.id);
      this.currentCitizen = citizen;
    });
  }
  viewAppointmentDetails(): void {
    this.showAppointmentDetails = true;
  }
  closeAppointmentView(e): void {
    this.showAppointmentDetails = e.showCard;
  }
}
