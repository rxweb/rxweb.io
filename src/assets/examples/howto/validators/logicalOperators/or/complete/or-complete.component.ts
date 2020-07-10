import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder,RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-or-complete-validator',
    templateUrl: './or-complete.complete.html'
})
export class OrCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            email :['',RxwebValidators.or({validation:{contains:{value:'@gmail.com'},endsWith:{value:'.com'}}})]
          });
    }
}
