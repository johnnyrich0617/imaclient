import { Component, OnInit } from '@angular/core';
import { ImmunizationService} from '../../services/immunization.service';

@Component({
  selector: 'app-validate-citizen',
  templateUrl: './validate-citizen.component.html',
  styleUrls: ['./validate-citizen.component.less']
})
export class ValidateCitizenComponent implements OnInit {

  constructor(private imaService: ImmunizationService ) { }

  ngOnInit(): void { }

}
