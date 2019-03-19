import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-bind-complete-validator',
    templateUrl: './bind-config-complete.component.html'
})
export class BindConfigCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            purchasePrice:[''], 
           resalePrice: ['', RxwebValidators.minNumber({
                 dynamicConfig: (x, y) => {
                   let minimumPrice = (x.purchasePrice * 10) / 100
                     return { value: minimumPrice };
                 }
             })] 
            
        });
    }
}
