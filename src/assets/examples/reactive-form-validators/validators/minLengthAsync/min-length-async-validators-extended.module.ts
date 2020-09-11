import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinLengthAsyncCompleteValidatorComponent } from './complete/min-length-async-complete.component';
import { MinLengthAsyncValueValidatorComponent } from './value/min-length-async-value.component';
import { MinLengthAsyncMessageValidatorComponent } from './message/min-length-async-message.component';
import { MinLengthAsyncMessageKeyValidatorComponent } from './messageKey/min-length-async-message-key.component';
import { MinLengthAsyncDynamicValidatorComponent } from './dynamic/min-length-async-dynamic.component';
import { MinLengthAsyncAddValidatorComponent } from './add/min-length-async-add.component';

@NgModule({
  declarations: [
	MinLengthAsyncCompleteValidatorComponent,
	MinLengthAsyncValueValidatorComponent,
	MinLengthAsyncMessageValidatorComponent,
	MinLengthAsyncMessageKeyValidatorComponent,
	MinLengthAsyncDynamicValidatorComponent,
	MinLengthAsyncAddValidatorComponent,
  ],
entryComponents: [
	MinLengthAsyncCompleteValidatorComponent,
	MinLengthAsyncValueValidatorComponent,
	MinLengthAsyncMessageValidatorComponent,
	MinLengthAsyncMessageKeyValidatorComponent,
	MinLengthAsyncDynamicValidatorComponent,
	MinLengthAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinLengthAsyncCompleteValidatorComponent,
	MinLengthAsyncValueValidatorComponent,
	MinLengthAsyncMessageValidatorComponent,
	MinLengthAsyncMessageKeyValidatorComponent,
	MinLengthAsyncDynamicValidatorComponent,
	MinLengthAsyncAddValidatorComponent,
  ],

})
export class  MinLengthAsyncValidatorsExtendedModule { }
