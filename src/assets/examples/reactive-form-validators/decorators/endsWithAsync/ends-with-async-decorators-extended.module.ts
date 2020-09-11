import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { EndsWithAsyncCompleteComponent } from './complete/ends-with-async-complete.component';
import { EndsWithAsyncValueComponent } from './value/ends-with-async-value.component';
import { EndsWithAsyncMessageComponent } from './message/ends-with-async-message.component';
import { EndsWithAsyncMessageKeyComponent } from './messageKey/ends-with-async-message-key.component';
import { EndsWithAsyncDynamicComponent } from './dynamic/ends-with-async-dynamic.component';
import { EndsWithAsyncAddComponent } from './add/ends-with-async-add.component';
import { EndsWithAsyncEditComponent } from './edit/ends-with-async-edit.component';

@NgModule({
  declarations: [
	EndsWithAsyncCompleteComponent,
	EndsWithAsyncValueComponent,
	EndsWithAsyncMessageComponent,
	EndsWithAsyncMessageKeyComponent,
	EndsWithAsyncDynamicComponent,
	EndsWithAsyncAddComponent,
	EndsWithAsyncEditComponent,
  ],
entryComponents: [
	EndsWithAsyncCompleteComponent,
	EndsWithAsyncValueComponent,
	EndsWithAsyncMessageComponent,
	EndsWithAsyncMessageKeyComponent,
	EndsWithAsyncDynamicComponent,
	EndsWithAsyncAddComponent,
	EndsWithAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	EndsWithAsyncCompleteComponent,
	EndsWithAsyncValueComponent,
	EndsWithAsyncMessageComponent,
	EndsWithAsyncMessageKeyComponent,
	EndsWithAsyncDynamicComponent,
	EndsWithAsyncAddComponent,
	EndsWithAsyncEditComponent,
  ],

})
export class  EndsWithAsyncDecoratorsExtendedModule { }
