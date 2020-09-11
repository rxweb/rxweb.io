import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanEqualToAsyncCompleteValidatorComponent } from './complete/greater-than-equal-to-async-complete.component';
import { GreaterThanEqualToAsyncFieldNameValidatorComponent } from './fieldName/greater-than-equal-to-async-field-name.component';
import { GreaterThanEqualToAsyncValueValidatorComponent } from './value/greater-than-equal-to-async-value.component';
import { GreaterThanEqualToAsyncMessageValidatorComponent } from './message/greater-than-equal-to-async-message.component';
import { GreaterThanEqualToAsyncMessageKeyValidatorComponent } from './messageKey/greater-than-equal-to-async-message-key.component';
import { GreaterThanEqualToAsyncDynamicValidatorComponent } from './dynamic/greater-than-equal-to-async-dynamic.component';
import { GreaterThanEqualToAsyncAddValidatorComponent } from './add/greater-than-equal-to-async-add.component';

@NgModule({
  declarations: [
	GreaterThanEqualToAsyncCompleteValidatorComponent,
	GreaterThanEqualToAsyncFieldNameValidatorComponent,
	GreaterThanEqualToAsyncValueValidatorComponent,
	GreaterThanEqualToAsyncMessageValidatorComponent,
	GreaterThanEqualToAsyncMessageKeyValidatorComponent,
	GreaterThanEqualToAsyncDynamicValidatorComponent,
	GreaterThanEqualToAsyncAddValidatorComponent,
  ],
entryComponents: [
	GreaterThanEqualToAsyncCompleteValidatorComponent,
	GreaterThanEqualToAsyncFieldNameValidatorComponent,
	GreaterThanEqualToAsyncValueValidatorComponent,
	GreaterThanEqualToAsyncMessageValidatorComponent,
	GreaterThanEqualToAsyncMessageKeyValidatorComponent,
	GreaterThanEqualToAsyncDynamicValidatorComponent,
	GreaterThanEqualToAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanEqualToAsyncCompleteValidatorComponent,
	GreaterThanEqualToAsyncFieldNameValidatorComponent,
	GreaterThanEqualToAsyncValueValidatorComponent,
	GreaterThanEqualToAsyncMessageValidatorComponent,
	GreaterThanEqualToAsyncMessageKeyValidatorComponent,
	GreaterThanEqualToAsyncDynamicValidatorComponent,
	GreaterThanEqualToAsyncAddValidatorComponent,
  ],

})
export class  GreaterThanEqualToAsyncValidatorsExtendedModule { }
