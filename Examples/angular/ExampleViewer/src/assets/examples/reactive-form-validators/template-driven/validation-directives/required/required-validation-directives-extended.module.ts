import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { RequiredCompleteTemplateDrivenValidationDirectivesComponent } from './complete/required-complete.component';
import { RequiredConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/required-conditional-expression.component';
import { RequiredMessageTemplateDrivenValidationDirectivesComponent } from './message/required-message.component';
import { RequiredMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/required-message-key.component';
import { RequiredAddTemplateDrivenValidationDirectivesComponent } from './add/required-add.component';

@NgModule({
  declarations: [
	RequiredCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredMessageTemplateDrivenValidationDirectivesComponent,
	RequiredMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	RequiredCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredMessageTemplateDrivenValidationDirectivesComponent,
	RequiredMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RequiredCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredMessageTemplateDrivenValidationDirectivesComponent,
	RequiredMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  RequiredTemplateDrivenValidationDirectivesExtendedModule { }
