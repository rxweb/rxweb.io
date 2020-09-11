import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-noneOf-complete-validator',
  templateUrl: './none-of-async-complete.component.html'
})
export class NoneOfAsyncCompleteValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  projectDomains: string[] = [];
  qualifications: string[] = [];
  hobbies: string[] = [];
  skills: string[] = [];
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];
  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];
  hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      department: [''],
      projectDomains: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"] })})],
      qualifications: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech", "M.Tech", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet' })})],
      skills: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'" })})],
      hobbies: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please do not select any hobby" })})],
      languages: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'noneOfMessageKey' })})]
    });
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }

  addQualification(element: any, index: number) {
    var indexOf = this.qualifications.indexOf(element.value);
    element.checked ? this.qualifications.push(element.value) : this.qualifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.qualifications.setValue(this.qualifications);
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
