import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-noneOf-nonArrayValue-validator',
    templateUrl: './none-of-async-non-array-value.component.html'
})
export class NoneOfAsyncNonArrayValueValidatorComponent implements OnInit {

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    excludedDepartments: string[] = ["HR", "Network", "Sales"];
    employeeInfoFormGroup: FormGroup
    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            department: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: this.excludedDepartments })})],
        });
    }
}