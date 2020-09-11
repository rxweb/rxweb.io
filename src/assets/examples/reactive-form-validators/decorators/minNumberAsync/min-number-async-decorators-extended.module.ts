import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinNumberAsyncCompleteComponent } from './complete/min-number-async-complete.component';
import { MinNumberAsyncValueComponent } from './value/min-number-async-value.component';
import { MinNumberAsyncMessageComponent } from './message/min-number-async-message.component';
import { MinNumberAsyncMessageKeyComponent } from './messageKey/min-number-async-message-key.component';
import { MinNumberAsyncDynamicComponent } from './dynamic/min-number-async-dynamic.component';
import { MinNumberAsyncAddComponent } from './add/min-number-async-add.component';
import { MinNumberAsyncEditComponent } from './edit/min-number-async-edit.component';

@NgModule({
  declarations: [
	MinNumberAsyncCompleteComponent,
	MinNumberAsyncValueComponent,
	MinNumberAsyncMessageComponent,
	MinNumberAsyncMessageKeyComponent,
	MinNumberAsyncDynamicComponent,
	MinNumberAsyncAddComponent,
	MinNumberAsyncEditComponent,
  ],
entryComponents: [
	MinNumberAsyncCompleteComponent,
	MinNumberAsyncValueComponent,
	MinNumberAsyncMessageComponent,
	MinNumberAsyncMessageKeyComponent,
	MinNumberAsyncDynamicComponent,
	MinNumberAsyncAddComponent,
	MinNumberAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinNumberAsyncCompleteComponent,
	MinNumberAsyncValueComponent,
	MinNumberAsyncMessageComponent,
	MinNumberAsyncMessageKeyComponent,
	MinNumberAsyncDynamicComponent,
	MinNumberAsyncAddComponent,
	MinNumberAsyncEditComponent,
  ],

})
export class  MinNumberAsyncDecoratorsExtendedModule { }
