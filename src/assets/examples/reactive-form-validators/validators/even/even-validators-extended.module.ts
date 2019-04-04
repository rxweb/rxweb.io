import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { EvenCompleteValidatorComponent } from './complete/even-complete.component';
import { EvenConditionalExpressionValidatorComponent } from './conditionalExpression/even-conditional-expression.component';
import { EvenMessageValidatorComponent } from './message/even-message.component';
import { EvenMessageKeyValidatorComponent } from './messageKey/even-message-key.component';
import { EvenDynamicValidatorComponent } from './dynamic/even-dynamic.component';
import { EvenAddValidatorComponent } from './add/even-add.component';

@NgModule({
  declarations: [
	EvenCompleteValidatorComponent,
	EvenConditionalExpressionValidatorComponent,
	EvenMessageValidatorComponent,
	EvenMessageKeyValidatorComponent,
	EvenDynamicValidatorComponent,
	EvenAddValidatorComponent,
  ],
entryComponents: [
	EvenCompleteValidatorComponent,
	EvenConditionalExpressionValidatorComponent,
	EvenMessageValidatorComponent,
	EvenMessageKeyValidatorComponent,
	EvenDynamicValidatorComponent,
	EvenAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	EvenCompleteValidatorComponent,
	EvenConditionalExpressionValidatorComponent,
	EvenMessageValidatorComponent,
	EvenMessageKeyValidatorComponent,
	EvenDynamicValidatorComponent,
	EvenAddValidatorComponent,
  ],

})
export class  EvenValidatorsExtendedModule { }
