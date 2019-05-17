import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTime-allowSeconds-template-driven-validation-decorators',
    templateUrl: './min-time-allow-seconds.component.html'
})
export class MinTimeAllowSecondsTemplateDrivenValidationDecoratorsComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
