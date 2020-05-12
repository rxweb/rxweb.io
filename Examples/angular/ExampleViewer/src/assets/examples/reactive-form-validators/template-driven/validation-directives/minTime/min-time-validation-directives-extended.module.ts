import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinTimeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/min-time-complete.component';
import { MinTimeValueTemplateDrivenValidationDirectivesComponent } from './value/min-time-value.component';
import { MinTimeOperatorTemplateDrivenValidationDirectivesComponent } from './operator/min-time-operator.component';
import { MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/min-time-conditional-expression.component';
import { MinTimeFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/min-time-field-name.component';
import { MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent } from './allowSeconds/min-time-allow-seconds.component';
import { MinTimeMessageTemplateDrivenValidationDirectivesComponent } from './message/min-time-message.component';
import { MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/min-time-message-key.component';
import { MinTimeAddTemplateDrivenValidationDirectivesComponent } from './add/min-time-add.component';

@NgModule({
  declarations: [
	MinTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MinTimeValueTemplateDrivenValidationDirectivesComponent,
	MinTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinTimeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MinTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MinTimeValueTemplateDrivenValidationDirectivesComponent,
	MinTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinTimeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MinTimeValueTemplateDrivenValidationDirectivesComponent,
	MinTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageTemplateDrivenValidationDirectivesComponent,
	MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinTimeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MinTimeTemplateDrivenValidationDirectivesExtendedModule { }
