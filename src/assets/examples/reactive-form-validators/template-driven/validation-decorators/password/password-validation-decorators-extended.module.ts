import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PasswordCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/password-complete.component';
import { PasswordValidationTemplateDrivenValidationDecoratorsComponent } from './validation/password-validation.component';
import { PasswordMessageTemplateDrivenValidationDecoratorsComponent } from './message/password-message.component';
import { PasswordMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/password-message-key.component';
import { PasswordAddTemplateDrivenValidationDecoratorsComponent } from './add/password-add.component';

@NgModule({
  declarations: [
	PasswordCompleteTemplateDrivenValidationDecoratorsComponent,
	PasswordValidationTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PasswordAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	PasswordCompleteTemplateDrivenValidationDecoratorsComponent,
	PasswordValidationTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PasswordAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PasswordCompleteTemplateDrivenValidationDecoratorsComponent,
	PasswordValidationTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageTemplateDrivenValidationDecoratorsComponent,
	PasswordMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PasswordAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  PasswordTemplateDrivenValidationDecoratorsExtendedModule { }
