import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { CusipCompleteTemplateDrivenValidationDirectivesComponent } from './complete/cusip-complete.component';
import { CusipConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/cusip-conditional-expression.component';
import { CusipMessageTemplateDrivenValidationDirectivesComponent } from './message/cusip-message.component';
import { CusipMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/cusip-message-key.component';
import { CusipAddTemplateDrivenValidationDirectivesComponent } from './add/cusip-add.component';

@NgModule({
  declarations: [
	CusipCompleteTemplateDrivenValidationDirectivesComponent,
	CusipConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CusipMessageTemplateDrivenValidationDirectivesComponent,
	CusipMessageKeyTemplateDrivenValidationDirectivesComponent,
	CusipAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	CusipCompleteTemplateDrivenValidationDirectivesComponent,
	CusipConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CusipMessageTemplateDrivenValidationDirectivesComponent,
	CusipMessageKeyTemplateDrivenValidationDirectivesComponent,
	CusipAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CusipCompleteTemplateDrivenValidationDirectivesComponent,
	CusipConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CusipMessageTemplateDrivenValidationDirectivesComponent,
	CusipMessageKeyTemplateDrivenValidationDirectivesComponent,
	CusipAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  CusipTemplateDrivenValidationDirectivesExtendedModule { }
