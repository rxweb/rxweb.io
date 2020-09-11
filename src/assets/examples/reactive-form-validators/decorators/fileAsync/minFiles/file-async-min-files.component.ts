import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-fileAsync-minFiles',
    templateUrl: './file-async-min-files.component.html'
})
export class FileAsyncMinFilesComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }
}
