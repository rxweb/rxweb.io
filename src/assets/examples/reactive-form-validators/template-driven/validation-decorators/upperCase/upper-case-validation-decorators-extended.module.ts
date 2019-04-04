import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { UpperCaseCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/upper-case-complete.component';
import { UpperCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/upper-case-conditional-expression.component';
import { UpperCaseMessageTemplateDrivenValidationDecoratorsComponent } from './message/upper-case-message.component';
import { UpperCaseMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/upper-case-message-key.component';
import { UpperCaseAddTemplateDrivenValidationDecoratorsComponent } from './add/upper-case-add.component';

@NgModule({
  declarations: [
	UpperCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	UpperCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UpperCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	UpperCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	UpperCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UpperCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UpperCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	UpperCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageTemplateDrivenValidationDecoratorsComponent,
	UpperCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UpperCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  UpperCaseTemplateDrivenValidationDecoratorsExtendedModule { }
