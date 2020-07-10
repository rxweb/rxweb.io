import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { RxTranslation } from '@rxweb/translate';

declare const $;
import $ from 'jquery';

@Component({
  templateUrl: './validation-message.component.html',
})
export class PowerhouseValidationMessageComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "validation-message", "title": "Validation Message", "subLink": null }, { "id": "validation-message", "title": "Validation Message", "subLink": null }];
  outputHtml: string;

  examples: any = {
    basic: {
      ts: {
        module: `imports: [
  RxTranslateModule.forRoot({
    cacheLanguageWiseObject: true,
    forNgxTranslate: true,
    controlErrorMessage: {
      path: 'validationErrorMessages'
    }
  })
]`
      },
      json: `
{
  "validationErrorMessages": {
    "required": "This Field is Required."
  },
}`,
      typescript: `
      formGroup: FormGroup;
      ngOnInit() {
        this.formGroup = this.formBuilder.group({
            fullName: ['', Validators.required]
        })
      }`,
     html: `
<form [formGroup]="formGroup">
  <input type="text" formControlName="fullName" class="form-control translate" />
  <span class="margin-left small red" *ngIf="formGroup.controls.fullName.errors">{{formGroup.controls.fullName.errors.required.message}}</span>
</form>` 
  },
    paramater: {
      json: `{
  "validationErrorMessages": {
    "maxlength": "Maximum alloed length is {{requiredLength}} and you have entered {{actualLength}}."
  },
}`,
      typescript: `formGroup: FormGroup;
ngOnInit() {
  this.formGroup = this.formBuilder.group({
      designation: ['', Validators.maxLength(5)]
  })
}`,
      html: `<form [formGroup]="formGroup">
  <input type="text" formControlName="designation" class="form-control translate" />
  <span class="margin-left small red" *ngIf="formGroup.controls.designation.errors">{{formGroup.controls.designation.errors.maxlength.message}}</span>
</form>`
    },
    array: {
      json: `{
  "validationErrorMessages": {
    "identityRevealed": "You have entered '{{0}}', only '{{1}}' value is allowed."
  },
}`,
      typescript: `formGroup: FormGroup;
ngOnInit() {
  this.formGroup = this.formBuilder.group({
      userName: ['translate', this.identityRevealedValidator]
  })
}

identityRevealedValidator(control: FormGroup): ValidationErrors | null {
    return control.value != "admin" ? {
      'identityRevealed': { refValues: [control.value, "admin"] }
    } : null;
  };
`,
      html: `<form [formGroup]="formGroup">
  <input type="text" formControlName="userName" class="form-control translate" />
  <span class="margin-left small red" *ngIf="formGroup.controls.userName.errors">{{formGroup.controls.userName.errors.identityRevealed.message}}</span>
</form>`
    }
}

  formGroup: FormGroup;

  constructor(public translate: TranslateService, public rxTranslation: RxTranslation, private formBuilder: FormBuilder) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      designation: ['Software', Validators.maxLength(5)],
      userName: ['translate', this.identityRevealedValidator]
    })
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-validation-inner md-inner"></div></div>'
    });
  }


  identityRevealedValidator(control: FormGroup): ValidationErrors | null {
    return control.value != "admin" ? {
      'identityRevealed': { refValues: [control.value, "admin"] }
    } : null;
  };

}