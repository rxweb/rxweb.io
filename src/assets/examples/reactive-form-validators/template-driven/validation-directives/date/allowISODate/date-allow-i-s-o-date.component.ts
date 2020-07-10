import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-date-allowISODate-template-driven-validation-directives',
    templateUrl: './date-allow-i-s-o-date.component.html'
})
export class DateAllowISODateTemplateDrivenValidationDirectivesComponent implements OnInit {
    userinfo: UserInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.userinfo= new UserInfo()
    }
}
