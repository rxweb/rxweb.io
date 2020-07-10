import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { CreditCardCompleteTemplateDrivenValidationDirectivesComponent } from './complete/credit-card-complete.component';
import { CreditCardFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/credit-card-field-name.component';
import { CreditCardConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/credit-card-conditional-expression.component';
import { CreditCardMessageTemplateDrivenValidationDirectivesComponent } from './message/credit-card-message.component';
import { CreditCardMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/credit-card-message-key.component';
import { CreditCardAddTemplateDrivenValidationDirectivesComponent } from './add/credit-card-add.component';

@NgModule({
  declarations: [
	CreditCardCompleteTemplateDrivenValidationDirectivesComponent,
	CreditCardFieldNameTemplateDrivenValidationDirectivesComponent,
	CreditCardConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageKeyTemplateDrivenValidationDirectivesComponent,
	CreditCardAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	CreditCardCompleteTemplateDrivenValidationDirectivesComponent,
	CreditCardFieldNameTemplateDrivenValidationDirectivesComponent,
	CreditCardConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageKeyTemplateDrivenValidationDirectivesComponent,
	CreditCardAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CreditCardCompleteTemplateDrivenValidationDirectivesComponent,
	CreditCardFieldNameTemplateDrivenValidationDirectivesComponent,
	CreditCardConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageTemplateDrivenValidationDirectivesComponent,
	CreditCardMessageKeyTemplateDrivenValidationDirectivesComponent,
	CreditCardAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  CreditCardTemplateDrivenValidationDirectivesExtendedModule { }
