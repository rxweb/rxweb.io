import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { TimeAsyncCompleteComponent } from './complete/time-async-complete.component';
import { TimeAsyncAllowSecondsComponent } from './allowSeconds/time-async-allow-seconds.component';
import { TimeAsyncMessageComponent } from './message/time-async-message.component';
import { TimeAsyncMessageKeyComponent } from './messageKey/time-async-message-key.component';
import { TimeAsyncDynamicComponent } from './dynamic/time-async-dynamic.component';
import { TimeAsyncAddComponent } from './add/time-async-add.component';
import { TimeAsyncEditComponent } from './edit/time-async-edit.component';

@NgModule({
  declarations: [
	TimeAsyncCompleteComponent,
	TimeAsyncAllowSecondsComponent,
	TimeAsyncMessageComponent,
	TimeAsyncMessageKeyComponent,
	TimeAsyncDynamicComponent,
	TimeAsyncAddComponent,
	TimeAsyncEditComponent,
  ],
entryComponents: [
	TimeAsyncCompleteComponent,
	TimeAsyncAllowSecondsComponent,
	TimeAsyncMessageComponent,
	TimeAsyncMessageKeyComponent,
	TimeAsyncDynamicComponent,
	TimeAsyncAddComponent,
	TimeAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	TimeAsyncCompleteComponent,
	TimeAsyncAllowSecondsComponent,
	TimeAsyncMessageComponent,
	TimeAsyncMessageKeyComponent,
	TimeAsyncDynamicComponent,
	TimeAsyncAddComponent,
	TimeAsyncEditComponent,
  ],

})
export class  TimeAsyncDecoratorsExtendedModule { }
