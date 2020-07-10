import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { OneOfCompleteValidatorComponent } from './complete/one-of-complete.component';
import { OneOfMessageValidatorComponent } from './message/one-of-message.component';
import { OneOfAddValidatorComponent } from './add/one-of-add.component';
import { OneOfConditionalExpressionValidatorComponent } from './conditionalExpression/one-of-conditonal-expression.component';
import { OneOfMatchValuesValidatorComponent } from './matchValues/one-of-match-values.component';
import { OneOfDynamicValidatorComponent } from './dynamic/one-of-dynamic.component';
import { OneOfMessageKeyValidatorComponent } from './messageKey/one-of-message-key.component';

@NgModule({
  declarations: [
    OneOfCompleteValidatorComponent,
    OneOfConditionalExpressionValidatorComponent,
    OneOfMatchValuesValidatorComponent,
    OneOfMessageValidatorComponent,
    OneOfDynamicValidatorComponent,
    OneOfAddValidatorComponent,
    OneOfMessageKeyValidatorComponent
  ],
  entryComponents: [
    OneOfCompleteValidatorComponent,
    OneOfConditionalExpressionValidatorComponent,
    OneOfMatchValuesValidatorComponent,
    OneOfMessageValidatorComponent,
    OneOfDynamicValidatorComponent,
    OneOfAddValidatorComponent,
    OneOfMessageKeyValidatorComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OneOfCompleteValidatorComponent,
    OneOfConditionalExpressionValidatorComponent,
    OneOfMatchValuesValidatorComponent,
    OneOfMessageValidatorComponent,
    OneOfDynamicValidatorComponent,
    OneOfAddValidatorComponent,
    OneOfMessageKeyValidatorComponent
  ],

})
export class OneOfValidatorsExtendedModule { }
