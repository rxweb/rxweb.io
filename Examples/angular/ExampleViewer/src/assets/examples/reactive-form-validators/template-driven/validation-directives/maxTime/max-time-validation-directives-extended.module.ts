import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaxTimeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/max-time-complete.component';
import { MaxTimeValueTemplateDrivenValidationDirectivesComponent } from './value/max-time-value.component';
import { MaxTimeOperatorTemplateDrivenValidationDirectivesComponent } from './operator/max-time-operator.component';
import { MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/max-time-conditional-expression.component';
import { MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent } from './allowSeconds/max-time-allow-seconds.component';
import { MaxTimeMessageTemplateDrivenValidationDirectivesComponent } from './message/max-time-message.component';
import { MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/max-time-field-name.component';
import { MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/max-time-message-key.component';
import { MaxTimeAddTemplateDrivenValidationDirectivesComponent } from './add/max-time-add.component';

@NgModule({
  declarations: [
	MaxTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MaxTimeValueTemplateDrivenValidationDirectivesComponent,
	MaxTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageTemplateDrivenValidationDirectivesComponent,
	MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaxTimeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MaxTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MaxTimeValueTemplateDrivenValidationDirectivesComponent,
	MaxTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageTemplateDrivenValidationDirectivesComponent,
	MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaxTimeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaxTimeCompleteTemplateDrivenValidationDirectivesComponent,
	MaxTimeValueTemplateDrivenValidationDirectivesComponent,
	MaxTimeOperatorTemplateDrivenValidationDirectivesComponent,
	MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageTemplateDrivenValidationDirectivesComponent,
	MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent,
	MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaxTimeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MaxTimeTemplateDrivenValidationDirectivesExtendedModule { }
