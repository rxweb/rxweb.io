import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-greaterThanEqualTo-messageKey-template-driven-validation-directives',
    templateUrl: './greater-than-equal-to-message-key.component.html'
})
export class GreaterThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
