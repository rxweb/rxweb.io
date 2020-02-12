import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration,FormGroupExtension,RxFormGroup } from '@rxweb/reactive-form-validators';
import {User} from './user.model'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-commit-dynamic',
    templateUrl: './commit-dynamic.component.html'
})
export class CommitDynamicComponent implements OnInit {

    editForm: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() { 
     let user = new User();
			this.editForm = <RxFormGroup>this.formBuilder.formGroup(user);
         }


  update(){
 this.http.get('assets/dynamic.json').subscribe(dynamic => {
            this.editForm.patchModelValue(dynamic);   
         this.editForm.commit();
        })
  }

}
