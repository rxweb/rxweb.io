import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LessThanAsyncCompleteValidatorComponent } from './complete/less-than-async-complete.component';
import { LessThanAsyncFieldNameValidatorComponent } from './fieldName/less-than-async-field-name.component';
import { LessThanAsyncValueValidatorComponent } from './value/less-than-async-value.component';
import { LessThanAsyncMessageValidatorComponent } from './message/less-than-async-message.component';
import { LessThanAsyncMessageKeyValidatorComponent } from './messageKey/less-than-async-message-key.component';
import { LessThanAsyncDynamicValidatorComponent } from './dynamic/less-than-async-dynamic.component';
import { LessThanAsyncAddValidatorComponent } from './add/less-than-async-add.component';

@NgModule({
  declarations: [
	LessThanAsyncCompleteValidatorComponent,
	LessThanAsyncFieldNameValidatorComponent,
	LessThanAsyncValueValidatorComponent,
	LessThanAsyncMessageValidatorComponent,
	LessThanAsyncMessageKeyValidatorComponent,
	LessThanAsyncDynamicValidatorComponent,
	LessThanAsyncAddValidatorComponent,
  ],
entryComponents: [
	LessThanAsyncCompleteValidatorComponent,
	LessThanAsyncFieldNameValidatorComponent,
	LessThanAsyncValueValidatorComponent,
	LessThanAsyncMessageValidatorComponent,
	LessThanAsyncMessageKeyValidatorComponent,
	LessThanAsyncDynamicValidatorComponent,
	LessThanAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanAsyncCompleteValidatorComponent,
	LessThanAsyncFieldNameValidatorComponent,
	LessThanAsyncValueValidatorComponent,
	LessThanAsyncMessageValidatorComponent,
	LessThanAsyncMessageKeyValidatorComponent,
	LessThanAsyncDynamicValidatorComponent,
	LessThanAsyncAddValidatorComponent,
  ],

})
export class  LessThanAsyncValidatorsExtendedModule { }
