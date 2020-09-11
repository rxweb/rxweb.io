import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LessThanAsyncCompleteComponent } from './complete/less-than-async-complete.component';
import { LessThanAsyncFieldNameComponent } from './fieldName/less-than-async-field-name.component';
import { LessThanAsyncValueComponent } from './value/less-than-async-value.component';
import { LessThanAsyncMessageComponent } from './message/less-than-async-message.component';
import { LessThanAsyncMessageKeyComponent } from './messageKey/less-than-async-message-key.component';
import { LessThanAsyncDynamicComponent } from './dynamic/less-than-async-dynamic.component';
import { LessThanAsyncAddComponent } from './add/less-than-async-add.component';
import { LessThanAsyncEditComponent } from './edit/less-than-async-edit.component';

@NgModule({
  declarations: [
	LessThanAsyncCompleteComponent,
	LessThanAsyncFieldNameComponent,
	LessThanAsyncValueComponent,
	LessThanAsyncMessageComponent,
	LessThanAsyncMessageKeyComponent,
	LessThanAsyncDynamicComponent,
	LessThanAsyncAddComponent,
	LessThanAsyncEditComponent,
  ],
entryComponents: [
	LessThanAsyncCompleteComponent,
	LessThanAsyncFieldNameComponent,
	LessThanAsyncValueComponent,
	LessThanAsyncMessageComponent,
	LessThanAsyncMessageKeyComponent,
	LessThanAsyncDynamicComponent,
	LessThanAsyncAddComponent,
	LessThanAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanAsyncCompleteComponent,
	LessThanAsyncFieldNameComponent,
	LessThanAsyncValueComponent,
	LessThanAsyncMessageComponent,
	LessThanAsyncMessageKeyComponent,
	LessThanAsyncDynamicComponent,
	LessThanAsyncAddComponent,
	LessThanAsyncEditComponent,
  ],

})
export class  LessThanAsyncDecoratorsExtendedModule { }
