import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration, } from '@rxweb/reactive-form-validators';
import { EmployeeInfo } from './employee-info.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-oneOf-dynamic',
  templateUrl: './one-of-dynamic.component.html'
})
export class OneOfDynamicComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  projectDomains: string[] = [];
  hobbies: string[] = [];
  skills: string[] = [];
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];
  hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    let formBuilderConfiguration = new FormBuilderConfiguration();
    this.http.get('assets/examples/reactive-form-validators/decorators/oneOf/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
      formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
      this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo, formBuilderConfiguration);
    })
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }

  addSkill(element: any, index: number) {
    var indexOf = this.skills.indexOf(element.value);
    element.checked ? this.skills.push(element.value) : this.skills.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.skills.setValue(this.skills);
  }

  addHobby(element: any, index: number) {
    var indexOf = this.hobbies.indexOf(element.value);
    element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
  }

  addLanguage(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }
}
