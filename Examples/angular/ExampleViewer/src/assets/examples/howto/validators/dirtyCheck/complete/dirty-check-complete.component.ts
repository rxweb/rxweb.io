import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,RxFormGroup,FormBuilderConfiguration,FormGroupExtension } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-dirty-complete-validator',
    templateUrl: './dirty-check-complete.component.html'
})
export class DirtyCompleteValidatorComponent implements OnInit {

   editForm:RxFormGroup;

  constructor(private formBuilder:RxFormBuilder){}
  
  ngOnInit(){

   this.editForm = <RxFormGroup>this.formBuilder.group({
      id:[1],
      name: ["Bharat" ],
      designation: ["Software Engg."]
    });
  }

}
