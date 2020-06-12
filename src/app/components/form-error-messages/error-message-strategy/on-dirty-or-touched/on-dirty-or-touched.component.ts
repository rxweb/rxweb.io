import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { FormErrorMessageService, AppFormGroup } from '@rxweb/form-error-messages';

@Component({
  templateUrl: './on-dirty-or-touched.component.html',
})
export class OnDirtyOrTouchedComponent implements OnInit {

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
}