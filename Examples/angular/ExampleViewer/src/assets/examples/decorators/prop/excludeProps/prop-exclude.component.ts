import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-prop-exclude',
    templateUrl: './prop-exclude.component.html'
})
export class PropExcludeComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
      let user = new User();
      user.type = "Personal";
      this.userFormGroup = this.formBuilder.formGroup(user);  
    }
   
}
