import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { JsonInfo } from './json-info.model';

@Component({
    selector: 'app-json-messageKey-template-driven-validation-directives',
    templateUrl: './json-message-key.component.html'
})
export class JsonMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    jsoninfo: JsonInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.jsoninfo= new JsonInfo()
    }
}
