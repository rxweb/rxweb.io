import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RangeAsyncCompleteValidatorComponent } from './complete/range-async-complete.component';
import { RangeAsyncMinimumNumberValidatorComponent } from './minimumNumber/range-async-minimum-number.component';
import { RangeAsyncMaximumNumberValidatorComponent } from './maximumNumber/range-async-maximum-number.component';
import { RangeAsyncMessageValidatorComponent } from './message/range-async-message.component';
import { RangeAsyncMessageKeyValidatorComponent } from './messageKey/range-async-message-key.component';
import { RangeAsyncDynamicValidatorComponent } from './dynamic/range-async-dynamic.component';
import { RangeAsyncAddValidatorComponent } from './add/range-async-add.component';

@NgModule({
  declarations: [
	RangeAsyncCompleteValidatorComponent,
	RangeAsyncMinimumNumberValidatorComponent,
	RangeAsyncMaximumNumberValidatorComponent,
	RangeAsyncMessageValidatorComponent,
	RangeAsyncMessageKeyValidatorComponent,
	RangeAsyncDynamicValidatorComponent,
	RangeAsyncAddValidatorComponent,
  ],
entryComponents: [
	RangeAsyncCompleteValidatorComponent,
	RangeAsyncMinimumNumberValidatorComponent,
	RangeAsyncMaximumNumberValidatorComponent,
	RangeAsyncMessageValidatorComponent,
	RangeAsyncMessageKeyValidatorComponent,
	RangeAsyncDynamicValidatorComponent,
	RangeAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RangeAsyncCompleteValidatorComponent,
	RangeAsyncMinimumNumberValidatorComponent,
	RangeAsyncMaximumNumberValidatorComponent,
	RangeAsyncMessageValidatorComponent,
	RangeAsyncMessageKeyValidatorComponent,
	RangeAsyncDynamicValidatorComponent,
	RangeAsyncAddValidatorComponent,
  ],

})
export class  RangeAsyncValidatorsExtendedModule { }
