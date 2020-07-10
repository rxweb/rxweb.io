import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaCompleteValidatorComponent } from './complete/alpha-complete.component';
import { AlphaConditionalExpressionValidatorComponent } from './conditionalExpression/alpha-conditional-expression.component';
import { AlphaLocaleValidatorComponent } from './locale/alpha-locale.component';
import { AlphaAllowWhiteSpaceValidatorComponent } from './allowWhiteSpace/alpha-allow-white-space.component';
import { AlphaMessageValidatorComponent } from './message/alpha-message.component';
import { AlphaMessageKeyValidatorComponent } from './messageKey/alpha-message-key.component';
import { AlphaDynamicValidatorComponent } from './dynamic/alpha-dynamic.component';
import { AlphaAddValidatorComponent } from './add/alpha-add.component';

@NgModule({
  declarations: [
	AlphaCompleteValidatorComponent,
	AlphaConditionalExpressionValidatorComponent,
	AlphaLocaleValidatorComponent,
	AlphaAllowWhiteSpaceValidatorComponent,
	AlphaMessageValidatorComponent,
	AlphaMessageKeyValidatorComponent,
	AlphaDynamicValidatorComponent,
	AlphaAddValidatorComponent,
  ],
entryComponents: [
	AlphaCompleteValidatorComponent,
	AlphaConditionalExpressionValidatorComponent,
	AlphaLocaleValidatorComponent,
	AlphaAllowWhiteSpaceValidatorComponent,
	AlphaMessageValidatorComponent,
	AlphaMessageKeyValidatorComponent,
	AlphaDynamicValidatorComponent,
	AlphaAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaCompleteValidatorComponent,
	AlphaConditionalExpressionValidatorComponent,
	AlphaLocaleValidatorComponent,
	AlphaAllowWhiteSpaceValidatorComponent,
	AlphaMessageValidatorComponent,
	AlphaMessageKeyValidatorComponent,
	AlphaDynamicValidatorComponent,
	AlphaAddValidatorComponent,
  ],

})
export class  AlphaValidatorsExtendedModule { }
