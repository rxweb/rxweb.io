import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { DateAsyncCompleteComponent } from './complete/date-async-complete.component';
import { DateAsyncAllowISODateComponent } from './allowISODate/date-async-allow-i-s-o-date.component';
import { DateAsyncConditionalExpressionComponent } from './conditionalExpression/date-async-conditional-expression.component';
import { DateAsyncMessageComponent } from './message/date-async-message.component';
import { DateAsyncMessageKeyComponent } from './messageKey/date-async-message-key.component';
import { DateAsyncDynamicComponent } from './dynamic/date-async-dynamic.component';
import { DateAsyncAddComponent } from './add/date-async-add.component';
import { DateAsyncEditComponent } from './edit/date-async-edit.component';

@NgModule({
  declarations: [
	DateAsyncCompleteComponent,
	DateAsyncAllowISODateComponent,
	DateAsyncConditionalExpressionComponent,
	DateAsyncMessageComponent,
	DateAsyncMessageKeyComponent,
	DateAsyncDynamicComponent,
	DateAsyncAddComponent,
	DateAsyncEditComponent,
  ],
entryComponents: [
	DateAsyncCompleteComponent,
	DateAsyncAllowISODateComponent,
	DateAsyncConditionalExpressionComponent,
	DateAsyncMessageComponent,
	DateAsyncMessageKeyComponent,
	DateAsyncDynamicComponent,
	DateAsyncAddComponent,
	DateAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DateAsyncCompleteComponent,
	DateAsyncAllowISODateComponent,
	DateAsyncConditionalExpressionComponent,
	DateAsyncMessageComponent,
	DateAsyncMessageKeyComponent,
	DateAsyncDynamicComponent,
	DateAsyncAddComponent,
	DateAsyncEditComponent,
  ],

})
export class  DateAsyncDecoratorsExtendedModule { }
