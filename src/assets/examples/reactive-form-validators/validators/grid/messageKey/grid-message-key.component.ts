import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-grid-messageKey-validator',
    templateUrl: './grid-message-key.component.html'
})
export class GridMessageKeyValidatorComponent implements OnInit {
    digitalInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.digitalInfoFormGroup = this.formBuilder.group({
            videoGraphicGrid:['', RxwebValidators.grid({messageKey:'gridMessageKey' })], 
        });
    }
}
