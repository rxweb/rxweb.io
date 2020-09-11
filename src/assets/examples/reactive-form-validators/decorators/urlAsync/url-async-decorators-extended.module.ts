import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { UrlAsyncCompleteComponent } from './complete/url-async-complete.component';
import { UrlAsyncMessageComponent } from './message/url-async-message.component';
import { UrlAsyncUrlValidationTypeComponent } from './urlValidationType/url-async-url-validation-type.component';
import { UrlAsyncMessageKeyComponent } from './messageKey/url-async-message-key.component';
import { UrlAsyncDynamicComponent } from './dynamic/url-async-dynamic.component';
import { UrlAsyncAddComponent } from './add/url-async-add.component';
import { UrlAsyncEditComponent } from './edit/url-async-edit.component';

@NgModule({
  declarations: [
	UrlAsyncCompleteComponent,
	UrlAsyncMessageComponent,
	UrlAsyncUrlValidationTypeComponent,
	UrlAsyncMessageKeyComponent,
	UrlAsyncDynamicComponent,
	UrlAsyncAddComponent,
	UrlAsyncEditComponent,
  ],
entryComponents: [
	UrlAsyncCompleteComponent,
	UrlAsyncMessageComponent,
	UrlAsyncUrlValidationTypeComponent,
	UrlAsyncMessageKeyComponent,
	UrlAsyncDynamicComponent,
	UrlAsyncAddComponent,
	UrlAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UrlAsyncCompleteComponent,
	UrlAsyncMessageComponent,
	UrlAsyncUrlValidationTypeComponent,
	UrlAsyncMessageKeyComponent,
	UrlAsyncDynamicComponent,
	UrlAsyncAddComponent,
	UrlAsyncEditComponent,
  ],

})
export class  UrlAsyncDecoratorsExtendedModule { }
