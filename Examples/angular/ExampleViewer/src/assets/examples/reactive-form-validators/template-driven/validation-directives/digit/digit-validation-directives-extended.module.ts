import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { DigitCompleteTemplateDrivenValidationDirectivesComponent } from './complete/digit-complete.component';
import { DigitConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/digit-conditional-expression.component';
import { DigitMessageTemplateDrivenValidationDirectivesComponent } from './message/digit-message.component';
import { DigitMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/digit-message-key.component';
import { DigitAddTemplateDrivenValidationDirectivesComponent } from './add/digit-add.component';

@NgModule({
  declarations: [
	DigitCompleteTemplateDrivenValidationDirectivesComponent,
	DigitConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DigitMessageTemplateDrivenValidationDirectivesComponent,
	DigitMessageKeyTemplateDrivenValidationDirectivesComponent,
	DigitAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	DigitCompleteTemplateDrivenValidationDirectivesComponent,
	DigitConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DigitMessageTemplateDrivenValidationDirectivesComponent,
	DigitMessageKeyTemplateDrivenValidationDirectivesComponent,
	DigitAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DigitCompleteTemplateDrivenValidationDirectivesComponent,
	DigitConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DigitMessageTemplateDrivenValidationDirectivesComponent,
	DigitMessageKeyTemplateDrivenValidationDirectivesComponent,
	DigitAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  DigitTemplateDrivenValidationDirectivesExtendedModule { }
