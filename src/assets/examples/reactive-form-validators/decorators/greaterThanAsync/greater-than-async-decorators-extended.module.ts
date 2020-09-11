import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanAsyncCompleteComponent } from './complete/greater-than-async-complete.component';
import { GreaterThanAsyncFieldNameComponent } from './fieldName/greater-than-async-field-name.component';
import { GreaterThanAsyncValueComponent } from './value/greater-than-async-value.component';
import { GreaterThanAsyncMessageComponent } from './message/greater-than-async-message.component';
import { GreaterThanAsyncMessageKeyComponent } from './messageKey/greater-than-async-message-key.component';
import { GreaterThanAsyncDynamicComponent } from './dynamic/greater-than-async-dynamic.component';
import { GreaterThanAsyncAddComponent } from './add/greater-than-async-add.component';
import { GreaterThanAsyncEditComponent } from './edit/greater-than-async-edit.component';

@NgModule({
  declarations: [
	GreaterThanAsyncCompleteComponent,
	GreaterThanAsyncFieldNameComponent,
	GreaterThanAsyncValueComponent,
	GreaterThanAsyncMessageComponent,
	GreaterThanAsyncMessageKeyComponent,
	GreaterThanAsyncDynamicComponent,
	GreaterThanAsyncAddComponent,
	GreaterThanAsyncEditComponent,
  ],
entryComponents: [
	GreaterThanAsyncCompleteComponent,
	GreaterThanAsyncFieldNameComponent,
	GreaterThanAsyncValueComponent,
	GreaterThanAsyncMessageComponent,
	GreaterThanAsyncMessageKeyComponent,
	GreaterThanAsyncDynamicComponent,
	GreaterThanAsyncAddComponent,
	GreaterThanAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanAsyncCompleteComponent,
	GreaterThanAsyncFieldNameComponent,
	GreaterThanAsyncValueComponent,
	GreaterThanAsyncMessageComponent,
	GreaterThanAsyncMessageKeyComponent,
	GreaterThanAsyncDynamicComponent,
	GreaterThanAsyncAddComponent,
	GreaterThanAsyncEditComponent,
  ],

})
export class  GreaterThanAsyncDecoratorsExtendedModule { }
