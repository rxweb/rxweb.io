import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-choice-messageKey-validator',
  templateUrl: './choice-async-message-key.component.html'
})
export class ChoiceAsyncMessageKeyValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  certifications: string[] = [];

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient) { }

  certificationsArray: string[] = ["Microsoft certified", "Google certified", "Oracle certified", "AWS certified", "Adobe certified", "VMware certified"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      certifications: ['',[], RxwebValidators.choiceAsync({validatorConfig:of({ minLength: 2, messageKey: 'choiceMessageKey' })})]
    });
  }

  addCertification(element: any) {
    var indexOf = this.certifications.indexOf(element.value);
    element.checked ? this.certifications.push(element.value) : this.certifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.certifications.setValue(this.certifications);
  }
}
