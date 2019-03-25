import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-allOf-message-validator',
    templateUrl: './all-of-message.component.html'
})
export class AllOfMessageValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    hobbies: string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }
        
        hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            hobbies:['',RxwebValidators.allOf({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please select all hobbies"})]
        });
    }

    addHobby(element: any, index: number) {
        var indexOf = this.hobbies.indexOf(element.value);
        element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf, 1);
        this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
      }
}
