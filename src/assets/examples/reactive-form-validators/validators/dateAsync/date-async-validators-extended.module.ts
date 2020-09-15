import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { DateAsyncCompleteValidatorComponent } from './complete/date-async-complete.component';
import { DateAsyncAllowISODateValidatorComponent } from './allowISODate/date-async-allow-i-s-o-date.component';
import { DateAsyncConditionalExpressionValidatorComponent } from './conditionalExpression/date-async-conditional-expression.component';
import { DateAsyncMessageValidatorComponent } from './message/date-async-message.component';
import { DateAsyncMessageKeyValidatorComponent } from './messageKey/date-async-message-key.component';
import { DateAsyncDynamicValidatorComponent } from './dynamic/date-async-dynamic.component';
import { DateAsyncAddValidatorComponent } from './add/date-async-add.component';

@NgModule({
  declarations: [
	DateAsyncCompleteValidatorComponent,
	DateAsyncAllowISODateValidatorComponent,
	DateAsyncConditionalExpressionValidatorComponent,
	DateAsyncMessageValidatorComponent,
	DateAsyncMessageKeyValidatorComponent,
	DateAsyncDynamicValidatorComponent,
	DateAsyncAddValidatorComponent,
  ],
entryComponents: [
	DateAsyncCompleteValidatorComponent,
	DateAsyncAllowISODateValidatorComponent,
	DateAsyncConditionalExpressionValidatorComponent,
	DateAsyncMessageValidatorComponent,
	DateAsyncMessageKeyValidatorComponent,
	DateAsyncDynamicValidatorComponent,
	DateAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DateAsyncCompleteValidatorComponent,
	DateAsyncAllowISODateValidatorComponent,
	DateAsyncConditionalExpressionValidatorComponent,
	DateAsyncMessageValidatorComponent,
	DateAsyncMessageKeyValidatorComponent,
	DateAsyncDynamicValidatorComponent,
	DateAsyncAddValidatorComponent,
  ],

})
export class  DateAsyncValidatorsExtendedModule { }
