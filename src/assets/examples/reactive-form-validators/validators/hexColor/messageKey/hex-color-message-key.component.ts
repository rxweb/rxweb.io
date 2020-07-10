import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-hexColor-messageKey-validator',
    templateUrl: './hex-color-message-key.component.html'
})
export class HexColorMessageKeyValidatorComponent implements OnInit {
    hexcolorInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.hexcolorInfoFormGroup = this.formBuilder.group({
            titleHexcolorCode:['', RxwebValidators.hexColor({messageKey:'hexColorMessageKey' })], 
        });
    }
}
