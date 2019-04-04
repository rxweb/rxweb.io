import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { LoginInfo } from './login-info.model';

@Component({
    selector: 'app-password-messageKey-template-driven-validation-directives',
    templateUrl: './password-message-key.component.html'
})
export class PasswordMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    logininfo: LoginInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.logininfo= new LoginInfo()
    }
}
