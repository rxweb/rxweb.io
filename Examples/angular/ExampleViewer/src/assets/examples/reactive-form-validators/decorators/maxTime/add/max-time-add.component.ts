import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-maxTime-add',
    templateUrl: './max-time-add.component.html'
})
export class MaxTimeAddComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let attandanceDetail = new AttandanceDetail();
        this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail);
    }
}
