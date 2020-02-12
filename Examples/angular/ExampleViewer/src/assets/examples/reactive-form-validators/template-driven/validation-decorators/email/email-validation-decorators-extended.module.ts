import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { EmailCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/email-complete.component';
import { EmailConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/email-conditional-expression.component';
import { EmailMessageTemplateDrivenValidationDecoratorsComponent } from './message/email-message.component';
import { EmailMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/email-message-key.component';
import { EmailAddTemplateDrivenValidationDecoratorsComponent } from './add/email-add.component';

@NgModule({
  declarations: [
	EmailCompleteTemplateDrivenValidationDecoratorsComponent,
	EmailConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	EmailMessageTemplateDrivenValidationDecoratorsComponent,
	EmailMessageKeyTemplateDrivenValidationDecoratorsComponent,
	EmailAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	EmailCompleteTemplateDrivenValidationDecoratorsComponent,
	EmailConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	EmailMessageTemplateDrivenValidationDecoratorsComponent,
	EmailMessageKeyTemplateDrivenValidationDecoratorsComponent,
	EmailAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	EmailCompleteTemplateDrivenValidationDecoratorsComponent,
	EmailConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	EmailMessageTemplateDrivenValidationDecoratorsComponent,
	EmailMessageKeyTemplateDrivenValidationDecoratorsComponent,
	EmailAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  EmailTemplateDrivenValidationDecoratorsExtendedModule { }
