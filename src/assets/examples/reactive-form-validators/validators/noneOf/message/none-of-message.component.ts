import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-noneOf-message-validator',
    templateUrl: './none-of-message.component.html'
})
export class NoneOfMessageValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    hobbies: string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            hobbies: ['', RxwebValidators.noneOf({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please do not select any hobby" })]
        });
    }

    addHobby(element: any, index: number) {
        var indexOf = this.hobbies.indexOf(element.value);
        element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf, 1);
        this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
    }
}
