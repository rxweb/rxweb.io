import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaAsyncCompleteValidatorComponent } from './complete/alpha-async-complete.component';
import { AlphaAsyncConditionalExpressionValidatorComponent } from './conditionalExpression/alpha-async-conditional-expression.component';
import { AlphaAsyncLocaleValidatorComponent } from './locale/alpha-async-locale.component';
import { AlphaAsyncAllowWhiteSpaceValidatorComponent } from './allowWhiteSpace/alpha-async-allow-white-space.component';
import { AlphaAsyncMessageValidatorComponent } from './message/alpha-async-message.component';
import { AlphaAsyncMessageKeyValidatorComponent } from './messageKey/alpha-async-message-key.component';
import { AlphaAsyncDynamicValidatorComponent } from './dynamic/alpha-async-dynamic.component';
import { AlphaAsyncAddValidatorComponent } from './add/alpha-async-add.component';

@NgModule({
  declarations: [
	AlphaAsyncCompleteValidatorComponent,
	AlphaAsyncConditionalExpressionValidatorComponent,
	AlphaAsyncLocaleValidatorComponent,
	AlphaAsyncAllowWhiteSpaceValidatorComponent,
	AlphaAsyncMessageValidatorComponent,
	AlphaAsyncMessageKeyValidatorComponent,
	AlphaAsyncDynamicValidatorComponent,
	AlphaAsyncAddValidatorComponent,
  ],
entryComponents: [
	AlphaAsyncCompleteValidatorComponent,
	AlphaAsyncConditionalExpressionValidatorComponent,
	AlphaAsyncLocaleValidatorComponent,
	AlphaAsyncAllowWhiteSpaceValidatorComponent,
	AlphaAsyncMessageValidatorComponent,
	AlphaAsyncMessageKeyValidatorComponent,
	AlphaAsyncDynamicValidatorComponent,
	AlphaAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaAsyncCompleteValidatorComponent,
	AlphaAsyncConditionalExpressionValidatorComponent,
	AlphaAsyncLocaleValidatorComponent,
	AlphaAsyncAllowWhiteSpaceValidatorComponent,
	AlphaAsyncMessageValidatorComponent,
	AlphaAsyncMessageKeyValidatorComponent,
	AlphaAsyncDynamicValidatorComponent,
	AlphaAsyncAddValidatorComponent,
  ],

})
export class  AlphaAsyncValidatorsExtendedModule { }
