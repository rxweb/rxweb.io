import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LessThanEqualToCompleteValidatorComponent } from './complete/less-than-equal-to-complete.component';
import { LessThanEqualToFieldNameValidatorComponent } from './fieldName/less-than-equal-to-field-name.component';
import { LessThanEqualToConditionalExpressionValidatorComponent } from './conditionalExpression/less-than-equal-to-conditional-expression.component';
import { LessThanEqualToMessageValidatorComponent } from './message/less-than-equal-to-message.component';
import { LessThanEqualToValueValidatorComponent } from './value/less-than-equal-to-value.component';
import { LessThanEqualToMessageKeyValidatorComponent } from './messageKey/less-than-equal-to-message-key.component';
import { LessThanEqualToDynamicValidatorComponent } from './dynamic/less-than-equal-to-dynamic.component';
import { LessThanEqualToAddValidatorComponent } from './add/less-than-equal-to-add.component';

@NgModule({
  declarations: [
	LessThanEqualToCompleteValidatorComponent,
	LessThanEqualToFieldNameValidatorComponent,
	LessThanEqualToConditionalExpressionValidatorComponent,
	LessThanEqualToMessageValidatorComponent,
	LessThanEqualToValueValidatorComponent,
	LessThanEqualToMessageKeyValidatorComponent,
	LessThanEqualToDynamicValidatorComponent,
	LessThanEqualToAddValidatorComponent,
  ],
entryComponents: [
	LessThanEqualToCompleteValidatorComponent,
	LessThanEqualToFieldNameValidatorComponent,
	LessThanEqualToConditionalExpressionValidatorComponent,
	LessThanEqualToMessageValidatorComponent,
	LessThanEqualToValueValidatorComponent,
	LessThanEqualToMessageKeyValidatorComponent,
	LessThanEqualToDynamicValidatorComponent,
	LessThanEqualToAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanEqualToCompleteValidatorComponent,
	LessThanEqualToFieldNameValidatorComponent,
	LessThanEqualToConditionalExpressionValidatorComponent,
	LessThanEqualToMessageValidatorComponent,
	LessThanEqualToValueValidatorComponent,
	LessThanEqualToMessageKeyValidatorComponent,
	LessThanEqualToDynamicValidatorComponent,
	LessThanEqualToAddValidatorComponent,
  ],

})
export class  LessThanEqualToValidatorsExtendedModule { }
