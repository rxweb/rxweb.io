import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { RangeCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/range-complete.component';
import { RangeMinimumNumberTemplateDrivenValidationDecoratorsComponent } from './minimumNumber/range-minimum-number.component';
import { RangeMaximumNumberTemplateDrivenValidationDecoratorsComponent } from './maximumNumber/range-maximum-number.component';
import { RangeConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/range-conditional-expression.component';
import { RangeMessageTemplateDrivenValidationDecoratorsComponent } from './message/range-message.component';
import { RangeMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/range-message-key.component';
import { RangeAddTemplateDrivenValidationDecoratorsComponent } from './add/range-add.component';

@NgModule({
  declarations: [
	RangeCompleteTemplateDrivenValidationDecoratorsComponent,
	RangeMinimumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeMaximumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RangeMessageTemplateDrivenValidationDecoratorsComponent,
	RangeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RangeAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	RangeCompleteTemplateDrivenValidationDecoratorsComponent,
	RangeMinimumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeMaximumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RangeMessageTemplateDrivenValidationDecoratorsComponent,
	RangeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RangeAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RangeCompleteTemplateDrivenValidationDecoratorsComponent,
	RangeMinimumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeMaximumNumberTemplateDrivenValidationDecoratorsComponent,
	RangeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	RangeMessageTemplateDrivenValidationDecoratorsComponent,
	RangeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	RangeAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  RangeTemplateDrivenValidationDecoratorsExtendedModule { }
