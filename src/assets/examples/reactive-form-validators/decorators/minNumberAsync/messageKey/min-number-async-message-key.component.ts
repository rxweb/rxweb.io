import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumberAsync-messageKey',
    templateUrl: './min-number-async-message-key.component.html'
})
export class MinNumberAsyncMessageKeyComponent implements OnInit {
    resultInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let resultInfo = new ResultInfo();
        this.resultInfoFormGroup = this.formBuilder.formGroup(resultInfo);
    }
}
