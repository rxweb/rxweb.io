import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { ContainsCompleteTemplateDrivenValidationDirectivesComponent } from './complete/contains-complete.component';
import { ContainsValueTemplateDrivenValidationDirectivesComponent } from './value/contains-value.component';
import { ContainsConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/contains-conditional-expression.component';
import { ContainsMessageTemplateDrivenValidationDirectivesComponent } from './message/contains-message.component';
import { ContainsMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/contains-message-key.component';
import { ContainsAddTemplateDrivenValidationDirectivesComponent } from './add/contains-add.component';

@NgModule({
  declarations: [
	ContainsCompleteTemplateDrivenValidationDirectivesComponent,
	ContainsValueTemplateDrivenValidationDirectivesComponent,
	ContainsConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ContainsMessageTemplateDrivenValidationDirectivesComponent,
	ContainsMessageKeyTemplateDrivenValidationDirectivesComponent,
	ContainsAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	ContainsCompleteTemplateDrivenValidationDirectivesComponent,
	ContainsValueTemplateDrivenValidationDirectivesComponent,
	ContainsConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ContainsMessageTemplateDrivenValidationDirectivesComponent,
	ContainsMessageKeyTemplateDrivenValidationDirectivesComponent,
	ContainsAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ContainsCompleteTemplateDrivenValidationDirectivesComponent,
	ContainsValueTemplateDrivenValidationDirectivesComponent,
	ContainsConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ContainsMessageTemplateDrivenValidationDirectivesComponent,
	ContainsMessageKeyTemplateDrivenValidationDirectivesComponent,
	ContainsAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  ContainsTemplateDrivenValidationDirectivesExtendedModule { }
