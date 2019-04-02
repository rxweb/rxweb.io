import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,FormBuilderConfiguration,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User,Skill,Address } from './user.model';

@Component({
    selector: 'app-formbuilderconfiguration-complete',
    templateUrl: './formbuilderconfiguration-complete.component.html'
})
export class FormbuilderconfigurationCompleteComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
         let skill = new Skill();
         user.address = new Address();
         user.skills = new Array<Skill>();
         user.skills.push(skill);
        var formBuilderConfig = new FormBuilderConfiguration();
        formBuilderConfig.autoInstanceConfig = {
                        objectPropInstanceConfig: [{
                            propertyName: 'state',                            
                        }],
                        arrayPropInstanceConfig: [{
                            propertyName: 'skills',
                            rowItems: 2
                        }]
                    }
       this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user,formBuilderConfig);
     
    }
     getFormArray(){
      let formarray = this.userInfoFormGroup.controls.skills as FormArray;
      return formarray.controls;
    }
}
