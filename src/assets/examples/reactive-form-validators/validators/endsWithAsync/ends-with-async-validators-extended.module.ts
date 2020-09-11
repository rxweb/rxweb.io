import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { EndsWithAsyncCompleteValidatorComponent } from './complete/ends-with-async-complete.component';
import { EndsWithAsyncValueValidatorComponent } from './value/ends-with-async-value.component';
import { EndsWithAsyncMessageValidatorComponent } from './message/ends-with-async-message.component';
import { EndsWithAsyncMessageKeyValidatorComponent } from './messageKey/ends-with-async-message-key.component';
import { EndsWithAsyncDynamicValidatorComponent } from './dynamic/ends-with-async-dynamic.component';
import { EndsWithAsyncAddValidatorComponent } from './add/ends-with-async-add.component';

@NgModule({
  declarations: [
	EndsWithAsyncCompleteValidatorComponent,
	EndsWithAsyncValueValidatorComponent,
	EndsWithAsyncMessageValidatorComponent,
	EndsWithAsyncMessageKeyValidatorComponent,
	EndsWithAsyncDynamicValidatorComponent,
	EndsWithAsyncAddValidatorComponent,
  ],
entryComponents: [
	EndsWithAsyncCompleteValidatorComponent,
	EndsWithAsyncValueValidatorComponent,
	EndsWithAsyncMessageValidatorComponent,
	EndsWithAsyncMessageKeyValidatorComponent,
	EndsWithAsyncDynamicValidatorComponent,
	EndsWithAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	EndsWithAsyncCompleteValidatorComponent,
	EndsWithAsyncValueValidatorComponent,
	EndsWithAsyncMessageValidatorComponent,
	EndsWithAsyncMessageKeyValidatorComponent,
	EndsWithAsyncDynamicValidatorComponent,
	EndsWithAsyncAddValidatorComponent,
  ],

})
export class  EndsWithAsyncValidatorsExtendedModule { }
