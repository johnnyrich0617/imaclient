import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertModule { }
