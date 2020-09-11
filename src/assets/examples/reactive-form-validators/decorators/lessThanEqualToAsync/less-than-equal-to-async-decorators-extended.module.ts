import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LessThanEqualToAsyncCompleteComponent } from './complete/less-than-equal-to-async-complete.component';
import { LessThanEqualToAsyncFieldNameComponent } from './fieldName/less-than-equal-to-async-field-name.component';
import { LessThanEqualToAsyncValueComponent } from './value/less-than-equal-to-async-value.component';
import { LessThanEqualToAsyncMessageComponent } from './message/less-than-equal-to-async-message.component';
import { LessThanEqualToAsyncMessageKeyComponent } from './messageKey/less-than-equal-to-async-message-key.component';
import { LessThanEqualToAsyncDynamicComponent } from './dynamic/less-than-equal-to-async-dynamic.component';
import { LessThanEqualToAsyncAddComponent } from './add/less-than-equal-to-async-add.component';
import { LessThanEqualToAsyncEditComponent } from './edit/less-than-equal-to-async-edit.component';

@NgModule({
  declarations: [
	LessThanEqualToAsyncCompleteComponent,
	LessThanEqualToAsyncFieldNameComponent,
	LessThanEqualToAsyncValueComponent,
	LessThanEqualToAsyncMessageComponent,
	LessThanEqualToAsyncMessageKeyComponent,
	LessThanEqualToAsyncDynamicComponent,
	LessThanEqualToAsyncAddComponent,
	LessThanEqualToAsyncEditComponent,
  ],
entryComponents: [
	LessThanEqualToAsyncCompleteComponent,
	LessThanEqualToAsyncFieldNameComponent,
	LessThanEqualToAsyncValueComponent,
	LessThanEqualToAsyncMessageComponent,
	LessThanEqualToAsyncMessageKeyComponent,
	LessThanEqualToAsyncDynamicComponent,
	LessThanEqualToAsyncAddComponent,
	LessThanEqualToAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanEqualToAsyncCompleteComponent,
	LessThanEqualToAsyncFieldNameComponent,
	LessThanEqualToAsyncValueComponent,
	LessThanEqualToAsyncMessageComponent,
	LessThanEqualToAsyncMessageKeyComponent,
	LessThanEqualToAsyncDynamicComponent,
	LessThanEqualToAsyncAddComponent,
	LessThanEqualToAsyncEditComponent,
  ],

})
export class  LessThanEqualToAsyncDecoratorsExtendedModule { }
