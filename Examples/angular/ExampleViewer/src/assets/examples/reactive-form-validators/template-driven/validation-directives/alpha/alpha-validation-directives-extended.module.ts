import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AlphaCompleteTemplateDrivenValidationDirectivesComponent } from './complete/alpha-complete.component';
import { AlphaConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/alpha-conditional-expression.component';
import { AlphaAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent } from './allowWhiteSpace/alpha-allow-white-space.component';
import { AlphaMessageTemplateDrivenValidationDirectivesComponent } from './message/alpha-message.component';
import { AlphaMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/alpha-message-key.component';
import { AlphaAddTemplateDrivenValidationDirectivesComponent } from './add/alpha-add.component';
import { AlphaLocaleTemplateDrivenValidationDirectivesComponent } from './locale/alpha-locale.component';

@NgModule({
  declarations: [
	AlphaCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaMessageTemplateDrivenValidationDirectivesComponent,
	AlphaMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaAddTemplateDrivenValidationDirectivesComponent,
	AlphaLocaleTemplateDrivenValidationDirectivesComponent
  ],
entryComponents: [
	AlphaCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaMessageTemplateDrivenValidationDirectivesComponent,
	AlphaMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaAddTemplateDrivenValidationDirectivesComponent,
	AlphaLocaleTemplateDrivenValidationDirectivesComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaMessageTemplateDrivenValidationDirectivesComponent,
	AlphaMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaAddTemplateDrivenValidationDirectivesComponent,
	AlphaLocaleTemplateDrivenValidationDirectivesComponent
  ],

})
export class  AlphaTemplateDrivenValidationDirectivesExtendedModule { }
