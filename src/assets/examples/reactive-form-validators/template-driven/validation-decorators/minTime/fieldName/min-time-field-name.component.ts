import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTime-fieldName-template-driven-validation-decorators',
    templateUrl: './min-time-field-name.component.html'
})
export class MinTimeFieldNameTemplateDrivenValidationDecoratorsComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
