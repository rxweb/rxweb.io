import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl,AsyncValidatorFn } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-async-complete-template-driven-validation-directives',
    templateUrl: './async-complete.component.html'
})
export class AsyncCompleteTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user = new User()
    }
    countryNameUnique(control: FormControl) {
      
            const promise = new Promise((resolve, reject) => {
                if (control.value != "India")
                    resolve(null)
                else
                    resolve({ 'async':{message: 'Value should be Unique'} })
            });
            return promise;
        
    }
}
