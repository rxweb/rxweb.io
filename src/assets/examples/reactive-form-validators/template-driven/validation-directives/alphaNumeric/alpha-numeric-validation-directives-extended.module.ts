import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericCompleteTemplateDrivenValidationDirectivesComponent } from './complete/alpha-numeric-complete.component';
import { AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent } from './allowWhiteSpace/alpha-numeric-allow-white-space.component';
import { AlphaNumericMessageTemplateDrivenValidationDirectivesComponent } from './message/alpha-numeric-message.component';
import { AlphaNumericConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/alpha-numeric-conditional-expression.component';
import { AlphaNumericMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/alpha-numeric-message-key.component';
import { AlphaNumericAddTemplateDrivenValidationDirectivesComponent } from './add/alpha-numeric-add.component';

@NgModule({
  declarations: [
	AlphaNumericCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageTemplateDrivenValidationDirectivesComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	AlphaNumericCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageTemplateDrivenValidationDirectivesComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericCompleteTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageTemplateDrivenValidationDirectivesComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	AlphaNumericAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  AlphaNumericTemplateDrivenValidationDirectivesExtendedModule { }
