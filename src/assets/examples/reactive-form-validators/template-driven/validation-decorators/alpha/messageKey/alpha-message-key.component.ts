import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AddressInfo } from './address-info.model';

@Component({
    selector: 'app-alpha-messageKey-template-driven-validation-decorators',
    templateUrl: './alpha-message-key.component.html'
})
export class AlphaMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    addressinfo: AddressInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.addressinfo= new AddressInfo()
    }
}
