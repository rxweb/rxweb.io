import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-maxTime-dynamic-validator',
    templateUrl: './max-time-dynamic.component.html'
})
export class MaxTimeDynamicValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/maxTime/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var attandanceDetail = { entryPlace:'', closingTime:'', totalInTime:'', entryTime:'', totalOutTime:'', exitTime:'', netInTime:'',  }
			this.attandanceDetailFormGroup = this.formBuilder.group(attandanceDetail,formBuilderConfiguration);
		})
    }
}
