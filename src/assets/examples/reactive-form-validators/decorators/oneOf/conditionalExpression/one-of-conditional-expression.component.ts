import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-oneOf-conditionalExpression',
    templateUrl: './one-of-conditional-expression.component.html'
})
export class OneOfConditionalExpressionComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    skills: string[] = [];
    qualifications: string[] = [];

    constructor(
      private formBuilder: RxFormBuilder, private http: HttpClient) { }

      qualificationsArray: string[] = ["Secondary","Senior Secondary","B.Tech.","M.Tech.","B.C.A.","M.C.A."];
      skillsArray: string[] = ["MVC","AngularJS","Angular 5","C#","Web Api","SQL Server"];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addQualification(element: any,index:number) {
      var indexOf = this.qualifications.indexOf(element.value);
      element.checked ? this.qualifications.push(element.value) : this.qualifications.splice(indexOf,1);
       this.employeeInfoFormGroup.controls.qualifications.setValue(this.qualifications);
    }

    addSkill(element: any,index:number) {
      var indexOf = this.skills.indexOf(element.value);
      element.checked ? this.skills.push(element.value) : this.skills.splice(indexOf,1);
       this.employeeInfoFormGroup.controls.skills.setValue(this.skills);
    }
}
