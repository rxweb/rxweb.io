import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxLengthAsyncCompleteComponent } from './complete/max-length-async-complete.component';
import { MaxLengthAsyncValueComponent } from './value/max-length-async-value.component';
import { MaxLengthAsyncMessageComponent } from './message/max-length-async-message.component';
import { MaxLengthAsyncMessageKeyComponent } from './messageKey/max-length-async-message-key.component';
import { MaxLengthAsyncDynamicComponent } from './dynamic/max-length-async-dynamic.component';
import { MaxLengthAsyncAddComponent } from './add/max-length-async-add.component';
import { MaxLengthAsyncEditComponent } from './edit/max-length-async-edit.component';

@NgModule({
  declarations: [
	MaxLengthAsyncCompleteComponent,
	MaxLengthAsyncValueComponent,
	MaxLengthAsyncMessageComponent,
	MaxLengthAsyncMessageKeyComponent,
	MaxLengthAsyncDynamicComponent,
	MaxLengthAsyncAddComponent,
	MaxLengthAsyncEditComponent,
  ],
entryComponents: [
	MaxLengthAsyncCompleteComponent,
	MaxLengthAsyncValueComponent,
	MaxLengthAsyncMessageComponent,
	MaxLengthAsyncMessageKeyComponent,
	MaxLengthAsyncDynamicComponent,
	MaxLengthAsyncAddComponent,
	MaxLengthAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxLengthAsyncCompleteComponent,
	MaxLengthAsyncValueComponent,
	MaxLengthAsyncMessageComponent,
	MaxLengthAsyncMessageKeyComponent,
	MaxLengthAsyncDynamicComponent,
	MaxLengthAsyncAddComponent,
	MaxLengthAsyncEditComponent,
  ],

})
export class  MaxLengthAsyncDecoratorsExtendedModule { }
