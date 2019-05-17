import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NumericCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/numeric-complete.component';
import { NumericAcceptValueTemplateDrivenValidationDecoratorsComponent } from './acceptValue/numeric-accept-value.component';
import { NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent } from './allowDecimal/numeric-allow-decimal.component';
import { NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/numeric-conditional-expression.component';
import { NumericMessageTemplateDrivenValidationDecoratorsComponent } from './message/numeric-message.component';
import { NumericIsFormatTemplateDrivenValidationDecoratorsComponent } from './isFormat/numeric-is-format.component';
import { NumericMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/numeric-message-key.component';
import { NumericAddTemplateDrivenValidationDecoratorsComponent } from './add/numeric-add.component';

@NgModule({
  declarations: [
	NumericCompleteTemplateDrivenValidationDecoratorsComponent,
	NumericAcceptValueTemplateDrivenValidationDecoratorsComponent,
	NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent,
	NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NumericMessageTemplateDrivenValidationDecoratorsComponent,
	NumericIsFormatTemplateDrivenValidationDecoratorsComponent,
	NumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NumericAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	NumericCompleteTemplateDrivenValidationDecoratorsComponent,
	NumericAcceptValueTemplateDrivenValidationDecoratorsComponent,
	NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent,
	NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NumericMessageTemplateDrivenValidationDecoratorsComponent,
	NumericIsFormatTemplateDrivenValidationDecoratorsComponent,
	NumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NumericAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NumericCompleteTemplateDrivenValidationDecoratorsComponent,
	NumericAcceptValueTemplateDrivenValidationDecoratorsComponent,
	NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent,
	NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NumericMessageTemplateDrivenValidationDecoratorsComponent,
	NumericIsFormatTemplateDrivenValidationDecoratorsComponent,
	NumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NumericAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  NumericTemplateDrivenValidationDecoratorsExtendedModule { }
