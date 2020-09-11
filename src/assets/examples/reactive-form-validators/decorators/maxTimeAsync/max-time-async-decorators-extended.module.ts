import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxTimeAsyncCompleteComponent } from './complete/max-time-async-complete.component';
import { MaxTimeAsyncValueComponent } from './value/max-time-async-value.component';
import { MaxTimeAsyncOperatorComponent } from './operator/max-time-async-operator.component';
import { MaxTimeAsyncAllowSecondsComponent } from './allowSeconds/max-time-async-allow-seconds.component';
import { MaxTimeAsyncMessageComponent } from './message/max-time-async-message.component';
import { MaxTimeAsyncFieldNameComponent } from './fieldName/max-time-async-field-name.component';
import { MaxTimeAsyncMessageKeyComponent } from './messageKey/max-time-async-message-key.component';
import { MaxTimeAsyncDynamicComponent } from './dynamic/max-time-async-dynamic.component';
import { MaxTimeAsyncAddComponent } from './add/max-time-async-add.component';
import { MaxTimeAsyncEditComponent } from './edit/max-time-async-edit.component';

@NgModule({
  declarations: [
	MaxTimeAsyncCompleteComponent,
	MaxTimeAsyncValueComponent,
	MaxTimeAsyncOperatorComponent,
	MaxTimeAsyncAllowSecondsComponent,
	MaxTimeAsyncMessageComponent,
	MaxTimeAsyncFieldNameComponent,
	MaxTimeAsyncMessageKeyComponent,
	MaxTimeAsyncDynamicComponent,
	MaxTimeAsyncAddComponent,
	MaxTimeAsyncEditComponent,
  ],
entryComponents: [
	MaxTimeAsyncCompleteComponent,
	MaxTimeAsyncValueComponent,
	MaxTimeAsyncOperatorComponent,
	MaxTimeAsyncAllowSecondsComponent,
	MaxTimeAsyncMessageComponent,
	MaxTimeAsyncFieldNameComponent,
	MaxTimeAsyncMessageKeyComponent,
	MaxTimeAsyncDynamicComponent,
	MaxTimeAsyncAddComponent,
	MaxTimeAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxTimeAsyncCompleteComponent,
	MaxTimeAsyncValueComponent,
	MaxTimeAsyncOperatorComponent,
	MaxTimeAsyncAllowSecondsComponent,
	MaxTimeAsyncMessageComponent,
	MaxTimeAsyncFieldNameComponent,
	MaxTimeAsyncMessageKeyComponent,
	MaxTimeAsyncDynamicComponent,
	MaxTimeAsyncAddComponent,
	MaxTimeAsyncEditComponent,
  ],

})
export class  MaxTimeAsyncDecoratorsExtendedModule { }
