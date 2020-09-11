import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxLengthAsyncCompleteValidatorComponent } from './complete/max-length-async-complete.component';
import { MaxLengthAsyncValueValidatorComponent } from './value/max-length-async-value.component';
import { MaxLengthAsyncMessageValidatorComponent } from './message/max-length-async-message.component';
import { MaxLengthAsyncMessageKeyValidatorComponent } from './messageKey/max-length-async-message-key.component';
import { MaxLengthAsyncDynamicValidatorComponent } from './dynamic/max-length-async-dynamic.component';
import { MaxLengthAsyncAddValidatorComponent } from './add/max-length-async-add.component';

@NgModule({
  declarations: [
	MaxLengthAsyncCompleteValidatorComponent,
	MaxLengthAsyncValueValidatorComponent,
	MaxLengthAsyncMessageValidatorComponent,
	MaxLengthAsyncMessageKeyValidatorComponent,
	MaxLengthAsyncDynamicValidatorComponent,
	MaxLengthAsyncAddValidatorComponent,
  ],
entryComponents: [
	MaxLengthAsyncCompleteValidatorComponent,
	MaxLengthAsyncValueValidatorComponent,
	MaxLengthAsyncMessageValidatorComponent,
	MaxLengthAsyncMessageKeyValidatorComponent,
	MaxLengthAsyncDynamicValidatorComponent,
	MaxLengthAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxLengthAsyncCompleteValidatorComponent,
	MaxLengthAsyncValueValidatorComponent,
	MaxLengthAsyncMessageValidatorComponent,
	MaxLengthAsyncMessageKeyValidatorComponent,
	MaxLengthAsyncDynamicValidatorComponent,
	MaxLengthAsyncAddValidatorComponent,
  ],

})
export class  MaxLengthAsyncValidatorsExtendedModule { }
