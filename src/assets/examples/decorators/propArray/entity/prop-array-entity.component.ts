import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms";
import { RxFormBuilder, ResetFormType } from '@rxweb/reactive-form-validators';
import { User, Address, Telephone } from './propArray.model';

@Component({
    selector: 'app-propArray-entity',
    templateUrl: './prop-array-entity.component.html'
})
export class PropArrayEntityComponent implements OnInit {
    contactType: string = "Address";
    userFormGroup: FormGroup;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit() {
        let user = new User();
        user.contactType = "Address";
        user.contacts = new Array<Address>();
        user.contacts = new Array<Telephone>();
        this.userFormGroup = this.formBuilder.formGroup(user);

    }
    addAddress() {
        let addresses = this.userFormGroup.controls.contacts as FormArray;
        addresses.push(this.formBuilder.formGroup(Address));
    }
    addTelephone() {

        let telephones = this.userFormGroup.controls.contacts as FormArray;
        telephones.push(this.formBuilder.formGroup(Telephone));
    }
    changeValue(value: string) {

        this.userFormGroup.reset();
        let user = new User();
        this.userFormGroup.controls.contactType.setValue(value);
        user.contactType = value;
        this.contactType = value;

        if (this.userFormGroup.controls.contactType.value == "Address") {
            user.contacts = new Array<Address>();
            let address = new Address();
            user.contacts.push(address);
            this.userFormGroup = this.formBuilder.formGroup(user);
        }
        else {
            user.contacts = new Array<Telephone>();
            let contact = new Telephone();
            user.contacts.push(contact);
            this.userFormGroup = this.formBuilder.formGroup(user);
        }
    }
}
