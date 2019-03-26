import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-choice-minLength-validator',
  templateUrl: './choice-min-length.component.html'
})
export class ChoiceMinLengthValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  projectDomains: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      projectDomains: ['', RxwebValidators.choice({ minLength: 3 })]

    });
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }
}
