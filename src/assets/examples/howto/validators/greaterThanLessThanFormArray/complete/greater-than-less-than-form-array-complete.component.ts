import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { RxwebValidators, ReactiveFormConfig } from '@rxweb/reactive-form-validators'

@Component({
    selector: 'app-greaterThanLessThanFormArray-complete-validator',
    templateUrl: './greater-than-less-than-form-array-complete.component.html'
})
export class GreaterThanLessThanFormArrayCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder) {

    }
    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name: [],
            progressions: this.formBuilder.array([])
        })
        const add = this.userFormGroup.get('progressions') as FormArray;
        add.push(this.formBuilder.group({
            positiveArithemticExpression: ['', RxwebValidators.greaterThan({ isArrayControl: true })],

        }))
    }



    addIndex() {
        const add = this.userFormGroup.get('progressions') as FormArray;
        add.push(this.formBuilder.group({
            positiveArithemticExpression: ['', RxwebValidators.greaterThan({ isArrayControl: true })],

        }))
    }


}



