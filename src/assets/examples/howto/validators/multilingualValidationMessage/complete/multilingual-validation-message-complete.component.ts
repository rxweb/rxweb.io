import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup,RxwebValidators } from '@rxweb/reactive-form-validators';
import { RxTranslation } from '@rxweb/translate';


@Component({
    selector: 'app-multilingualValidationMessage-complete-validator',
    templateUrl: './multilingual-validation-message-complete.component.html'
})
export class MultilingualValidationMessageCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private rxTranslation: RxTranslation    ) { }

    ngOnInit() {
      
        this.userInfoFormGroup = this.formBuilder.group({
            firstName:['',RxwebValidators.required()],
            userName:['',RxwebValidators.alpha()]
        });
    }
    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }
}
