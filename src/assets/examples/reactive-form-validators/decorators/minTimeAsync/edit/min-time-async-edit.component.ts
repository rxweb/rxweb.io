import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTimeAsync-edit',
    templateUrl: './min-time-async-edit.component.html'
})
export class MinTimeAsyncEditComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/minTimeAsync/edit/attandance-detail-data.json?v=' + environment.appVersion).subscribe(attandanceDetail => {
            this.attandanceDetailFormGroup = this.formBuilder.formGroup<AttandanceDetail>(AttandanceDetail,attandanceDetail);
        })
    }
}
