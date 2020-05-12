import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTime-allowSeconds-template-driven-validation-directives',
    templateUrl: './min-time-allow-seconds.component.html'
})
export class MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
