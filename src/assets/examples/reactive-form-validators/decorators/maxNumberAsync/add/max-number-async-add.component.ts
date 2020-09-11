import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumberAsync-add',
    templateUrl: './max-number-async-add.component.html'
})
export class MaxNumberAsyncAddComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let subjectDetails = new SubjectDetails();
        this.subjectDetailsFormGroup = this.formBuilder.formGroup(subjectDetails);
    }
}
