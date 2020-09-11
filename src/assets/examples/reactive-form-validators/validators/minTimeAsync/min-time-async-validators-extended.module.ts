import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinTimeAsyncCompleteValidatorComponent } from './complete/min-time-async-complete.component';
import { MinTimeAsyncValueValidatorComponent } from './value/min-time-async-value.component';
import { MinTimeAsyncOperatorValidatorComponent } from './operator/min-time-async-operator.component';
import { MinTimeAsyncAllowSecondsValidatorComponent } from './allowSeconds/min-time-async-allow-seconds.component';
import { MinTimeAsyncMessageValidatorComponent } from './message/min-time-async-message.component';
import { MinTimeAsyncMessageKeyValidatorComponent } from './messageKey/min-time-async-message-key.component';
import { MinTimeAsyncDynamicValidatorComponent } from './dynamic/min-time-async-dynamic.component';
import { MinTimeAsyncAddValidatorComponent } from './add/min-time-async-add.component';

@NgModule({
  declarations: [
	MinTimeAsyncCompleteValidatorComponent,
	MinTimeAsyncValueValidatorComponent,
	MinTimeAsyncOperatorValidatorComponent,
	MinTimeAsyncAllowSecondsValidatorComponent,
	MinTimeAsyncMessageValidatorComponent,
	MinTimeAsyncMessageKeyValidatorComponent,
	MinTimeAsyncDynamicValidatorComponent,
	MinTimeAsyncAddValidatorComponent,
  ],
entryComponents: [
	MinTimeAsyncCompleteValidatorComponent,
	MinTimeAsyncValueValidatorComponent,
	MinTimeAsyncOperatorValidatorComponent,
	MinTimeAsyncAllowSecondsValidatorComponent,
	MinTimeAsyncMessageValidatorComponent,
	MinTimeAsyncMessageKeyValidatorComponent,
	MinTimeAsyncDynamicValidatorComponent,
	MinTimeAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinTimeAsyncCompleteValidatorComponent,
	MinTimeAsyncValueValidatorComponent,
	MinTimeAsyncOperatorValidatorComponent,
	MinTimeAsyncAllowSecondsValidatorComponent,
	MinTimeAsyncMessageValidatorComponent,
	MinTimeAsyncMessageKeyValidatorComponent,
	MinTimeAsyncDynamicValidatorComponent,
	MinTimeAsyncAddValidatorComponent,
  ],

})
export class  MinTimeAsyncValidatorsExtendedModule { }
