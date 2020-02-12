import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, NumericValueType } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-bind-return-validator',
    templateUrl: './bind-config-return.component.html'
})
export class BindConfigReturnValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            negativeNumber: ['', RxwebValidators.numeric({
                dynamicConfig: (x, y) => {
                    if (x.typeValue == 1)
                        return { acceptValue: NumericValueType.PositiveNumber }
                    else
                        return { acceptValue: NumericValueType.NegativeNumber }
                },
                allowDecimal: false,
                message: 'Positive Integer'
            })
            ]

        });
    }
}
