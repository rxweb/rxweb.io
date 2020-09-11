import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanEqualToAsyncCompleteComponent } from './complete/greater-than-equal-to-async-complete.component';
import { GreaterThanEqualToAsyncFieldNameComponent } from './fieldName/greater-than-equal-to-async-field-name.component';
import { GreaterThanEqualToAsyncValueComponent } from './value/greater-than-equal-to-async-value.component';
import { GreaterThanEqualToAsyncMessageComponent } from './message/greater-than-equal-to-async-message.component';
import { GreaterThanEqualToAsyncMessageKeyComponent } from './messageKey/greater-than-equal-to-async-message-key.component';
import { GreaterThanEqualToAsyncDynamicComponent } from './dynamic/greater-than-equal-to-async-dynamic.component';
import { GreaterThanEqualToAsyncAddComponent } from './add/greater-than-equal-to-async-add.component';
import { GreaterThanEqualToAsyncEditComponent } from './edit/greater-than-equal-to-async-edit.component';

@NgModule({
  declarations: [
	GreaterThanEqualToAsyncCompleteComponent,
	GreaterThanEqualToAsyncFieldNameComponent,
	GreaterThanEqualToAsyncValueComponent,
	GreaterThanEqualToAsyncMessageComponent,
	GreaterThanEqualToAsyncMessageKeyComponent,
	GreaterThanEqualToAsyncDynamicComponent,
	GreaterThanEqualToAsyncAddComponent,
	GreaterThanEqualToAsyncEditComponent,
  ],
entryComponents: [
	GreaterThanEqualToAsyncCompleteComponent,
	GreaterThanEqualToAsyncFieldNameComponent,
	GreaterThanEqualToAsyncValueComponent,
	GreaterThanEqualToAsyncMessageComponent,
	GreaterThanEqualToAsyncMessageKeyComponent,
	GreaterThanEqualToAsyncDynamicComponent,
	GreaterThanEqualToAsyncAddComponent,
	GreaterThanEqualToAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanEqualToAsyncCompleteComponent,
	GreaterThanEqualToAsyncFieldNameComponent,
	GreaterThanEqualToAsyncValueComponent,
	GreaterThanEqualToAsyncMessageComponent,
	GreaterThanEqualToAsyncMessageKeyComponent,
	GreaterThanEqualToAsyncDynamicComponent,
	GreaterThanEqualToAsyncAddComponent,
	GreaterThanEqualToAsyncEditComponent,
  ],

})
export class  GreaterThanEqualToAsyncDecoratorsExtendedModule { }
