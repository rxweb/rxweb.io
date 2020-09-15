import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-extension-isExcludeExtensions-template-driven-validation-directives',
    templateUrl: './extension-is-exclude-extensions.component.html'
})
export class ExtensionIsExcludeExtensionsTemplateDrivenValidationDirectivesComponent implements OnInit {
    userinfo: UserInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.userinfo= new UserInfo()
    }
}
