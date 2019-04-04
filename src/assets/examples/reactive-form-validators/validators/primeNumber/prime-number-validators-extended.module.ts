import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { PrimeNumberCompleteValidatorComponent } from './complete/prime-number-complete.component';
import { PrimeNumberConditionalExpressionValidatorComponent } from './conditionalExpression/prime-number-conditional-expression.component';
import { PrimeNumberMessageValidatorComponent } from './message/prime-number-message.component';
import { PrimeNumberMessageKeyValidatorComponent } from './messageKey/prime-number-message-key.component';
import { PrimeNumberDynamicValidatorComponent } from './dynamic/prime-number-dynamic.component';
import { PrimeNumberAddValidatorComponent } from './add/prime-number-add.component';

@NgModule({
  declarations: [
	PrimeNumberCompleteValidatorComponent,
	PrimeNumberConditionalExpressionValidatorComponent,
	PrimeNumberMessageValidatorComponent,
	PrimeNumberMessageKeyValidatorComponent,
	PrimeNumberDynamicValidatorComponent,
	PrimeNumberAddValidatorComponent,
  ],
entryComponents: [
	PrimeNumberCompleteValidatorComponent,
	PrimeNumberConditionalExpressionValidatorComponent,
	PrimeNumberMessageValidatorComponent,
	PrimeNumberMessageKeyValidatorComponent,
	PrimeNumberDynamicValidatorComponent,
	PrimeNumberAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PrimeNumberCompleteValidatorComponent,
	PrimeNumberConditionalExpressionValidatorComponent,
	PrimeNumberMessageValidatorComponent,
	PrimeNumberMessageKeyValidatorComponent,
	PrimeNumberDynamicValidatorComponent,
	PrimeNumberAddValidatorComponent,
  ],

})
export class  PrimeNumberValidatorsExtendedModule { }
