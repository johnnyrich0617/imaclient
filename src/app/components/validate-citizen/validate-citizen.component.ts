import { Component, OnInit } from '@angular/core';
import { ImmunizationService} from '../../services/immunization.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-validate-citizen',
  templateUrl: './validate-citizen.component.html',
  styleUrls: ['./validate-citizen.component.less']
})
export class ValidateCitizenComponent implements OnInit {

  validationFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private imaService: ImmunizationService ) { }

  ngOnInit(): void { }

}
