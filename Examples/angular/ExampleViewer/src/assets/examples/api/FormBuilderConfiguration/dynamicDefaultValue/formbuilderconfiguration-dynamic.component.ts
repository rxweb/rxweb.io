import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-formbuilderconfiguration-dynamicdefault',
    templateUrl: './formbuilderconfiguration-dynamic.component.html'
})
export class FormbuilderconfigurationDynamicdefaultComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
      let user = new User();
       var formBuilderConfig = new FormBuilderConfiguration();
        formBuilderConfig.propsConfig = {'emailAddress':{defaultValue:"bharat@gmail.com"}}
         this.userFormGroup = this.formBuilder.formGroup(user,formBuilderConfig);
        
    }
  
}
