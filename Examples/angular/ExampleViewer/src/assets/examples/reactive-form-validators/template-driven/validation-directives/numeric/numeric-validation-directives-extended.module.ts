import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { NumericCompleteTemplateDrivenValidationDirectivesComponent } from './complete/numeric-complete.component';
import { NumericAcceptValueTemplateDrivenValidationDirectivesComponent } from './acceptValue/numeric-accept-value.component';
import { NumericIsFormatTemplateDrivenValidationDirectivesComponent } from './isFormat/numeric-is-format.component';
import { NumericAllowDecimalTemplateDrivenValidationDirectivesComponent } from './allowDecimal/numeric-allow-decimal.component';
import { NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/numeric-conditional-expression.component';
import { NumericMessageTemplateDrivenValidationDirectivesComponent } from './message/numeric-message.component';
import { NumericMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/numeric-message-key.component';
import { NumericAddTemplateDrivenValidationDirectivesComponent } from './add/numeric-add.component';

@NgModule({
  declarations: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  NumericTemplateDrivenValidationDirectivesExtendedModule { }
