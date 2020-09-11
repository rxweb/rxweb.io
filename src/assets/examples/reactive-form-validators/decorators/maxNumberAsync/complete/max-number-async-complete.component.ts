import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumberAsync-complete',
    templateUrl: './max-number-async-complete.component.html'
})
export class MaxNumberAsyncCompleteComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let subjectDetails = new SubjectDetails();
        this.subjectDetailsFormGroup = this.formBuilder.formGroup(subjectDetails);
    }
}
