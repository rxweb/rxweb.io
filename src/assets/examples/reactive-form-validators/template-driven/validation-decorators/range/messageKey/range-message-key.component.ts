import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { EmployeeInfo } from './employee-info.model';

@Component({
    selector: 'app-range-messageKey-template-driven-validation-decorators',
    templateUrl: './range-message-key.component.html'
})
export class RangeMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    employeeinfo: EmployeeInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.employeeinfo= new EmployeeInfo()
    }
}
