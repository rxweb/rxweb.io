import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ContainsAsyncCompleteValidatorComponent } from './complete/contains-async-complete.component';
import { ContainsAsyncValueValidatorComponent } from './value/contains-async-value.component';
import { ContainsAsyncMessageValidatorComponent } from './message/contains-async-message.component';
import { ContainsAsyncMessageKeyValidatorComponent } from './messageKey/contains-async-message-key.component';
import { ContainsAsyncDynamicValidatorComponent } from './dynamic/contains-async-dynamic.component';
import { ContainsAsyncAddValidatorComponent } from './add/contains-async-add.component';

@NgModule({
  declarations: [
	ContainsAsyncCompleteValidatorComponent,
	ContainsAsyncValueValidatorComponent,
	ContainsAsyncMessageValidatorComponent,
	ContainsAsyncMessageKeyValidatorComponent,
	ContainsAsyncDynamicValidatorComponent,
	ContainsAsyncAddValidatorComponent,
  ],
entryComponents: [
	ContainsAsyncCompleteValidatorComponent,
	ContainsAsyncValueValidatorComponent,
	ContainsAsyncMessageValidatorComponent,
	ContainsAsyncMessageKeyValidatorComponent,
	ContainsAsyncDynamicValidatorComponent,
	ContainsAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ContainsAsyncCompleteValidatorComponent,
	ContainsAsyncValueValidatorComponent,
	ContainsAsyncMessageValidatorComponent,
	ContainsAsyncMessageKeyValidatorComponent,
	ContainsAsyncDynamicValidatorComponent,
	ContainsAsyncAddValidatorComponent,
  ],

})
export class  ContainsAsyncValidatorsExtendedModule { }
