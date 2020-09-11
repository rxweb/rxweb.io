import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinNumberAsyncCompleteValidatorComponent } from './complete/min-number-async-complete.component';
import { MinNumberAsyncValueValidatorComponent } from './value/min-number-async-value.component';
import { MinNumberAsyncMessageValidatorComponent } from './message/min-number-async-message.component';
import { MinNumberAsyncMessageKeyValidatorComponent } from './messageKey/min-number-async-message-key.component';
import { MinNumberAsyncDynamicValidatorComponent } from './dynamic/min-number-async-dynamic.component';
import { MinNumberAsyncAddValidatorComponent } from './add/min-number-async-add.component';

@NgModule({
  declarations: [
	MinNumberAsyncCompleteValidatorComponent,
	MinNumberAsyncValueValidatorComponent,
	MinNumberAsyncMessageValidatorComponent,
	MinNumberAsyncMessageKeyValidatorComponent,
	MinNumberAsyncDynamicValidatorComponent,
	MinNumberAsyncAddValidatorComponent,
  ],
entryComponents: [
	MinNumberAsyncCompleteValidatorComponent,
	MinNumberAsyncValueValidatorComponent,
	MinNumberAsyncMessageValidatorComponent,
	MinNumberAsyncMessageKeyValidatorComponent,
	MinNumberAsyncDynamicValidatorComponent,
	MinNumberAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinNumberAsyncCompleteValidatorComponent,
	MinNumberAsyncValueValidatorComponent,
	MinNumberAsyncMessageValidatorComponent,
	MinNumberAsyncMessageKeyValidatorComponent,
	MinNumberAsyncDynamicValidatorComponent,
	MinNumberAsyncAddValidatorComponent,
  ],

})
export class  MinNumberAsyncValidatorsExtendedModule { }
