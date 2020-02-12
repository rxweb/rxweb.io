import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-noneOf-message',
    templateUrl: './none-of-message.component.html'
})
export class NoneOfMessageComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    hobbies: string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

      hobbiesArray: string[] = ["Drawing","Singing","Dancing","Travelling","Sports"];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addHobby(element: any,index:number) {
        var indexOf = this.hobbies.indexOf(element.value);
        element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf,1);
         this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
      }
}
