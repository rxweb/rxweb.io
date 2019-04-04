import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { MacAddressInfo } from './mac-address-info.model';

@Component({
    selector: 'app-mac-messageKey',
    templateUrl: './mac-message-key.component.html'
})
export class MacMessageKeyComponent implements OnInit {
    macAddressInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let macAddressInfo = new MacAddressInfo();
        this.macAddressInfoFormGroup = this.formBuilder.formGroup(macAddressInfo);
    }
}
