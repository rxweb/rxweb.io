import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumberAsync-edit',
    templateUrl: './min-number-async-edit.component.html'
})
export class MinNumberAsyncEditComponent implements OnInit {
    resultInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/minNumberAsync/edit/result-info-data.json?v=' + environment.appVersion).subscribe(resultInfo => {
            this.resultInfoFormGroup = this.formBuilder.formGroup<ResultInfo>(ResultInfo,resultInfo);
        })
    }
}
