import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-alphaAsync-dynamic-validator',
    templateUrl: './alpha-async-dynamic.component.html'
})
export class AlphaAsyncDynamicValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/alphaAsync/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var addressInfo = { countryName:'', countryCode:'', cityName:'', spanishcityName:'', stateName:'', stateCode:'', cityCode:'',  }
			this.addressInfoFormGroup = this.formBuilder.group(addressInfo,formBuilderConfiguration);
		})
    }
}
