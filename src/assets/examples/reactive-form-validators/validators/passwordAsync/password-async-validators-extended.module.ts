import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PasswordAsyncCompleteValidatorComponent } from './complete/password-async-complete.component';
import { PasswordAsyncValidationValidatorComponent } from './validation/password-async-validation.component';
import { PasswordAsyncMessageValidatorComponent } from './message/password-async-message.component';
import { PasswordAsyncMessageKeyValidatorComponent } from './messageKey/password-async-message-key.component';
import { PasswordAsyncDynamicValidatorComponent } from './dynamic/password-async-dynamic.component';
import { PasswordAsyncAddValidatorComponent } from './add/password-async-add.component';

@NgModule({
  declarations: [
	PasswordAsyncCompleteValidatorComponent,
	PasswordAsyncValidationValidatorComponent,
	PasswordAsyncMessageValidatorComponent,
	PasswordAsyncMessageKeyValidatorComponent,
	PasswordAsyncDynamicValidatorComponent,
	PasswordAsyncAddValidatorComponent,
  ],
entryComponents: [
	PasswordAsyncCompleteValidatorComponent,
	PasswordAsyncValidationValidatorComponent,
	PasswordAsyncMessageValidatorComponent,
	PasswordAsyncMessageKeyValidatorComponent,
	PasswordAsyncDynamicValidatorComponent,
	PasswordAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PasswordAsyncCompleteValidatorComponent,
	PasswordAsyncValidationValidatorComponent,
	PasswordAsyncMessageValidatorComponent,
	PasswordAsyncMessageKeyValidatorComponent,
	PasswordAsyncDynamicValidatorComponent,
	PasswordAsyncAddValidatorComponent,
  ],

})
export class  PasswordAsyncValidatorsExtendedModule { }
