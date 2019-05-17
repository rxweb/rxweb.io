import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,FormBuilderConfiguration,FormGroupExtension } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-dirty-modified-validator',
    templateUrl: './dirty-modified.component.html'
})
export class DirtyModifiedValidatorComponent implements OnInit {

   editForm:FormGroup;

  constructor(private formBuilder:RxFormBuilder){}
  
  ngOnInit(){

   this.editForm = this.formBuilder.group({
      id:[1],
      name: ["Bharat" ],
      designation: ["Software Engg."]
    });
  }

}
