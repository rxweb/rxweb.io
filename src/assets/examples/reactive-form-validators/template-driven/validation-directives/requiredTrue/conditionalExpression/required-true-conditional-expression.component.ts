import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-requiredTrue-conditionalExpression-template-driven-validation-directives',
    templateUrl: './required-true-conditional-expression.component.html'
})
export class RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
