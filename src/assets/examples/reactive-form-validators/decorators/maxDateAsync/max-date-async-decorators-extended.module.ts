import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxDateAsyncCompleteComponent } from './complete/max-date-async-complete.component';
import { MaxDateAsyncValueComponent } from './value/max-date-async-value.component';
import { MaxDateAsyncMessageComponent } from './message/max-date-async-message.component';
import { MaxDateAsyncFieldNameComponent } from './fieldName/max-date-async-field-name.component';
import { MaxDateAsyncOperatorComponent } from './operator/max-date-async-operator.component';
import { MaxDateAsyncMessageKeyComponent } from './messageKey/max-date-async-message-key.component';
import { MaxDateAsyncDynamicComponent } from './dynamic/max-date-async-dynamic.component';
import { MaxDateAsyncAddComponent } from './add/max-date-async-add.component';
import { MaxDateAsyncEditComponent } from './edit/max-date-async-edit.component';

@NgModule({
  declarations: [
	MaxDateAsyncCompleteComponent,
	MaxDateAsyncValueComponent,
	MaxDateAsyncMessageComponent,
	MaxDateAsyncFieldNameComponent,
	MaxDateAsyncOperatorComponent,
	MaxDateAsyncMessageKeyComponent,
	MaxDateAsyncDynamicComponent,
	MaxDateAsyncAddComponent,
	MaxDateAsyncEditComponent,
  ],
entryComponents: [
	MaxDateAsyncCompleteComponent,
	MaxDateAsyncValueComponent,
	MaxDateAsyncMessageComponent,
	MaxDateAsyncFieldNameComponent,
	MaxDateAsyncOperatorComponent,
	MaxDateAsyncMessageKeyComponent,
	MaxDateAsyncDynamicComponent,
	MaxDateAsyncAddComponent,
	MaxDateAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxDateAsyncCompleteComponent,
	MaxDateAsyncValueComponent,
	MaxDateAsyncMessageComponent,
	MaxDateAsyncFieldNameComponent,
	MaxDateAsyncOperatorComponent,
	MaxDateAsyncMessageKeyComponent,
	MaxDateAsyncDynamicComponent,
	MaxDateAsyncAddComponent,
	MaxDateAsyncEditComponent,
  ],

})
export class  MaxDateAsyncDecoratorsExtendedModule { }
