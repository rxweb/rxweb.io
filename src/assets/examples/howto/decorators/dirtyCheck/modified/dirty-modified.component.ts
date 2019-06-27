import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration,FormGroupExtension, RxFormGroup } from '@rxweb/reactive-form-validators';
import {User} from './user.model'

@Component({
    selector: 'app-dirty-modified',
    templateUrl: './dirty-modified.component.html'
})
export class DirtyModifiedComponent implements OnInit {

   editForm:RxFormGroup;

  constructor(private formBuilder:RxFormBuilder){}
  
  ngOnInit(){
   let user = new User();
   this.editForm = <RxFormGroup>this.formBuilder.formGroup(user);
  }

}
