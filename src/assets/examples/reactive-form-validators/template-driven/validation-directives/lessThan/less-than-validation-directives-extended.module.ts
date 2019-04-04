import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LessThanCompleteTemplateDrivenValidationDirectivesComponent } from './complete/less-than-complete.component';
import { LessThanFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/less-than-field-name.component';
import { LessThanConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/less-than-conditional-expression.component';
import { LessThanMessageTemplateDrivenValidationDirectivesComponent } from './message/less-than-message.component';
import { LessThanMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/less-than-message-key.component';
import { LessThanAddTemplateDrivenValidationDirectivesComponent } from './add/less-than-add.component';

@NgModule({
  declarations: [
	LessThanCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanMessageTemplateDrivenValidationDirectivesComponent,
	LessThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LessThanCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanMessageTemplateDrivenValidationDirectivesComponent,
	LessThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanMessageTemplateDrivenValidationDirectivesComponent,
	LessThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LessThanTemplateDrivenValidationDirectivesExtendedModule { }
