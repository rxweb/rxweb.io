import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PasswordAsyncCompleteComponent } from './complete/password-async-complete.component';
import { PasswordAsyncValidationComponent } from './validation/password-async-validation.component';
import { PasswordAsyncMessageComponent } from './message/password-async-message.component';
import { PasswordAsyncMessageKeyComponent } from './messageKey/password-async-message-key.component';
import { PasswordAsyncDynamicComponent } from './dynamic/password-async-dynamic.component';
import { PasswordAsyncAddComponent } from './add/password-async-add.component';
import { PasswordAsyncEditComponent } from './edit/password-async-edit.component';

@NgModule({
  declarations: [
	PasswordAsyncCompleteComponent,
	PasswordAsyncValidationComponent,
	PasswordAsyncMessageComponent,
	PasswordAsyncMessageKeyComponent,
	PasswordAsyncDynamicComponent,
	PasswordAsyncAddComponent,
	PasswordAsyncEditComponent,
  ],
entryComponents: [
	PasswordAsyncCompleteComponent,
	PasswordAsyncValidationComponent,
	PasswordAsyncMessageComponent,
	PasswordAsyncMessageKeyComponent,
	PasswordAsyncDynamicComponent,
	PasswordAsyncAddComponent,
	PasswordAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PasswordAsyncCompleteComponent,
	PasswordAsyncValidationComponent,
	PasswordAsyncMessageComponent,
	PasswordAsyncMessageKeyComponent,
	PasswordAsyncDynamicComponent,
	PasswordAsyncAddComponent,
	PasswordAsyncEditComponent,
  ],

})
export class  PasswordAsyncDecoratorsExtendedModule { }
