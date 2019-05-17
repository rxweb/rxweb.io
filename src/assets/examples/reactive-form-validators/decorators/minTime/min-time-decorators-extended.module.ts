import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { MinTimeCompleteComponent } from './complete/min-time-complete.component';
import { MinTimeValueComponent } from './value/min-time-value.component';
import { MinTimeConditionalExpressionComponent } from './conditionalExpression/min-time-conditional-expression.component';
import { MinTimeFieldNameComponent } from './fieldName/min-time-field-name.component';
import { MinTimeAllowSecondsComponent } from './allowSeconds/min-time-allow-seconds.component';
import { MinTimeMessageComponent } from './message/min-time-message.component';
import { MinTimeMessageKeyComponent } from './messageKey/min-time-message-key.component';
import { MinTimeDynamicComponent } from './dynamic/min-time-dynamic.component';
import { MinTimeAddComponent } from './add/min-time-add.component';
import { MinTimeEditComponent } from './edit/min-time-edit.component';
import { MinTimeOperatorComponent } from './operator/min-time-operator.component';

@NgModule({
  declarations: [
	MinTimeCompleteComponent,
	MinTimeValueComponent,
	MinTimeConditionalExpressionComponent,
	MinTimeFieldNameComponent,
	MinTimeAllowSecondsComponent,
	MinTimeMessageComponent,
	MinTimeMessageKeyComponent,
	MinTimeDynamicComponent,
	MinTimeAddComponent,
	MinTimeEditComponent,
	MinTimeOperatorComponent
  ],
entryComponents: [
	MinTimeCompleteComponent,
	MinTimeValueComponent,
	MinTimeConditionalExpressionComponent,
	MinTimeFieldNameComponent,
	MinTimeAllowSecondsComponent,
	MinTimeMessageComponent,
	MinTimeMessageKeyComponent,
	MinTimeDynamicComponent,
	MinTimeAddComponent,
	MinTimeEditComponent,
	MinTimeOperatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinTimeCompleteComponent,
	MinTimeValueComponent,
	MinTimeConditionalExpressionComponent,
	MinTimeFieldNameComponent,
	MinTimeAllowSecondsComponent,
	MinTimeMessageComponent,
	MinTimeMessageKeyComponent,
	MinTimeDynamicComponent,
	MinTimeAddComponent,
	MinTimeEditComponent,
	MinTimeOperatorComponent
  ],

})
export class  MinTimeDecoratorsExtendedModule { }
