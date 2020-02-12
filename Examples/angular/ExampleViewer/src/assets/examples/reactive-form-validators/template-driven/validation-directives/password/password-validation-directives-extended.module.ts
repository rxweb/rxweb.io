import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PasswordCompleteTemplateDrivenValidationDirectivesComponent } from './complete/password-complete.component';
import { PasswordValidationTemplateDrivenValidationDirectivesComponent } from './validation/password-validation.component';
import { PasswordMessageTemplateDrivenValidationDirectivesComponent } from './message/password-message.component';
import { PasswordMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/password-message-key.component';
import { PasswordAddTemplateDrivenValidationDirectivesComponent } from './add/password-add.component';

@NgModule({
  declarations: [
	PasswordCompleteTemplateDrivenValidationDirectivesComponent,
	PasswordValidationTemplateDrivenValidationDirectivesComponent,
	PasswordMessageTemplateDrivenValidationDirectivesComponent,
	PasswordMessageKeyTemplateDrivenValidationDirectivesComponent,
	PasswordAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	PasswordCompleteTemplateDrivenValidationDirectivesComponent,
	PasswordValidationTemplateDrivenValidationDirectivesComponent,
	PasswordMessageTemplateDrivenValidationDirectivesComponent,
	PasswordMessageKeyTemplateDrivenValidationDirectivesComponent,
	PasswordAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PasswordCompleteTemplateDrivenValidationDirectivesComponent,
	PasswordValidationTemplateDrivenValidationDirectivesComponent,
	PasswordMessageTemplateDrivenValidationDirectivesComponent,
	PasswordMessageKeyTemplateDrivenValidationDirectivesComponent,
	PasswordAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  PasswordTemplateDrivenValidationDirectivesExtendedModule { }
