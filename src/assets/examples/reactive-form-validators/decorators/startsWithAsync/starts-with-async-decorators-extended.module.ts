import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithAsyncCompleteComponent } from './complete/starts-with-async-complete.component';
import { StartsWithAsyncValueComponent } from './value/starts-with-async-value.component';
import { StartsWithAsyncIsRestrictComponent } from './isRestrict/starts-with-async-is-restrict.component';
import { StartsWithAsyncMessageComponent } from './message/starts-with-async-message.component';
import { StartsWithAsyncMessageKeyComponent } from './messageKey/starts-with-async-message-key.component';
import { StartsWithAsyncDynamicComponent } from './dynamic/starts-with-async-dynamic.component';
import { StartsWithAsyncAddComponent } from './add/starts-with-async-add.component';
import { StartsWithAsyncEditComponent } from './edit/starts-with-async-edit.component';

@NgModule({
  declarations: [
	StartsWithAsyncCompleteComponent,
	StartsWithAsyncValueComponent,
	StartsWithAsyncIsRestrictComponent,
	StartsWithAsyncMessageComponent,
	StartsWithAsyncMessageKeyComponent,
	StartsWithAsyncDynamicComponent,
	StartsWithAsyncAddComponent,
	StartsWithAsyncEditComponent,
  ],
entryComponents: [
	StartsWithAsyncCompleteComponent,
	StartsWithAsyncValueComponent,
	StartsWithAsyncIsRestrictComponent,
	StartsWithAsyncMessageComponent,
	StartsWithAsyncMessageKeyComponent,
	StartsWithAsyncDynamicComponent,
	StartsWithAsyncAddComponent,
	StartsWithAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithAsyncCompleteComponent,
	StartsWithAsyncValueComponent,
	StartsWithAsyncIsRestrictComponent,
	StartsWithAsyncMessageComponent,
	StartsWithAsyncMessageKeyComponent,
	StartsWithAsyncDynamicComponent,
	StartsWithAsyncAddComponent,
	StartsWithAsyncEditComponent,
  ],

})
export class  StartsWithAsyncDecoratorsExtendedModule { }
