import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-choice-maxLength',
    templateUrl: './choice-max-length.component.html'
})

export class ChoiceMaxLengthComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    qualifications: string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addQualification(element: any, index: number) {
        var indexOf = this.qualifications.indexOf(element.value);
        element.checked ? this.qualifications.push(element.value) : this.qualifications.splice(indexOf, 1);
        this.employeeInfoFormGroup.controls.qualifications.setValue(this.qualifications);
    }
}
