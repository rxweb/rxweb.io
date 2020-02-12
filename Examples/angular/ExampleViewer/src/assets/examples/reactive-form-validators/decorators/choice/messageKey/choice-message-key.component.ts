import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeInfo } from './employee-info.model';

@Component({
  selector: 'app-choice-messageKey',
  templateUrl: './choice-message-key.component.html'
})
export class ChoiceMessageKeyComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  certifications: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  certificationsArray: string[] = ["Microsoft certified", "Google certified", "Oracle certified", "AWS certified", "Adobe certified", "VMware certified"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addCertification(element: any) {
    var indexOf = this.certifications.indexOf(element.value);
    element.checked ? this.certifications.push(element.value) : this.certifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.certifications.setValue(this.certifications);
  }
}
