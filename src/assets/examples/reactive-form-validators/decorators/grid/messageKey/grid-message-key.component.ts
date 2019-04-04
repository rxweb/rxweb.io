import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { DigitalInfo } from './digital-info.model';

@Component({
    selector: 'app-grid-messageKey',
    templateUrl: './grid-message-key.component.html'
})
export class GridMessageKeyComponent implements OnInit {
    digitalInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let digitalInfo = new DigitalInfo();
        this.digitalInfoFormGroup = this.formBuilder.formGroup(digitalInfo);
    }
}
