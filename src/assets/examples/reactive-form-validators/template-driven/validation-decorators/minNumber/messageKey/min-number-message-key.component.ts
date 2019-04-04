import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumber-messageKey-template-driven-validation-decorators',
    templateUrl: './min-number-message-key.component.html'
})
export class MinNumberMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    resultinfo: ResultInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.resultinfo= new ResultInfo()
    }
}
