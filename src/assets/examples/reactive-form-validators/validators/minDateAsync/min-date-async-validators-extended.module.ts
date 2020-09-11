import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinDateAsyncCompleteValidatorComponent } from './complete/min-date-async-complete.component';
import { MinDateAsyncValueValidatorComponent } from './value/min-date-async-value.component';
import { MinDateAsyncMessageValidatorComponent } from './message/min-date-async-message.component';
import { MinDateAsyncFieldNameValidatorComponent } from './fieldName/min-date-async-field-name.component';
import { MinDateAsyncOperatorValidatorComponent } from './operator/min-date-async-operator.component';
import { MinDateAsyncMessageKeyValidatorComponent } from './messageKey/min-date-async-message-key.component';
import { MinDateAsyncDynamicValidatorComponent } from './dynamic/min-date-async-dynamic.component';
import { MinDateAsyncAddValidatorComponent } from './add/min-date-async-add.component';

@NgModule({
  declarations: [
	MinDateAsyncCompleteValidatorComponent,
	MinDateAsyncValueValidatorComponent,
	MinDateAsyncMessageValidatorComponent,
	MinDateAsyncFieldNameValidatorComponent,
	MinDateAsyncOperatorValidatorComponent,
	MinDateAsyncMessageKeyValidatorComponent,
	MinDateAsyncDynamicValidatorComponent,
	MinDateAsyncAddValidatorComponent,
  ],
entryComponents: [
	MinDateAsyncCompleteValidatorComponent,
	MinDateAsyncValueValidatorComponent,
	MinDateAsyncMessageValidatorComponent,
	MinDateAsyncFieldNameValidatorComponent,
	MinDateAsyncOperatorValidatorComponent,
	MinDateAsyncMessageKeyValidatorComponent,
	MinDateAsyncDynamicValidatorComponent,
	MinDateAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinDateAsyncCompleteValidatorComponent,
	MinDateAsyncValueValidatorComponent,
	MinDateAsyncMessageValidatorComponent,
	MinDateAsyncFieldNameValidatorComponent,
	MinDateAsyncOperatorValidatorComponent,
	MinDateAsyncMessageKeyValidatorComponent,
	MinDateAsyncDynamicValidatorComponent,
	MinDateAsyncAddValidatorComponent,
  ],

})
export class  MinDateAsyncValidatorsExtendedModule { }
