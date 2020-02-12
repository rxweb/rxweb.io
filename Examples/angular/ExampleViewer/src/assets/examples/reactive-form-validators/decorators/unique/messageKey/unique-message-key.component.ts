import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Employee, Certification } from './employee.model';

@Component({
  selector: 'app-unique-messageKey',
  templateUrl: './unique-message-key.component.html'
})
export class UniqueMessageKeyComponent implements OnInit {
  employeeFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let employee = new Employee();
    employee.certifications = new Array<Certification>();
    let certification = new Certification();
    employee.certifications.push(certification);
    this.employeeFormGroup = this.formBuilder.formGroup(employee);
  }

  addCertification() {
    let certifications = this.employeeFormGroup.controls.certifications as FormArray;
    certifications.push(this.formBuilder.formGroup(Certification));
  }

}
