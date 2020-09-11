import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-minLengthAsync-dynamic-validator',
    templateUrl: './min-length-async-dynamic.component.html'
})
export class MinLengthAsyncDynamicValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/minLengthAsync/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var contact = { countryName:'', mobileNo:'', landLineNo:'', stateName:'',  }
			this.contactFormGroup = this.formBuilder.group(contact,formBuilderConfiguration);
		})
    }
}
