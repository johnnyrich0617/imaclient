import { Component, OnInit } from '@angular/core';
import { ImmunizationService} from '../../services/immunization.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidationService} from '../../services/validation.service';
import {AppConfigService} from '../../services/app-config.service';

@Component({
  selector: 'app-validate-citizen',
  templateUrl: './validate-citizen.component.html',
  styleUrls: ['./validate-citizen.component.less']
})
export class ValidateCitizenComponent implements OnInit {

  resetCreds = '';
  citizenRoute = '/citizendetails/';

  constructor( private validateService: ValidationService,
               private router: Router ) {

  }

  ngOnInit(): void { }

  validateuser(usercreds: string): void {
    console.log('The USer Creds are  = ' + usercreds);
    this.validateService.validateCitizen(usercreds).subscribe( validated => {
      console.log('The Validated Citizen ID = ' + validated.validatedCitizen);
      this.router.navigateByUrl(this.citizenRoute + validated.validatedCitizen).then(
        r => { if (!r) { console.log('ERROR ROUTING..............................'); } }
      );
      this.resetCreds = '';
    });
  }

}
