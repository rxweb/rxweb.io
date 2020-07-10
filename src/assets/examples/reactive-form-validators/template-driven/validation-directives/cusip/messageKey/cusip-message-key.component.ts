import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { CompanyInfo } from './company-info.model';

@Component({
    selector: 'app-cusip-messageKey-template-driven-validation-directives',
    templateUrl: './cusip-message-key.component.html'
})
export class CusipMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    companyinfo: CompanyInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.companyinfo= new CompanyInfo()
    }
}
