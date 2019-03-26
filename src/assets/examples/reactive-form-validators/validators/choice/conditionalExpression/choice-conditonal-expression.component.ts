import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-choice-conditionalExpression-validator',
  templateUrl: './choice-conditional-expression.component.html'
})
export class ChoiceConditionalExpressionValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  qualifications: string[] = [];
  skills: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];
  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      department: [''],
      qualifications: ['', RxwebValidators.choice({ minLength: 2, conditionalExpression: (x, y) => x.department == 'DotNet' })],
      skills: ['', RxwebValidators.choice({ maxLength: 3, conditionalExpression: "x => x.department =='DotNet'" })]
    });
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
}
