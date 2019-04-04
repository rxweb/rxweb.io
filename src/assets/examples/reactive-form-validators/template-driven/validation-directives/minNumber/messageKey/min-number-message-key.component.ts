import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumber-messageKey-template-driven-validation-directives',
    templateUrl: './min-number-message-key.component.html'
})
export class MinNumberMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    resultinfo: ResultInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.resultinfo= new ResultInfo()
    }
}
