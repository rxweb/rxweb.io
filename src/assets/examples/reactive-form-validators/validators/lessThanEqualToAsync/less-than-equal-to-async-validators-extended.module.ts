import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LessThanEqualToAsyncCompleteValidatorComponent } from './complete/less-than-equal-to-async-complete.component';
import { LessThanEqualToAsyncFieldNameValidatorComponent } from './fieldName/less-than-equal-to-async-field-name.component';
import { LessThanEqualToAsyncValueValidatorComponent } from './value/less-than-equal-to-async-value.component';
import { LessThanEqualToAsyncMessageValidatorComponent } from './message/less-than-equal-to-async-message.component';
import { LessThanEqualToAsyncMessageKeyValidatorComponent } from './messageKey/less-than-equal-to-async-message-key.component';
import { LessThanEqualToAsyncDynamicValidatorComponent } from './dynamic/less-than-equal-to-async-dynamic.component';
import { LessThanEqualToAsyncAddValidatorComponent } from './add/less-than-equal-to-async-add.component';

@NgModule({
  declarations: [
	LessThanEqualToAsyncCompleteValidatorComponent,
	LessThanEqualToAsyncFieldNameValidatorComponent,
	LessThanEqualToAsyncValueValidatorComponent,
	LessThanEqualToAsyncMessageValidatorComponent,
	LessThanEqualToAsyncMessageKeyValidatorComponent,
	LessThanEqualToAsyncDynamicValidatorComponent,
	LessThanEqualToAsyncAddValidatorComponent,
  ],
entryComponents: [
	LessThanEqualToAsyncCompleteValidatorComponent,
	LessThanEqualToAsyncFieldNameValidatorComponent,
	LessThanEqualToAsyncValueValidatorComponent,
	LessThanEqualToAsyncMessageValidatorComponent,
	LessThanEqualToAsyncMessageKeyValidatorComponent,
	LessThanEqualToAsyncDynamicValidatorComponent,
	LessThanEqualToAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanEqualToAsyncCompleteValidatorComponent,
	LessThanEqualToAsyncFieldNameValidatorComponent,
	LessThanEqualToAsyncValueValidatorComponent,
	LessThanEqualToAsyncMessageValidatorComponent,
	LessThanEqualToAsyncMessageKeyValidatorComponent,
	LessThanEqualToAsyncDynamicValidatorComponent,
	LessThanEqualToAsyncAddValidatorComponent,
  ],

})
export class  LessThanEqualToAsyncValidatorsExtendedModule { }
