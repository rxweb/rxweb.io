import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-ascii-messageKey-validator',
    templateUrl: './ascii-message-key.component.html'
})
export class AsciiMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            digitalCode:['', RxwebValidators.ascii({messageKey:'asciiMessageKey' })], 
        });
    }
}
