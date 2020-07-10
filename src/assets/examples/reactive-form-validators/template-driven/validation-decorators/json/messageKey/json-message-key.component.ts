import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { JsonInfo } from './json-info.model';

@Component({
    selector: 'app-json-messageKey-template-driven-validation-decorators',
    templateUrl: './json-message-key.component.html'
})
export class JsonMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    jsoninfo: JsonInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.jsoninfo= new JsonInfo()
    }
}
