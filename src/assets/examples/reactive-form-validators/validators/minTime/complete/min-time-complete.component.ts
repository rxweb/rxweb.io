import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-complete-validator',
    templateUrl: './min-time-complete.component.html'
})
export class MinTimeCompleteValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            openingTime:['', RxwebValidators.minTime({value:'08:00' })], 
            requiredHours:['', RxwebValidators.minTime({operator:'>'  ,value:'08:30' })], 
            totalInTime:['', RxwebValidators.minTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,fieldName:'netInTime' })], 
            entryTime:['', RxwebValidators.minTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,fieldName:'openingTime' })], 
            totalOutTime:['', RxwebValidators.minTime({allowSeconds:true  ,value:'00:10:00' })], 
            exitTime:['', RxwebValidators.minTime({message:'You can enter only time format data greater than config value'  ,value:'07:00' })], 
            netInTime:['',RxwebValidators.minTime({value:'08:30', messageKey: 'minTimeMessageKey'})], 
        });
    }
}
