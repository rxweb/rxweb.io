import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent } from './complete/required-true-complete.component';
import { RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/required-true-conditional-expression.component';
import { RequiredTrueMessageTemplateDrivenValidationDirectivesComponent } from './message/required-true-message.component';
import { RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/required-true-message-key.component';
import { RequiredTrueAddTemplateDrivenValidationDirectivesComponent } from './add/required-true-add.component';

@NgModule({
  declarations: [
	RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredTrueAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredTrueAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent,
	RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageTemplateDrivenValidationDirectivesComponent,
	RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent,
	RequiredTrueAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  RequiredTrueTemplateDrivenValidationDirectivesExtendedModule { }
