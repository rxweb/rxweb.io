import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-compare-messageKey-template-driven-validation-directives',
    templateUrl: './compare-message-key.component.html'
})
export class CompareMessageKeyTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User

    constructor() { }

    ngOnInit() {
        this.user = new User()
    }
}
