import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup,RxwebValidators } from '@rxweb/reactive-form-validators';
import { RxTranslation } from '@rxweb/translate';
import { UserInfo } from './user.model';


@Component({
    selector: 'app-multilingualValidationMessage-complete',
    templateUrl: './multilingual-validation-message-complete.component.html'
})
export class MultilingualValidationMessageCompleteComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private rxTranslation: RxTranslation    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }
    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }
}
