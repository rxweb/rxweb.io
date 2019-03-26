import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-choice-complete',
    templateUrl: './choice-complete.component.html'
})
export class ChoiceCompleteComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    qualifications: string[] = [];
    skills: string[] = [];
    hobbies: string[] = [];
    projectDomains : string[] = [];
    languages:string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    languagesArray: string[] = ["English","Chinese","Japanese","Spanish","French"];
    qualificationsArray: string[] = ["Secondary","Senior Secondary","B.Tech.","M.Tech.","B.C.A.","M.C.A."];
    skillsArray: string[] = ["MVC","AngularJS","Angular 5","C#","Web Api","SQL Server"];
    hobbiesArray: string[] = ["Drawing","Singing","Dancing","Travelling","Sports"];
    projectDomainsArray : string[] = ["ECommerce", "Banking", "Educational", "Gaming"];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addProjectDomain(element: any,index:number) {
        var indexOf = this.projectDomains.indexOf(element.value);
        element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf,1);
         this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
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
  
        addHobby(element: any,index:number) {
          var indexOf = this.hobbies.indexOf(element.value);
          element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf,1);
           this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
        }

    addLanguages(element: any, index: number) {
        var indexOf = this.languages.indexOf(element.value);
          element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf,1);
           this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
    }
}
