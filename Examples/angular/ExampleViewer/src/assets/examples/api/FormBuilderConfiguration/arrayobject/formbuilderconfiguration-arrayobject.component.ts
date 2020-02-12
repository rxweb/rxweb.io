import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,FormBuilderConfiguration,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User,Skill } from './user.model';

@Component({
    selector: 'app-formbuilderconfiguration-arrayobject',
    templateUrl: './formbuilderconfiguration-arrayobject.component.html'
})
export class FormbuilderconfigurationArrayobjectComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
         let skill = new Skill();
         user.skills = new Array<Skill>();
         user.skills.push(Skill);
        var formBuilderConfig = new FormBuilderConfiguration();
        formBuilderConfig.autoInstanceConfig = {
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
