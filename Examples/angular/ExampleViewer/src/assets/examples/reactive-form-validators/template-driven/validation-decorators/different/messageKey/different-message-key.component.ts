import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AccountInfo } from './account-info.model';

@Component({
    selector: 'app-different-messageKey-template-driven-validation-decorators',
    templateUrl: './different-message-key.component.html'
})
export class DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    accountinfo: AccountInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.accountinfo= new AccountInfo()
    }
}
