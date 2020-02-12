import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration } from '@rxweb/reactive-form-validators';

import { StudentCourse,Subjects,Course } from './student.model';

@Component({
    selector: 'app-formbuilderconfiguration-genericentities',
    templateUrl: './formbuilderconfiguration-genericentities.component.html'
})
export class FormbuilderconfigurationGenericEntitiesComponent implements OnInit {

    studentFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
      let studentCourse = new StudentCourse();
        studentCourse.SubjectDetails = new Array<Subjects>();
        studentCourse.SubjectDetails.push(new Subjects);
       var formBuilderConfig = new FormBuilderConfiguration();
       formBuilderConfig.genericEntities ={ 'SubjectDetails': Subjects}        
       this.studentFormGroup = this.formBuilder.formGroup(studentCourse,formBuilderConfig);
    }

    getFormArray(){
      let formarray = this.studentFormGroup.controls.SubjectDetails as FormArray;
      return formarray.controls;
    }
}
