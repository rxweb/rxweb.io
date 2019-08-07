import { Component, OnInit } from '@angular/core';
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-RxFormGroup-modelInstance',
    templateUrl: './rxformgroup-modelinstance.component.html'
})
export class RxformgroupModelinstanceComponent implements OnInit {
    userFormGroup: RxFormGroup
    modelInstance :{};
    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user); 
        this.modelInstance = this.userFormGroup.modelInstance;
    }

}
