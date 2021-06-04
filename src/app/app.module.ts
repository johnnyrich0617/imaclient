import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ValidateCitizenComponent } from './components/validate-citizen/validate-citizen.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { ViewLocationsComponent } from './components/view-locations/view-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateCitizenComponent,
    AppointmentDetailsComponent,
    AddAppointmentComponent,
    ViewLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
