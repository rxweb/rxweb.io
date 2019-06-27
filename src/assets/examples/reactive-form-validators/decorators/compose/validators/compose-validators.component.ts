import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Country } from './country.model';

@Component({
    selector: 'app-compose-validators',
    templateUrl: './compose-validators.component.html'
})
export class ComposeValidatorsComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let country = new Country();
        this.userFormGroup = this.formBuilder.formGroup(country);
    }
}
