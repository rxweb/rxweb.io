import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { CompanyInfo } from './company-info.model';

@Component({
    selector: 'app-cusip-messageKey',
    templateUrl: './cusip-message-key.component.html'
})
export class CusipMessageKeyComponent implements OnInit {
    companyInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let companyInfo = new CompanyInfo();
        this.companyInfoFormGroup = this.formBuilder.formGroup(companyInfo);
    }
}
