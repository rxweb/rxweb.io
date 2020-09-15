import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-extension-isExcludeExtensions-template-driven-validation-decorators',
    templateUrl: './extension-is-exclude-extensions.component.html'
})
export class ExtensionIsExcludeExtensionsTemplateDrivenValidationDecoratorsComponent implements OnInit {
    userinfo: UserInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.userinfo= new UserInfo()
    }
}
