import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { FormErrorMessageService, AppFormGroup } from '@rxweb/form-error-messages';

@Component({
  templateUrl: './on-submit.component.html',
})
export class OnSubmitComponent implements OnInit {

  examples: any = {
    basic: {
      json: `{
  "validationErrorMessages": {
    "required": "This Field is Required."
  },
}`,
      typescript: `export class UserComponent implements OnInit {

  userFormGroup: FormGroup<any>;

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required]
    }) as AppFormGroup<any>
  }

  submit() {
    this.userFormGroup.submitted = true;
  }

}`,
      html: `<form [formGroup]="userFormGroup">
  <input type="text" formControlName="fullName" />
  <span>{{userFormGroup.controls.fullName.errors.required.message}}</span>
  <button (click)="submit()">Submit</button>
</form>`
    },
    errorMessage: {
      json: `{
  "validationErrorMessages": {
    "maxlength": "Maximum alloed length is {{requiredLength}} and you have entered {{actualLength}}."
  },
}`,
      typescript: `import { FormErrorMessageService, AppFormGroup } from '@rxweb/form-error-messages';

export class OnSubmitComponent implements OnInit {

  userFormGroup: AppFormGroup<any>;

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      designation: ['', Validators.maxLength(5)]
    }) as AppFormGroup<any>
  }

  submit() {
    this.userFormGroup.submitted = true;
  }

}`,
      html: `<form [formGroup]="userFormGroup">
  <input type="text" formControlName="designation" />
  <span>{{userFormGroup.controls.designation.errorMessage}}</span>
  <button (click)="submit()">Submit</button>
</form>`
    },
    errorMessages: {
      json: `{
  "validationErrorMessages": {
    "identityRevealed": "You have entered '{{0}}', only '{{1}}' value is allowed."
  },
}`,
      typescript: `import { FormErrorMessageService, AppFormGroup } from '@rxweb/form-error-messages';

export class OnSubmitComponent implements OnInit {

  userFormGroup: AppFormGroup<any>;

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['translate', this.identityRevealedValidator]
    }) as AppFormGroup<any>
  }

  submit() {
    this.userFormGroup.submitted = true;
  }

}`,
      html: `<form [formGroup]="userFormGroup">
  <input type="text" formControlName="userName" />
  <span>{{userFormGroup.controls.userName.errorMessage}}</span>
  <button (click)="submit()">Submit</button>
</form>`
    }
  }

  userFormGroup: AppFormGroup<any>;

  constructor(public translate: TranslateService, private formBuilder: FormBuilder,
    private formErrorMessageService: FormErrorMessageService
  ) {
    this.formErrorMessageService.use(translate.onLangChange);
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['translate', this.identityRevealedValidator],
      designation: ['', Validators.maxLength(5)],
      fullName: ['', Validators.required]
    }) as AppFormGroup<any>
  }

  identityRevealedValidator(control: FormGroup): ValidationErrors | null {
    return control.value != "admin" ? {
      'identityRevealed': { refValues: [control.value, "admin"] }
    } : null;
  };

  submit() {
    this.userFormGroup.submitted = true;
  }
}