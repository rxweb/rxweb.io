import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { PrimeNumberCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/prime-number-complete.component';
import { PrimeNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/prime-number-conditional-expression.component';
import { PrimeNumberMessageTemplateDrivenValidationDecoratorsComponent } from './message/prime-number-message.component';
import { PrimeNumberMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/prime-number-message-key.component';
import { PrimeNumberAddTemplateDrivenValidationDecoratorsComponent } from './add/prime-number-add.component';

@NgModule({
  declarations: [
	PrimeNumberCompleteTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	PrimeNumberCompleteTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PrimeNumberCompleteTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PrimeNumberAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  PrimeNumberTemplateDrivenValidationDecoratorsExtendedModule { }
