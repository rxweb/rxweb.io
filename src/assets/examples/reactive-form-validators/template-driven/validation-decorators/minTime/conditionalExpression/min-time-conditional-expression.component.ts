import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTime-conditionalExpression-template-driven-validation-decorators',
    templateUrl: './min-time-conditional-expression.component.html'
})
export class MinTimeConditionalExpressionTemplateDrivenValidationDecoratorsComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
