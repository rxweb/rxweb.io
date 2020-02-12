import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators,RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import {User} from './user.model';

@Component({
    selector: 'app-errormessage-inverted',
    templateUrl: './errormessage-inverted.component.html'
})
export class ErrormessageInvertedComponent implements OnInit {
    userFormGroup: IFormGroup<User>

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user) as IFormGroup<User>;
      
    }
}
