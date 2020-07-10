import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-requiredTrue-complete-template-driven-validation-directives',
    templateUrl: './required-true-complete.component.html'
})
export class RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
