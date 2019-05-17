import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { MaxTimeCompleteValidatorComponent } from './complete/max-time-complete.component';
import { MaxTimeValueValidatorComponent } from './value/max-time-value.component';
import { MaxTimeConditionalExpressionValidatorComponent } from './conditionalExpression/max-time-conditional-expression.component';
import { MaxTimeAllowSecondsValidatorComponent } from './allowSeconds/max-time-allow-seconds.component';
import { MaxTimeMessageValidatorComponent } from './message/max-time-message.component';
import { MaxTimeFieldNameValidatorComponent } from './fieldName/max-time-field-name.component';
import { MaxTimeMessageKeyValidatorComponent } from './messageKey/max-time-message-key.component';
import { MaxTimeDynamicValidatorComponent } from './dynamic/max-time-dynamic.component';
import { MaxTimeAddValidatorComponent } from './add/max-time-add.component';
import { MaxTimeOperatorValidatorComponent } from './operator/max-time-operator.component';

@NgModule({
  declarations: [
	MaxTimeCompleteValidatorComponent,
	MaxTimeValueValidatorComponent,
	MaxTimeConditionalExpressionValidatorComponent,
	MaxTimeAllowSecondsValidatorComponent,
	MaxTimeMessageValidatorComponent,
	MaxTimeFieldNameValidatorComponent,
	MaxTimeMessageKeyValidatorComponent,
	MaxTimeDynamicValidatorComponent,
	MaxTimeAddValidatorComponent,
	MaxTimeOperatorValidatorComponent
  ],
entryComponents: [
	MaxTimeCompleteValidatorComponent,
	MaxTimeValueValidatorComponent,
	MaxTimeConditionalExpressionValidatorComponent,
	MaxTimeAllowSecondsValidatorComponent,
	MaxTimeMessageValidatorComponent,
	MaxTimeFieldNameValidatorComponent,
	MaxTimeMessageKeyValidatorComponent,
	MaxTimeDynamicValidatorComponent,
	MaxTimeAddValidatorComponent,
	MaxTimeOperatorValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxTimeCompleteValidatorComponent,
	MaxTimeValueValidatorComponent,
	MaxTimeConditionalExpressionValidatorComponent,
	MaxTimeAllowSecondsValidatorComponent,
	MaxTimeMessageValidatorComponent,
	MaxTimeFieldNameValidatorComponent,
	MaxTimeMessageKeyValidatorComponent,
	MaxTimeDynamicValidatorComponent,
	MaxTimeAddValidatorComponent,
	MaxTimeOperatorValidatorComponent
  ],

})
export class  MaxTimeValidatorsExtendedModule { }
