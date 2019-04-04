import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { OddCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/odd-complete.component';
import { OddConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/odd-conditional-expression.component';
import { OddMessageTemplateDrivenValidationDecoratorsComponent } from './message/odd-message.component';
import { OddMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/odd-message-key.component';
import { OddAddTemplateDrivenValidationDecoratorsComponent } from './add/odd-add.component';

@NgModule({
  declarations: [
	OddCompleteTemplateDrivenValidationDecoratorsComponent,
	OddConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	OddMessageTemplateDrivenValidationDecoratorsComponent,
	OddMessageKeyTemplateDrivenValidationDecoratorsComponent,
	OddAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	OddCompleteTemplateDrivenValidationDecoratorsComponent,
	OddConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	OddMessageTemplateDrivenValidationDecoratorsComponent,
	OddMessageKeyTemplateDrivenValidationDecoratorsComponent,
	OddAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	OddCompleteTemplateDrivenValidationDecoratorsComponent,
	OddConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	OddMessageTemplateDrivenValidationDecoratorsComponent,
	OddMessageKeyTemplateDrivenValidationDecoratorsComponent,
	OddAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  OddTemplateDrivenValidationDecoratorsExtendedModule { }
