import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-allOf-messageKey-validator',
  templateUrl: './all-of-message-key.component.html'
})
export class AllOfMessageKeyValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      languages: ['', RxwebValidators.allOf({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfMessageKey' })]
    });
  }

  addLanguage(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }
}
