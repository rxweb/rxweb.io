import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { RequiredCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/required-complete.component';
import { RequiredConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/required-conditional-expression.component';
import { RequiredMessageTemplateDrivenValidationDecoratorsComponent } from './message/required-message.component';
import { RequiredMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/required-message-key.component';
import { RequiredAddTemplateDrivenValidationDecoratorsComponent } from './add/required-add.component';

@NgModule({
  declarations: [
	RequiredCompleteTemplateDrivenValidationDecoratorsComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RequiredAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	RequiredCompleteTemplateDrivenValidationDecoratorsComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RequiredAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RequiredCompleteTemplateDrivenValidationDecoratorsComponent,
	RequiredConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageTemplateDrivenValidationDecoratorsComponent,
	RequiredMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RequiredAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  RequiredTemplateDrivenValidationDecoratorsExtendedModule { }
