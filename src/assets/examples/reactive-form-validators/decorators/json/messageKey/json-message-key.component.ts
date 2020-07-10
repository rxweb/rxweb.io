import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { JsonInfo } from './json-info.model';

@Component({
    selector: 'app-json-messageKey',
    templateUrl: './json-message-key.component.html'
})
export class JsonMessageKeyComponent implements OnInit {
    jsonInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let jsonInfo = new JsonInfo();
        this.jsonInfoFormGroup = this.formBuilder.formGroup(jsonInfo);
    }
}
