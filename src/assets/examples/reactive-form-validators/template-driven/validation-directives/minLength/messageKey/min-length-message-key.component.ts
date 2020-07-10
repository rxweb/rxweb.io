import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Contact } from './contact.model';

@Component({
    selector: 'app-minLength-messageKey-template-driven-validation-directives',
    templateUrl: './min-length-message-key.component.html'
})
export class MinLengthMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    contact: Contact
	
    constructor(
    ) { }

    ngOnInit() {
       this.contact= new Contact()
    }
}
