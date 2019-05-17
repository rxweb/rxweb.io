import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { MaxTimeCompleteComponent } from './complete/max-time-complete.component';
import { MaxTimeValueComponent } from './value/max-time-value.component';
import { MaxTimeConditionalExpressionComponent } from './conditionalExpression/max-time-conditional-expression.component';
import { MaxTimeAllowSecondsComponent } from './allowSeconds/max-time-allow-seconds.component';
import { MaxTimeMessageComponent } from './message/max-time-message.component';
import { MaxTimeFieldNameComponent } from './fieldName/max-time-field-name.component';
import { MaxTimeMessageKeyComponent } from './messageKey/max-time-message-key.component';
import { MaxTimeDynamicComponent } from './dynamic/max-time-dynamic.component';
import { MaxTimeAddComponent } from './add/max-time-add.component';
import { MaxTimeEditComponent } from './edit/max-time-edit.component';
import { MaxTimeOperatorComponent } from './operator/max-time-operator.component';


@NgModule({
  declarations: [
	MaxTimeCompleteComponent,
	MaxTimeValueComponent,
	MaxTimeConditionalExpressionComponent,
	MaxTimeAllowSecondsComponent,
	MaxTimeMessageComponent,
	MaxTimeFieldNameComponent,
	MaxTimeMessageKeyComponent,
	MaxTimeDynamicComponent,
	MaxTimeAddComponent,
	MaxTimeEditComponent,
	MaxTimeOperatorComponent
  ],
entryComponents: [
	MaxTimeCompleteComponent,
	MaxTimeValueComponent,
	MaxTimeConditionalExpressionComponent,
	MaxTimeAllowSecondsComponent,
	MaxTimeMessageComponent,
	MaxTimeFieldNameComponent,
	MaxTimeMessageKeyComponent,
	MaxTimeDynamicComponent,
	MaxTimeAddComponent,
	MaxTimeEditComponent,
	MaxTimeOperatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxTimeCompleteComponent,
	MaxTimeValueComponent,
	MaxTimeConditionalExpressionComponent,
	MaxTimeAllowSecondsComponent,
	MaxTimeMessageComponent,
	MaxTimeFieldNameComponent,
	MaxTimeMessageKeyComponent,
	MaxTimeDynamicComponent,
	MaxTimeAddComponent,
	MaxTimeEditComponent,
	MaxTimeOperatorComponent
  ],

})
export class  MaxTimeDecoratorsExtendedModule { }
