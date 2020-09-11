import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinDateAsyncCompleteComponent } from './complete/min-date-async-complete.component';
import { MinDateAsyncValueComponent } from './value/min-date-async-value.component';
import { MinDateAsyncMessageComponent } from './message/min-date-async-message.component';
import { MinDateAsyncFieldNameComponent } from './fieldName/min-date-async-field-name.component';
import { MinDateAsyncOperatorComponent } from './operator/min-date-async-operator.component';
import { MinDateAsyncMessageKeyComponent } from './messageKey/min-date-async-message-key.component';
import { MinDateAsyncDynamicComponent } from './dynamic/min-date-async-dynamic.component';
import { MinDateAsyncAddComponent } from './add/min-date-async-add.component';
import { MinDateAsyncEditComponent } from './edit/min-date-async-edit.component';

@NgModule({
  declarations: [
	MinDateAsyncCompleteComponent,
	MinDateAsyncValueComponent,
	MinDateAsyncMessageComponent,
	MinDateAsyncFieldNameComponent,
	MinDateAsyncOperatorComponent,
	MinDateAsyncMessageKeyComponent,
	MinDateAsyncDynamicComponent,
	MinDateAsyncAddComponent,
	MinDateAsyncEditComponent,
  ],
entryComponents: [
	MinDateAsyncCompleteComponent,
	MinDateAsyncValueComponent,
	MinDateAsyncMessageComponent,
	MinDateAsyncFieldNameComponent,
	MinDateAsyncOperatorComponent,
	MinDateAsyncMessageKeyComponent,
	MinDateAsyncDynamicComponent,
	MinDateAsyncAddComponent,
	MinDateAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinDateAsyncCompleteComponent,
	MinDateAsyncValueComponent,
	MinDateAsyncMessageComponent,
	MinDateAsyncFieldNameComponent,
	MinDateAsyncOperatorComponent,
	MinDateAsyncMessageKeyComponent,
	MinDateAsyncDynamicComponent,
	MinDateAsyncAddComponent,
	MinDateAsyncEditComponent,
  ],

})
export class  MinDateAsyncDecoratorsExtendedModule { }
