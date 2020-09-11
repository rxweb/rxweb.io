import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';

import { LoginInfo } from './login-info.model';

@Component({
    selector: 'app-passwordAsync-dynamic',
    templateUrl: './password-async-dynamic.component.html'
})
export class PasswordAsyncDynamicComponent implements OnInit {
    loginInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        let loginInfo = new LoginInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/decorators/passwordAsync/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.loginInfoFormGroup = this.formBuilder.formGroup(loginInfo,formBuilderConfiguration);
        })
    }
}
