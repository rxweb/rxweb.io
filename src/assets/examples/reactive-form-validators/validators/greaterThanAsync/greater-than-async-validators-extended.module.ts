import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanAsyncCompleteValidatorComponent } from './complete/greater-than-async-complete.component';
import { GreaterThanAsyncFieldNameValidatorComponent } from './fieldName/greater-than-async-field-name.component';
import { GreaterThanAsyncValueValidatorComponent } from './value/greater-than-async-value.component';
import { GreaterThanAsyncMessageValidatorComponent } from './message/greater-than-async-message.component';
import { GreaterThanAsyncMessageKeyValidatorComponent } from './messageKey/greater-than-async-message-key.component';
import { GreaterThanAsyncDynamicValidatorComponent } from './dynamic/greater-than-async-dynamic.component';
import { GreaterThanAsyncAddValidatorComponent } from './add/greater-than-async-add.component';

@NgModule({
  declarations: [
	GreaterThanAsyncCompleteValidatorComponent,
	GreaterThanAsyncFieldNameValidatorComponent,
	GreaterThanAsyncValueValidatorComponent,
	GreaterThanAsyncMessageValidatorComponent,
	GreaterThanAsyncMessageKeyValidatorComponent,
	GreaterThanAsyncDynamicValidatorComponent,
	GreaterThanAsyncAddValidatorComponent,
  ],
entryComponents: [
	GreaterThanAsyncCompleteValidatorComponent,
	GreaterThanAsyncFieldNameValidatorComponent,
	GreaterThanAsyncValueValidatorComponent,
	GreaterThanAsyncMessageValidatorComponent,
	GreaterThanAsyncMessageKeyValidatorComponent,
	GreaterThanAsyncDynamicValidatorComponent,
	GreaterThanAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanAsyncCompleteValidatorComponent,
	GreaterThanAsyncFieldNameValidatorComponent,
	GreaterThanAsyncValueValidatorComponent,
	GreaterThanAsyncMessageValidatorComponent,
	GreaterThanAsyncMessageKeyValidatorComponent,
	GreaterThanAsyncDynamicValidatorComponent,
	GreaterThanAsyncAddValidatorComponent,
  ],

})
export class  GreaterThanAsyncValidatorsExtendedModule { }
