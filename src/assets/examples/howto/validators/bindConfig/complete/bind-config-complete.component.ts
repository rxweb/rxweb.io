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
                const minimumPrice = (x.purchasePrice * 1) + (x.purchasePrice * 30 / 100);
                  return { value: minimumPrice, message: `Resale price must be at least 30% more than Purchase price. Minimum resale price should be ${minimumPrice}` };
              }
             })] 
            
        });
    }
}
