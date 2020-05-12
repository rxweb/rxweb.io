import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LowerCaseCompleteTemplateDrivenValidationDirectivesComponent } from './complete/lower-case-complete.component';
import { LowerCaseConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/lower-case-conditional-expression.component';
import { LowerCaseMessageTemplateDrivenValidationDirectivesComponent } from './message/lower-case-message.component';
import { LowerCaseMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/lower-case-message-key.component';
import { LowerCaseAddTemplateDrivenValidationDirectivesComponent } from './add/lower-case-add.component';

@NgModule({
  declarations: [
	LowerCaseCompleteTemplateDrivenValidationDirectivesComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDirectivesComponent,
	LowerCaseAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LowerCaseCompleteTemplateDrivenValidationDirectivesComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDirectivesComponent,
	LowerCaseAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LowerCaseCompleteTemplateDrivenValidationDirectivesComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageTemplateDrivenValidationDirectivesComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDirectivesComponent,
	LowerCaseAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LowerCaseTemplateDrivenValidationDirectivesExtendedModule { }
