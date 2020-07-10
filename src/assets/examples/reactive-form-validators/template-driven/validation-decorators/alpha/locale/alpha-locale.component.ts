import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AddressInfo } from './address-info.model';

@Component({
    selector: 'app-alpha-locale-template-driven-validation-decorators',
    templateUrl: './alpha-locale.component.html'
})
export class AlphaLocaleTemplateDrivenValidationDecoratorsComponent implements OnInit {
    addressinfo: AddressInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.addressinfo= new AddressInfo()
    }
}
