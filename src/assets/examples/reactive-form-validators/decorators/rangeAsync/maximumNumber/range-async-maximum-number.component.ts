import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';

@Component({
    selector: 'app-rangeAsync-maximumNumber',
    templateUrl: './range-async-maximum-number.component.html'
})
export class RangeAsyncMaximumNumberComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }
}
