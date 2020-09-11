import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { WebSiteInfoModel } from './web-site-info-model.model';

@Component({
    selector: 'app-urlAsync-edit',
    templateUrl: './url-async-edit.component.html'
})
export class UrlAsyncEditComponent implements OnInit {
    webSiteInfoModelFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/urlAsync/edit/web-site-info-model-data.json?v=' + environment.appVersion).subscribe(webSiteInfoModel => {
            this.webSiteInfoModelFormGroup = this.formBuilder.formGroup<WebSiteInfoModel>(WebSiteInfoModel,webSiteInfoModel);
        })
    }
}
