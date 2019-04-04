import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { DigitCompleteValidatorComponent } from './complete/digit-complete.component';
import { DigitConditionalExpressionValidatorComponent } from './conditionalExpression/digit-conditional-expression.component';
import { DigitMessageValidatorComponent } from './message/digit-message.component';
import { DigitMessageKeyValidatorComponent } from './messageKey/digit-message-key.component';
import { DigitDynamicValidatorComponent } from './dynamic/digit-dynamic.component';
import { DigitAddValidatorComponent } from './add/digit-add.component';

@NgModule({
  declarations: [
	DigitCompleteValidatorComponent,
	DigitConditionalExpressionValidatorComponent,
	DigitMessageValidatorComponent,
	DigitMessageKeyValidatorComponent,
	DigitDynamicValidatorComponent,
	DigitAddValidatorComponent,
  ],
entryComponents: [
	DigitCompleteValidatorComponent,
	DigitConditionalExpressionValidatorComponent,
	DigitMessageValidatorComponent,
	DigitMessageKeyValidatorComponent,
	DigitDynamicValidatorComponent,
	DigitAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DigitCompleteValidatorComponent,
	DigitConditionalExpressionValidatorComponent,
	DigitMessageValidatorComponent,
	DigitMessageKeyValidatorComponent,
	DigitDynamicValidatorComponent,
	DigitAddValidatorComponent,
  ],

})
export class  DigitValidatorsExtendedModule { }
