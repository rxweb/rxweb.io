import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { MinTimeCompleteValidatorComponent } from './complete/min-time-complete.component';
import { MinTimeValueValidatorComponent } from './value/min-time-value.component';
import { MinTimeConditionalExpressionValidatorComponent } from './conditionalExpression/min-time-conditional-expression.component';
import { MinTimeFieldNameValidatorComponent } from './fieldName/min-time-field-name.component';
import { MinTimeAllowSecondsValidatorComponent } from './allowSeconds/min-time-allow-seconds.component';
import { MinTimeMessageValidatorComponent } from './message/min-time-message.component';
import { MinTimeMessageKeyValidatorComponent } from './messageKey/min-time-message-key.component';
import { MinTimeDynamicValidatorComponent } from './dynamic/min-time-dynamic.component';
import { MinTimeAddValidatorComponent } from './add/min-time-add.component';
import { MinTimeOperatorValidatorComponent } from './operator/min-time-operator.component';

@NgModule({
  declarations: [
	MinTimeCompleteValidatorComponent,
	MinTimeValueValidatorComponent,
	MinTimeConditionalExpressionValidatorComponent,
	MinTimeFieldNameValidatorComponent,
	MinTimeAllowSecondsValidatorComponent,
	MinTimeMessageValidatorComponent,
	MinTimeMessageKeyValidatorComponent,
	MinTimeDynamicValidatorComponent,
	MinTimeAddValidatorComponent,
	MinTimeOperatorValidatorComponent
  ],
entryComponents: [
	MinTimeCompleteValidatorComponent,
	MinTimeValueValidatorComponent,
	MinTimeConditionalExpressionValidatorComponent,
	MinTimeFieldNameValidatorComponent,
	MinTimeAllowSecondsValidatorComponent,
	MinTimeMessageValidatorComponent,
	MinTimeMessageKeyValidatorComponent,
	MinTimeDynamicValidatorComponent,
	MinTimeAddValidatorComponent,
	MinTimeOperatorValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinTimeCompleteValidatorComponent,
	MinTimeValueValidatorComponent,
	MinTimeConditionalExpressionValidatorComponent,
	MinTimeFieldNameValidatorComponent,
	MinTimeAllowSecondsValidatorComponent,
	MinTimeMessageValidatorComponent,
	MinTimeMessageKeyValidatorComponent,
	MinTimeDynamicValidatorComponent,
	MinTimeAddValidatorComponent,
	MinTimeOperatorValidatorComponent
  ],

})
export class  MinTimeValidatorsExtendedModule { }
	