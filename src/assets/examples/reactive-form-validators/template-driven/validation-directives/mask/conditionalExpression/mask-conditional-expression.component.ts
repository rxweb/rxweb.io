import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-mask-conditionalExpression-template-driven-validation-directives',
    templateUrl: './mask-conditional-expression.component.html'
})
export class MaskConditionalExpressionTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
