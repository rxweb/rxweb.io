import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { MacAddressInfo } from './mac-address-info.model';

@Component({
    selector: 'app-mac-messageKey-template-driven-validation-decorators',
    templateUrl: './mac-message-key.component.html'
})
export class MacMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    macaddressinfo: MacAddressInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.macaddressinfo= new MacAddressInfo()
    }
}
