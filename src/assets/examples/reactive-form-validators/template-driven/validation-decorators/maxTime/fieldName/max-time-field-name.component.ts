import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-maxTime-fieldName-template-driven-validation-decorators',
    templateUrl: './max-time-field-name.component.html'
})
export class MaxTimeFieldNameTemplateDrivenValidationDecoratorsComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
