import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithAsyncCompleteValidatorComponent } from './complete/starts-with-async-complete.component';
import { StartsWithAsyncValueValidatorComponent } from './value/starts-with-async-value.component';
import { StartsWithAsyncIsRestrictValidatorComponent } from './isRestrict/starts-with-async-is-restrict.component';
import { StartsWithAsyncMessageValidatorComponent } from './message/starts-with-async-message.component';
import { StartsWithAsyncMessageKeyValidatorComponent } from './messageKey/starts-with-async-message-key.component';
import { StartsWithAsyncDynamicValidatorComponent } from './dynamic/starts-with-async-dynamic.component';
import { StartsWithAsyncAddValidatorComponent } from './add/starts-with-async-add.component';

@NgModule({
  declarations: [
	StartsWithAsyncCompleteValidatorComponent,
	StartsWithAsyncValueValidatorComponent,
	StartsWithAsyncIsRestrictValidatorComponent,
	StartsWithAsyncMessageValidatorComponent,
	StartsWithAsyncMessageKeyValidatorComponent,
	StartsWithAsyncDynamicValidatorComponent,
	StartsWithAsyncAddValidatorComponent,
  ],
entryComponents: [
	StartsWithAsyncCompleteValidatorComponent,
	StartsWithAsyncValueValidatorComponent,
	StartsWithAsyncIsRestrictValidatorComponent,
	StartsWithAsyncMessageValidatorComponent,
	StartsWithAsyncMessageKeyValidatorComponent,
	StartsWithAsyncDynamicValidatorComponent,
	StartsWithAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithAsyncCompleteValidatorComponent,
	StartsWithAsyncValueValidatorComponent,
	StartsWithAsyncIsRestrictValidatorComponent,
	StartsWithAsyncMessageValidatorComponent,
	StartsWithAsyncMessageKeyValidatorComponent,
	StartsWithAsyncDynamicValidatorComponent,
	StartsWithAsyncAddValidatorComponent,
  ],

})
export class  StartsWithAsyncValidatorsExtendedModule { }
