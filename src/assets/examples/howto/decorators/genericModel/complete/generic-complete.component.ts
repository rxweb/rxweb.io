import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { StudentCourse,Subjects } from './student.model';

@Component({
    selector: 'app-generic-complete',
    templateUrl: './generic-complete.component.html'
})
export class GenericCompleteComponent implements OnInit {

    studentFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let studentCourse = new StudentCourse();
        studentCourse.SubjectDetails = new Array<Subjects>();
        studentCourse.SubjectDetails.push(new Subjects);
       this.studentFormGroup = this.formBuilder.formGroup(studentCourse);
    }
    getFormArray(){
      let formarray = this.studentFormGroup.controls.SubjectDetails as FormArray;
      return formarray.controls;
    }
}
