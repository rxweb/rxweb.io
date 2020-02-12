import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericCompleteValidatorComponent } from './complete/alpha-numeric-complete.component';
import { AlphaNumericAllowWhiteSpaceValidatorComponent } from './allowWhiteSpace/alpha-numeric-allow-white-space.component';
import { AlphaNumericLocaleValidatorComponent } from './locale/alpha-numeric-locale.component';
import { AlphaNumericMessageValidatorComponent } from './message/alpha-numeric-message.component';
import { AlphaNumericConditionalExpressionValidatorComponent } from './conditionalExpression/alpha-numeric-conditional-expression.component';
import { AlphaNumericMessageKeyValidatorComponent } from './messageKey/alpha-numeric-message-key.component';
import { AlphaNumericDynamicValidatorComponent } from './dynamic/alpha-numeric-dynamic.component';
import { AlphaNumericAddValidatorComponent } from './add/alpha-numeric-add.component';

@NgModule({
  declarations: [
	AlphaNumericCompleteValidatorComponent,
	AlphaNumericAllowWhiteSpaceValidatorComponent,
	AlphaNumericLocaleValidatorComponent,
	AlphaNumericMessageValidatorComponent,
	AlphaNumericConditionalExpressionValidatorComponent,
	AlphaNumericMessageKeyValidatorComponent,
	AlphaNumericDynamicValidatorComponent,
	AlphaNumericAddValidatorComponent,
  ],
entryComponents: [
	AlphaNumericCompleteValidatorComponent,
	AlphaNumericAllowWhiteSpaceValidatorComponent,
	AlphaNumericLocaleValidatorComponent,
	AlphaNumericMessageValidatorComponent,
	AlphaNumericConditionalExpressionValidatorComponent,
	AlphaNumericMessageKeyValidatorComponent,
	AlphaNumericDynamicValidatorComponent,
	AlphaNumericAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericCompleteValidatorComponent,
	AlphaNumericAllowWhiteSpaceValidatorComponent,
	AlphaNumericLocaleValidatorComponent,
	AlphaNumericMessageValidatorComponent,
	AlphaNumericConditionalExpressionValidatorComponent,
	AlphaNumericMessageKeyValidatorComponent,
	AlphaNumericDynamicValidatorComponent,
	AlphaNumericAddValidatorComponent,
  ],

})
export class  AlphaNumericValidatorsExtendedModule { }
