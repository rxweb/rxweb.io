import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxDateAsyncCompleteValidatorComponent } from './complete/max-date-async-complete.component';
import { MaxDateAsyncValueValidatorComponent } from './value/max-date-async-value.component';
import { MaxDateAsyncMessageValidatorComponent } from './message/max-date-async-message.component';
import { MaxDateAsyncFieldNameValidatorComponent } from './fieldName/max-date-async-field-name.component';
import { MaxDateAsyncOperatorValidatorComponent } from './operator/max-date-async-operator.component';
import { MaxDateAsyncMessageKeyValidatorComponent } from './messageKey/max-date-async-message-key.component';
import { MaxDateAsyncDynamicValidatorComponent } from './dynamic/max-date-async-dynamic.component';
import { MaxDateAsyncAddValidatorComponent } from './add/max-date-async-add.component';

@NgModule({
  declarations: [
	MaxDateAsyncCompleteValidatorComponent,
	MaxDateAsyncValueValidatorComponent,
	MaxDateAsyncMessageValidatorComponent,
	MaxDateAsyncFieldNameValidatorComponent,
	MaxDateAsyncOperatorValidatorComponent,
	MaxDateAsyncMessageKeyValidatorComponent,
	MaxDateAsyncDynamicValidatorComponent,
	MaxDateAsyncAddValidatorComponent,
  ],
entryComponents: [
	MaxDateAsyncCompleteValidatorComponent,
	MaxDateAsyncValueValidatorComponent,
	MaxDateAsyncMessageValidatorComponent,
	MaxDateAsyncFieldNameValidatorComponent,
	MaxDateAsyncOperatorValidatorComponent,
	MaxDateAsyncMessageKeyValidatorComponent,
	MaxDateAsyncDynamicValidatorComponent,
	MaxDateAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxDateAsyncCompleteValidatorComponent,
	MaxDateAsyncValueValidatorComponent,
	MaxDateAsyncMessageValidatorComponent,
	MaxDateAsyncFieldNameValidatorComponent,
	MaxDateAsyncOperatorValidatorComponent,
	MaxDateAsyncMessageKeyValidatorComponent,
	MaxDateAsyncDynamicValidatorComponent,
	MaxDateAsyncAddValidatorComponent,
  ],

})
export class  MaxDateAsyncValidatorsExtendedModule { }
