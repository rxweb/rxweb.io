import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinTimeAsyncCompleteComponent } from './complete/min-time-async-complete.component';
import { MinTimeAsyncValueComponent } from './value/min-time-async-value.component';
import { MinTimeAsyncOperatorComponent } from './operator/min-time-async-operator.component';
import { MinTimeAsyncAllowSecondsComponent } from './allowSeconds/min-time-async-allow-seconds.component';
import { MinTimeAsyncMessageComponent } from './message/min-time-async-message.component';
import { MinTimeAsyncMessageKeyComponent } from './messageKey/min-time-async-message-key.component';
import { MinTimeAsyncDynamicComponent } from './dynamic/min-time-async-dynamic.component';
import { MinTimeAsyncAddComponent } from './add/min-time-async-add.component';
import { MinTimeAsyncEditComponent } from './edit/min-time-async-edit.component';

@NgModule({
  declarations: [
	MinTimeAsyncCompleteComponent,
	MinTimeAsyncValueComponent,
	MinTimeAsyncOperatorComponent,
	MinTimeAsyncAllowSecondsComponent,
	MinTimeAsyncMessageComponent,
	MinTimeAsyncMessageKeyComponent,
	MinTimeAsyncDynamicComponent,
	MinTimeAsyncAddComponent,
	MinTimeAsyncEditComponent,
  ],
entryComponents: [
	MinTimeAsyncCompleteComponent,
	MinTimeAsyncValueComponent,
	MinTimeAsyncOperatorComponent,
	MinTimeAsyncAllowSecondsComponent,
	MinTimeAsyncMessageComponent,
	MinTimeAsyncMessageKeyComponent,
	MinTimeAsyncDynamicComponent,
	MinTimeAsyncAddComponent,
	MinTimeAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinTimeAsyncCompleteComponent,
	MinTimeAsyncValueComponent,
	MinTimeAsyncOperatorComponent,
	MinTimeAsyncAllowSecondsComponent,
	MinTimeAsyncMessageComponent,
	MinTimeAsyncMessageKeyComponent,
	MinTimeAsyncDynamicComponent,
	MinTimeAsyncAddComponent,
	MinTimeAsyncEditComponent,
  ],

})
export class  MinTimeAsyncDecoratorsExtendedModule { }
