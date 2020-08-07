import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { DigitalInfo } from './digital-info.model';

@Component({
    selector: 'app-grid-edit',
    templateUrl: './grid-edit.component.html'
})
export class GridEditComponent implements OnInit {
    digitalInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/grid/edit/digital-info-data.json?v=' + environment.appVersion).subscribe(digitalInfo => {
            this.digitalInfoFormGroup = this.formBuilder.formGroup<DigitalInfo>(DigitalInfo,digitalInfo);
        })
    }
}
