import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumberAsync-messageKey',
    templateUrl: './max-number-async-message-key.component.html'
})
export class MaxNumberAsyncMessageKeyComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let subjectDetails = new SubjectDetails();
        this.subjectDetailsFormGroup = this.formBuilder.formGroup(subjectDetails);
    }
}
