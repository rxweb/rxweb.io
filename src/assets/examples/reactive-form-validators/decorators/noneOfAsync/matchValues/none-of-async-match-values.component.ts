import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-noneOf-matchValues',
  templateUrl: './none-of-async-match-values.component.html'
})
export class NoneOfAsyncMatchValuesComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  projectDomains: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }
}
