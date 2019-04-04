import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { DigitCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/digit-complete.component';
import { DigitConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/digit-conditional-expression.component';
import { DigitMessageTemplateDrivenValidationDecoratorsComponent } from './message/digit-message.component';
import { DigitMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/digit-message-key.component';
import { DigitAddTemplateDrivenValidationDecoratorsComponent } from './add/digit-add.component';

@NgModule({
  declarations: [
	DigitCompleteTemplateDrivenValidationDecoratorsComponent,
	DigitConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DigitMessageTemplateDrivenValidationDecoratorsComponent,
	DigitMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DigitAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	DigitCompleteTemplateDrivenValidationDecoratorsComponent,
	DigitConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DigitMessageTemplateDrivenValidationDecoratorsComponent,
	DigitMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DigitAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DigitCompleteTemplateDrivenValidationDecoratorsComponent,
	DigitConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DigitMessageTemplateDrivenValidationDecoratorsComponent,
	DigitMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DigitAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  DigitTemplateDrivenValidationDecoratorsExtendedModule { }
