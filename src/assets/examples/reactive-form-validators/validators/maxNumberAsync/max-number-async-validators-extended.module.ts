import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxNumberAsyncCompleteValidatorComponent } from './complete/max-number-async-complete.component';
import { MaxNumberAsyncValueValidatorComponent } from './value/max-number-async-value.component';
import { MaxNumberAsyncMessageValidatorComponent } from './message/max-number-async-message.component';
import { MaxNumberAsyncMessageKeyValidatorComponent } from './messageKey/max-number-async-message-key.component';
import { MaxNumberAsyncDynamicValidatorComponent } from './dynamic/max-number-async-dynamic.component';
import { MaxNumberAsyncAddValidatorComponent } from './add/max-number-async-add.component';

@NgModule({
  declarations: [
	MaxNumberAsyncCompleteValidatorComponent,
	MaxNumberAsyncValueValidatorComponent,
	MaxNumberAsyncMessageValidatorComponent,
	MaxNumberAsyncMessageKeyValidatorComponent,
	MaxNumberAsyncDynamicValidatorComponent,
	MaxNumberAsyncAddValidatorComponent,
  ],
entryComponents: [
	MaxNumberAsyncCompleteValidatorComponent,
	MaxNumberAsyncValueValidatorComponent,
	MaxNumberAsyncMessageValidatorComponent,
	MaxNumberAsyncMessageKeyValidatorComponent,
	MaxNumberAsyncDynamicValidatorComponent,
	MaxNumberAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxNumberAsyncCompleteValidatorComponent,
	MaxNumberAsyncValueValidatorComponent,
	MaxNumberAsyncMessageValidatorComponent,
	MaxNumberAsyncMessageKeyValidatorComponent,
	MaxNumberAsyncDynamicValidatorComponent,
	MaxNumberAsyncAddValidatorComponent,
  ],

})
export class  MaxNumberAsyncValidatorsExtendedModule { }
