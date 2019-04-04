import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-unique-messageKey-validator',
    templateUrl: './unique-message-key.component.html'
})
export class UniqueMessageKeyValidatorComponent implements OnInit {
    employeeFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeFormGroup = this.formBuilder.group({
            fullName:[''], 
            certifications:this.formBuilder.array([
              this.getCertificationFormGroup()
            ])
        });
    }

  addCertification(){
      let certificationsArray = <FormArray>this.employeeFormGroup.controls.certifications;
      certificationsArray.push(this.getCertificationFormGroup());
      }
  
  getCertificationFormGroup(){
    return this.formBuilder.group({
      certificationName: ['', RxwebValidators.unique({ messageKey:"uniqueMessageKey" })]
        })
      }

}
