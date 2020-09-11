import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxNumberAsyncCompleteComponent } from './complete/max-number-async-complete.component';
import { MaxNumberAsyncValueComponent } from './value/max-number-async-value.component';
import { MaxNumberAsyncMessageComponent } from './message/max-number-async-message.component';
import { MaxNumberAsyncMessageKeyComponent } from './messageKey/max-number-async-message-key.component';
import { MaxNumberAsyncDynamicComponent } from './dynamic/max-number-async-dynamic.component';
import { MaxNumberAsyncAddComponent } from './add/max-number-async-add.component';
import { MaxNumberAsyncEditComponent } from './edit/max-number-async-edit.component';

@NgModule({
  declarations: [
	MaxNumberAsyncCompleteComponent,
	MaxNumberAsyncValueComponent,
	MaxNumberAsyncMessageComponent,
	MaxNumberAsyncMessageKeyComponent,
	MaxNumberAsyncDynamicComponent,
	MaxNumberAsyncAddComponent,
	MaxNumberAsyncEditComponent,
  ],
entryComponents: [
	MaxNumberAsyncCompleteComponent,
	MaxNumberAsyncValueComponent,
	MaxNumberAsyncMessageComponent,
	MaxNumberAsyncMessageKeyComponent,
	MaxNumberAsyncDynamicComponent,
	MaxNumberAsyncAddComponent,
	MaxNumberAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxNumberAsyncCompleteComponent,
	MaxNumberAsyncValueComponent,
	MaxNumberAsyncMessageComponent,
	MaxNumberAsyncMessageKeyComponent,
	MaxNumberAsyncDynamicComponent,
	MaxNumberAsyncAddComponent,
	MaxNumberAsyncEditComponent,
  ],

})
export class  MaxNumberAsyncDecoratorsExtendedModule { }
