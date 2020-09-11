import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-extensionAsync-dynamic',
    templateUrl: './extension-async-dynamic.component.html'
})
export class ExtensionAsyncDynamicComponent implements OnInit {
    userInfoFormGroup: FormGroup
				fileTypes = [ "Picture", "Document",];

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/decorators/extensionAsync/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.userInfoFormGroup = this.formBuilder.formGroup(userInfo,formBuilderConfiguration);
        })
    }
}
