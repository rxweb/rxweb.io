import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { NumberInfo } from './number-info.model';

@Component({
    selector: 'app-primeNumber-messageKey-template-driven-validation-decorators',
    templateUrl: './prime-number-message-key.component.html'
})
export class PrimeNumberMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    numberinfo: NumberInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.numberinfo= new NumberInfo()
    }
}
