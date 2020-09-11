import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-noneOf-messageKey',
  templateUrl: './none-of-async-message-key.component.html'
})
export class NoneOfAsyncMessageKeyComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addLanguage(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }
}
