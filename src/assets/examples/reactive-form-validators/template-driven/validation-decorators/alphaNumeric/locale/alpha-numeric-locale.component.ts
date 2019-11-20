import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Location } from './location.model';

@Component({
    selector: 'app-alphaNumeric-locale-template-driven-validation-decorators',
    templateUrl: './alpha-numeric-locale.component.html'
})
export class AlphaNumericLocaleTemplateDrivenValidationDecoratorsComponent implements OnInit {
    location: Location
	
    constructor(
    ) { }

    ngOnInit() {
       this.location= new Location()
    }
}
