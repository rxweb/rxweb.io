import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-oneOf-message-validator',
    templateUrl: './one-of-async-message.component.html'
})
export class OneOfAsyncMessageValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    hobbies: string[] = [];

    constructor(
        private formBuilder: FormBuilder, private http: HttpClient) { }

    hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            hobbies: ['',[], RxwebValidators.oneOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please select atleast 1 hobby" })})]
        });
    }

    addHobby(element: any, index: number) {
        var indexOf = this.hobbies.indexOf(element.value);
        element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf, 1);
        this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
    }
}
