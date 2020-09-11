import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Contact } from './contact.model';

@Component({
    selector: 'app-minLengthAsync-edit',
    templateUrl: './min-length-async-edit.component.html'
})
export class MinLengthAsyncEditComponent implements OnInit {
    contactFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/minLengthAsync/edit/contact-data.json?v=' + environment.appVersion).subscribe(contact => {
            this.contactFormGroup = this.formBuilder.formGroup<Contact>(Contact,contact);
        })
    }
}
