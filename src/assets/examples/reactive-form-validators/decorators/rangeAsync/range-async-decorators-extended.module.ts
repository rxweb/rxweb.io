import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RangeAsyncCompleteComponent } from './complete/range-async-complete.component';
import { RangeAsyncMinimumNumberComponent } from './minimumNumber/range-async-minimum-number.component';
import { RangeAsyncMaximumNumberComponent } from './maximumNumber/range-async-maximum-number.component';
import { RangeAsyncMessageComponent } from './message/range-async-message.component';
import { RangeAsyncMessageKeyComponent } from './messageKey/range-async-message-key.component';
import { RangeAsyncDynamicComponent } from './dynamic/range-async-dynamic.component';
import { RangeAsyncAddComponent } from './add/range-async-add.component';
import { RangeAsyncEditComponent } from './edit/range-async-edit.component';

@NgModule({
  declarations: [
	RangeAsyncCompleteComponent,
	RangeAsyncMinimumNumberComponent,
	RangeAsyncMaximumNumberComponent,
	RangeAsyncMessageComponent,
	RangeAsyncMessageKeyComponent,
	RangeAsyncDynamicComponent,
	RangeAsyncAddComponent,
	RangeAsyncEditComponent,
  ],
entryComponents: [
	RangeAsyncCompleteComponent,
	RangeAsyncMinimumNumberComponent,
	RangeAsyncMaximumNumberComponent,
	RangeAsyncMessageComponent,
	RangeAsyncMessageKeyComponent,
	RangeAsyncDynamicComponent,
	RangeAsyncAddComponent,
	RangeAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RangeAsyncCompleteComponent,
	RangeAsyncMinimumNumberComponent,
	RangeAsyncMaximumNumberComponent,
	RangeAsyncMessageComponent,
	RangeAsyncMessageKeyComponent,
	RangeAsyncDynamicComponent,
	RangeAsyncAddComponent,
	RangeAsyncEditComponent,
  ],

})
export class  RangeAsyncDecoratorsExtendedModule { }
