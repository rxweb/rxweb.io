import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTime-messageKey-template-driven-validation-directives',
    templateUrl: './min-time-message-key.component.html'
})
export class MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    attandancedetail: AttandanceDetail
	
    constructor(
    ) { }

    ngOnInit() {
       this.attandancedetail= new AttandanceDetail()
    }
}
