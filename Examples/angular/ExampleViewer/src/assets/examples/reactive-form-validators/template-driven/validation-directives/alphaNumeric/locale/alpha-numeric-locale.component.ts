import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Location } from './location.model';

@Component({
    selector: 'app-alphaNumeric-locale-template-driven-validation-directives',
    templateUrl: './alpha-numeric-locale.component.html'
})
export class AlphaNumericLocaleTemplateDrivenValidationDirectivesComponent implements OnInit {
    location: Location
	
    constructor(
    ) { }

    ngOnInit() {
       this.location= new Location()
    }
}
