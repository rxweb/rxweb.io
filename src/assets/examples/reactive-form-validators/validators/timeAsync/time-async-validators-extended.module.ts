import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { TimeAsyncCompleteValidatorComponent } from './complete/time-async-complete.component';
import { TimeAsyncAllowSecondsValidatorComponent } from './allowSeconds/time-async-allow-seconds.component';
import { TimeAsyncMessageValidatorComponent } from './message/time-async-message.component';
import { TimeAsyncMessageKeyValidatorComponent } from './messageKey/time-async-message-key.component';
import { TimeAsyncDynamicValidatorComponent } from './dynamic/time-async-dynamic.component';
import { TimeAsyncAddValidatorComponent } from './add/time-async-add.component';

@NgModule({
  declarations: [
	TimeAsyncCompleteValidatorComponent,
	TimeAsyncAllowSecondsValidatorComponent,
	TimeAsyncMessageValidatorComponent,
	TimeAsyncMessageKeyValidatorComponent,
	TimeAsyncDynamicValidatorComponent,
	TimeAsyncAddValidatorComponent,
  ],
entryComponents: [
	TimeAsyncCompleteValidatorComponent,
	TimeAsyncAllowSecondsValidatorComponent,
	TimeAsyncMessageValidatorComponent,
	TimeAsyncMessageKeyValidatorComponent,
	TimeAsyncDynamicValidatorComponent,
	TimeAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	TimeAsyncCompleteValidatorComponent,
	TimeAsyncAllowSecondsValidatorComponent,
	TimeAsyncMessageValidatorComponent,
	TimeAsyncMessageKeyValidatorComponent,
	TimeAsyncDynamicValidatorComponent,
	TimeAsyncAddValidatorComponent,
  ],

})
export class  TimeAsyncValidatorsExtendedModule { }
