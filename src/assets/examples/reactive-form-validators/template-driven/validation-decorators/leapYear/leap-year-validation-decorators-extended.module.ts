import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LeapYearCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/leap-year-complete.component';
import { LeapYearConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/leap-year-conditional-expression.component';
import { LeapYearMessageTemplateDrivenValidationDecoratorsComponent } from './message/leap-year-message.component';
import { LeapYearMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/leap-year-message-key.component';
import { LeapYearAddTemplateDrivenValidationDecoratorsComponent } from './add/leap-year-add.component';

@NgModule({
  declarations: [
	LeapYearCompleteTemplateDrivenValidationDecoratorsComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LeapYearAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	LeapYearCompleteTemplateDrivenValidationDecoratorsComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LeapYearAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LeapYearCompleteTemplateDrivenValidationDecoratorsComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageTemplateDrivenValidationDecoratorsComponent,
	LeapYearMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LeapYearAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  LeapYearTemplateDrivenValidationDecoratorsExtendedModule { }
