import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { UrlAsyncCompleteValidatorComponent } from './complete/url-async-complete.component';
import { UrlAsyncMessageValidatorComponent } from './message/url-async-message.component';
import { UrlAsyncUrlValidationTypeValidatorComponent } from './urlValidationType/url-async-url-validation-type.component';
import { UrlAsyncMessageKeyValidatorComponent } from './messageKey/url-async-message-key.component';
import { UrlAsyncDynamicValidatorComponent } from './dynamic/url-async-dynamic.component';
import { UrlAsyncAddValidatorComponent } from './add/url-async-add.component';

@NgModule({
  declarations: [
	UrlAsyncCompleteValidatorComponent,
	UrlAsyncMessageValidatorComponent,
	UrlAsyncUrlValidationTypeValidatorComponent,
	UrlAsyncMessageKeyValidatorComponent,
	UrlAsyncDynamicValidatorComponent,
	UrlAsyncAddValidatorComponent,
  ],
entryComponents: [
	UrlAsyncCompleteValidatorComponent,
	UrlAsyncMessageValidatorComponent,
	UrlAsyncUrlValidationTypeValidatorComponent,
	UrlAsyncMessageKeyValidatorComponent,
	UrlAsyncDynamicValidatorComponent,
	UrlAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UrlAsyncCompleteValidatorComponent,
	UrlAsyncMessageValidatorComponent,
	UrlAsyncUrlValidationTypeValidatorComponent,
	UrlAsyncMessageKeyValidatorComponent,
	UrlAsyncDynamicValidatorComponent,
	UrlAsyncAddValidatorComponent,
  ],

})
export class  UrlAsyncValidatorsExtendedModule { }
