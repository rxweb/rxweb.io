import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { DigitalInfo } from './digital-info.model';

@Component({
    selector: 'app-grid-messageKey-template-driven-validation-decorators',
    templateUrl: './grid-message-key.component.html'
})
export class GridMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    digitalinfo: DigitalInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.digitalinfo= new DigitalInfo()
    }
}
