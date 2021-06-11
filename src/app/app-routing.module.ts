import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ValidateCitizenComponent} from './components/validate-citizen/validate-citizen.component';
import {AppointmentDetailsComponent} from './components/appointment-details/appointment-details.component';
import {AddAppointmentComponent} from './components/add-appointment/add-appointment.component';
import {ViewLocationsComponent} from './components/view-locations/view-locations.component';
import {AdminViewAppointmentsComponent} from './components/admin-view-appointments/admin-view-appointments.component';
import {AdminViewSupplyComponent} from './components/admin-view-supply/admin-view-supply.component';
import {MapResolver} from './resolvers/map-resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'validate',
    pathMatch: 'full'
  },
  {
    path: 'validate',
    component: ValidateCitizenComponent
  },
  {
    path: 'citizendetails/:id',
    component: AppointmentDetailsComponent
  },
  { path: 'appointment/add',
    component: AddAppointmentComponent
  },
  {
    path: 'locations',
    component: ViewLocationsComponent,
    resolve: { mapdata: MapResolver }
  },
  {
    path: 'admin/appointments',
    component: AdminViewAppointmentsComponent
  },
  {
    path: 'admin/supply',
    component: AdminViewSupplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
