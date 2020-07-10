import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-unique-complete-validator',
  templateUrl: './unique-complete.component.html'
})
export class UniqueCompleteValidatorComponent implements OnInit {
  employeeFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeFormGroup = this.formBuilder.group({
      skills: this.formBuilder.array([
        this.getSkillFormGroup()
      ]),
      hobbies: this.formBuilder.array([
        this.getHobbyFormGroup()
      ]),
     certifications: this.formBuilder.array([
        this.getCertificationFormGroup()
      ])
    });
  }

  addSkill() {
    let skillsArray = <FormArray>this.employeeFormGroup.controls.skills;
    skillsArray.push(this.getSkillFormGroup());
  }

  getSkillFormGroup() {
    return this.formBuilder.group({
      skillName: ['', RxwebValidators.unique()]
    })
  }

  addHobby() {
    let hobbiesArray = <FormArray>this.employeeFormGroup.controls.hobbies;
    hobbiesArray.push(this.getHobbyFormGroup());
  }

  getHobbyFormGroup() {
    return this.formBuilder.group({
      hobbyName: ['', RxwebValidators.unique({ message: 'You must enter a unique value' })]
    })
  }

  addCertification() {
    let certificationsArray = <FormArray>this.employeeFormGroup.controls.certifications;
    certificationsArray.push(this.getCertificationFormGroup());
  }

  getCertificationFormGroup() {
    return this.formBuilder.group({
      certificationName: ['', RxwebValidators.unique({ messageKey: "uniqueMessageKey" })]
    })
  }
}
