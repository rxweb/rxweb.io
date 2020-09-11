import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';

import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTimeAsync-dynamic',
    templateUrl: './min-time-async-dynamic.component.html'
})
export class MinTimeAsyncDynamicComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        let attandanceDetail = new AttandanceDetail();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/decorators/minTimeAsync/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail,formBuilderConfiguration);
        })
    }
}
