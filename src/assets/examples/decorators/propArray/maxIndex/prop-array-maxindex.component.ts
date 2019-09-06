import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User,Address } from './propArray.model';

@Component({
    selector: 'app-propArray-maxindex',
    templateUrl: './prop-array-maxindex.component.html'
})
export class PropArrayMaxindexComponent implements OnInit {

    addresses:any;
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        user.addresses = new Array<Address>();
        let address = new Address();
        user.addresses.push(address);
        this.userFormGroup = this.formBuilder.formGroup(user);
        }

    addAddress(){
      this.addresses = this.userFormGroup.controls.addresses as FormArray;
      this.addresses.push(this.formBuilder.formGroup(Address));
    }
    removeAddress(index){
      this.addresses.removeAt(index);
    }
}
