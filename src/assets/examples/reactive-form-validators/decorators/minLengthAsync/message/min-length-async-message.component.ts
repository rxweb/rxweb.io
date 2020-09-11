import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Contact } from './contact.model';

@Component({
    selector: 'app-minLengthAsync-message',
    templateUrl: './min-length-async-message.component.html'
})
export class MinLengthAsyncMessageComponent implements OnInit {
    contactFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let contact = new Contact();
        this.contactFormGroup = this.formBuilder.formGroup(contact);
    }
}
