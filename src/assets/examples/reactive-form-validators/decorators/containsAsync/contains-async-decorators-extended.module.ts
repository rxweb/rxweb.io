import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ContainsAsyncCompleteComponent } from './complete/contains-async-complete.component';
import { ContainsAsyncValueComponent } from './value/contains-async-value.component';
import { ContainsAsyncMessageComponent } from './message/contains-async-message.component';
import { ContainsAsyncMessageKeyComponent } from './messageKey/contains-async-message-key.component';
import { ContainsAsyncDynamicComponent } from './dynamic/contains-async-dynamic.component';
import { ContainsAsyncAddComponent } from './add/contains-async-add.component';
import { ContainsAsyncEditComponent } from './edit/contains-async-edit.component';

@NgModule({
  declarations: [
	ContainsAsyncCompleteComponent,
	ContainsAsyncValueComponent,
	ContainsAsyncMessageComponent,
	ContainsAsyncMessageKeyComponent,
	ContainsAsyncDynamicComponent,
	ContainsAsyncAddComponent,
	ContainsAsyncEditComponent,
  ],
entryComponents: [
	ContainsAsyncCompleteComponent,
	ContainsAsyncValueComponent,
	ContainsAsyncMessageComponent,
	ContainsAsyncMessageKeyComponent,
	ContainsAsyncDynamicComponent,
	ContainsAsyncAddComponent,
	ContainsAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ContainsAsyncCompleteComponent,
	ContainsAsyncValueComponent,
	ContainsAsyncMessageComponent,
	ContainsAsyncMessageKeyComponent,
	ContainsAsyncDynamicComponent,
	ContainsAsyncAddComponent,
	ContainsAsyncEditComponent,
  ],

})
export class  ContainsAsyncDecoratorsExtendedModule { }
