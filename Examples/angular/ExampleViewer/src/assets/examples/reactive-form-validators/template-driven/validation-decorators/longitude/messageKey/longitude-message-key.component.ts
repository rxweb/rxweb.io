import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Country } from './country.model';

@Component({
    selector: 'app-longitude-messageKey-template-driven-validation-decorators',
    templateUrl: './longitude-message-key.component.html'
})
export class LongitudeMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    country: Country
	
    constructor(
    ) { }

    ngOnInit() {
       this.country= new Country()
    }
}
