import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { LoginInfo } from './login-info.model';

@Component({
    selector: 'app-password-messageKey-template-driven-validation-decorators',
    templateUrl: './password-message-key.component.html'
})
export class PasswordMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    logininfo: LoginInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.logininfo= new LoginInfo()
    }
}
