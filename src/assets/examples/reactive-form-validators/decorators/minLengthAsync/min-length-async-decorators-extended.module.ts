import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinLengthAsyncCompleteComponent } from './complete/min-length-async-complete.component';
import { MinLengthAsyncValueComponent } from './value/min-length-async-value.component';
import { MinLengthAsyncMessageComponent } from './message/min-length-async-message.component';
import { MinLengthAsyncMessageKeyComponent } from './messageKey/min-length-async-message-key.component';
import { MinLengthAsyncDynamicComponent } from './dynamic/min-length-async-dynamic.component';
import { MinLengthAsyncAddComponent } from './add/min-length-async-add.component';
import { MinLengthAsyncEditComponent } from './edit/min-length-async-edit.component';

@NgModule({
  declarations: [
	MinLengthAsyncCompleteComponent,
	MinLengthAsyncValueComponent,
	MinLengthAsyncMessageComponent,
	MinLengthAsyncMessageKeyComponent,
	MinLengthAsyncDynamicComponent,
	MinLengthAsyncAddComponent,
	MinLengthAsyncEditComponent,
  ],
entryComponents: [
	MinLengthAsyncCompleteComponent,
	MinLengthAsyncValueComponent,
	MinLengthAsyncMessageComponent,
	MinLengthAsyncMessageKeyComponent,
	MinLengthAsyncDynamicComponent,
	MinLengthAsyncAddComponent,
	MinLengthAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinLengthAsyncCompleteComponent,
	MinLengthAsyncValueComponent,
	MinLengthAsyncMessageComponent,
	MinLengthAsyncMessageKeyComponent,
	MinLengthAsyncDynamicComponent,
	MinLengthAsyncAddComponent,
	MinLengthAsyncEditComponent,
  ],

})
export class  MinLengthAsyncDecoratorsExtendedModule { }
