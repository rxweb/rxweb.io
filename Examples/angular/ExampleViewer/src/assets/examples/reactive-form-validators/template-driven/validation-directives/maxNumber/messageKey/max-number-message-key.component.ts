import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumber-messageKey-template-driven-validation-directives',
    templateUrl: './max-number-message-key.component.html'
})
export class MaxNumberMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    subjectdetails: SubjectDetails
	
    constructor(
    ) { }

    ngOnInit() {
       this.subjectdetails= new SubjectDetails()
    }
}
