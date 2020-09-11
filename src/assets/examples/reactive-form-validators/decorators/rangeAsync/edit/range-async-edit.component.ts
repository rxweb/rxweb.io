import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';

@Component({
    selector: 'app-rangeAsync-edit',
    templateUrl: './range-async-edit.component.html'
})
export class RangeAsyncEditComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/rangeAsync/edit/employee-info-data.json?v=' + environment.appVersion).subscribe(employeeInfo => {
            this.employeeInfoFormGroup = this.formBuilder.formGroup<EmployeeInfo>(EmployeeInfo,employeeInfo);
        })
    }
}
