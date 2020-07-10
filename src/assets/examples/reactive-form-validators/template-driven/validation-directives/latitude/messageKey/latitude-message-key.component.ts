import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Country } from './country.model';

@Component({
    selector: 'app-latitude-messageKey-template-driven-validation-directives',
    templateUrl: './latitude-message-key.component.html'
})
export class LatitudeMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    country: Country
	
    constructor(
    ) { }

    ngOnInit() {
       this.country= new Country()
    }
}
