import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ValidateCitizenComponent } from './components/validate-citizen/validate-citizen.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { ViewLocationsComponent } from './components/view-locations/view-locations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { AdminViewAppointmentsComponent } from './components/admin-view-appointments/admin-view-appointments.component';
import { AdminViewSupplyComponent } from './components/admin-view-supply/admin-view-supply.component';
import { AppConfigService } from './services/app-config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ValidateCitizenComponent,
    AppointmentDetailsComponent,
    AddAppointmentComponent,
    ViewLocationsComponent,
    ViewAppointmentsComponent,
    AdminViewAppointmentsComponent,
    AdminViewSupplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => {
      return () => {
        // Make sure to return a promise!
        return appConfigService.loadAppConfig();
      };
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
