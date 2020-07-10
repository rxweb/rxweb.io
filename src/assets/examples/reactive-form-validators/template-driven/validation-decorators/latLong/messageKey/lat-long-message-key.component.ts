import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Country } from './country.model';

@Component({
    selector: 'app-latLong-messageKey-template-driven-validation-decorators',
    templateUrl: './lat-long-message-key.component.html'
})
export class LatLongMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    country: Country
	
    constructor(
    ) { }

    ngOnInit() {
       this.country= new Country()
    }
}
