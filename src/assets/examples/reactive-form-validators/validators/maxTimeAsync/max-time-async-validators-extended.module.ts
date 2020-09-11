import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxTimeAsyncCompleteValidatorComponent } from './complete/max-time-async-complete.component';
import { MaxTimeAsyncValueValidatorComponent } from './value/max-time-async-value.component';
import { MaxTimeAsyncOperatorValidatorComponent } from './operator/max-time-async-operator.component';
import { MaxTimeAsyncAllowSecondsValidatorComponent } from './allowSeconds/max-time-async-allow-seconds.component';
import { MaxTimeAsyncMessageValidatorComponent } from './message/max-time-async-message.component';
import { MaxTimeAsyncFieldNameValidatorComponent } from './fieldName/max-time-async-field-name.component';
import { MaxTimeAsyncMessageKeyValidatorComponent } from './messageKey/max-time-async-message-key.component';
import { MaxTimeAsyncDynamicValidatorComponent } from './dynamic/max-time-async-dynamic.component';
import { MaxTimeAsyncAddValidatorComponent } from './add/max-time-async-add.component';

@NgModule({
  declarations: [
	MaxTimeAsyncCompleteValidatorComponent,
	MaxTimeAsyncValueValidatorComponent,
	MaxTimeAsyncOperatorValidatorComponent,
	MaxTimeAsyncAllowSecondsValidatorComponent,
	MaxTimeAsyncMessageValidatorComponent,
	MaxTimeAsyncFieldNameValidatorComponent,
	MaxTimeAsyncMessageKeyValidatorComponent,
	MaxTimeAsyncDynamicValidatorComponent,
	MaxTimeAsyncAddValidatorComponent,
  ],
entryComponents: [
	MaxTimeAsyncCompleteValidatorComponent,
	MaxTimeAsyncValueValidatorComponent,
	MaxTimeAsyncOperatorValidatorComponent,
	MaxTimeAsyncAllowSecondsValidatorComponent,
	MaxTimeAsyncMessageValidatorComponent,
	MaxTimeAsyncFieldNameValidatorComponent,
	MaxTimeAsyncMessageKeyValidatorComponent,
	MaxTimeAsyncDynamicValidatorComponent,
	MaxTimeAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxTimeAsyncCompleteValidatorComponent,
	MaxTimeAsyncValueValidatorComponent,
	MaxTimeAsyncOperatorValidatorComponent,
	MaxTimeAsyncAllowSecondsValidatorComponent,
	MaxTimeAsyncMessageValidatorComponent,
	MaxTimeAsyncFieldNameValidatorComponent,
	MaxTimeAsyncMessageKeyValidatorComponent,
	MaxTimeAsyncDynamicValidatorComponent,
	MaxTimeAsyncAddValidatorComponent,
  ],

})
export class  MaxTimeAsyncValidatorsExtendedModule { }
