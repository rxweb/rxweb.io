import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { EmailCompleteTemplateDrivenValidationDirectivesComponent } from './complete/email-complete.component';
import { EmailConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/email-conditional-expression.component';
import { EmailMessageTemplateDrivenValidationDirectivesComponent } from './message/email-message.component';
import { EmailMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/email-message-key.component';
import { EmailAddTemplateDrivenValidationDirectivesComponent } from './add/email-add.component';

@NgModule({
  declarations: [
	EmailCompleteTemplateDrivenValidationDirectivesComponent,
	EmailConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	EmailMessageTemplateDrivenValidationDirectivesComponent,
	EmailMessageKeyTemplateDrivenValidationDirectivesComponent,
	EmailAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	EmailCompleteTemplateDrivenValidationDirectivesComponent,
	EmailConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	EmailMessageTemplateDrivenValidationDirectivesComponent,
	EmailMessageKeyTemplateDrivenValidationDirectivesComponent,
	EmailAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	EmailCompleteTemplateDrivenValidationDirectivesComponent,
	EmailConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	EmailMessageTemplateDrivenValidationDirectivesComponent,
	EmailMessageKeyTemplateDrivenValidationDirectivesComponent,
	EmailAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  EmailTemplateDrivenValidationDirectivesExtendedModule { }
