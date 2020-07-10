import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-conditionalControlDisable-complete',
    templateUrl: './conditional-control-disable-complete.component.html'
})
export class ConditionalControlDisableCompleteComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        user.permanentAddress = "F-16, Victoria Lake"
        this.userFormGroup = this.formBuilder.formGroup(user);
    }
}
