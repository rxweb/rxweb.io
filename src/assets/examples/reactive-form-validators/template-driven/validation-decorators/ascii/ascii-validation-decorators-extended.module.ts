import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AsciiCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/ascii-complete.component';
import { AsciiConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/ascii-conditional-expression.component';
import { AsciiMessageTemplateDrivenValidationDecoratorsComponent } from './message/ascii-message.component';
import { AsciiMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/ascii-message-key.component';
import { AsciiAddTemplateDrivenValidationDecoratorsComponent } from './add/ascii-add.component';

@NgModule({
  declarations: [
	AsciiCompleteTemplateDrivenValidationDecoratorsComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AsciiAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	AsciiCompleteTemplateDrivenValidationDecoratorsComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AsciiAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AsciiCompleteTemplateDrivenValidationDecoratorsComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageTemplateDrivenValidationDecoratorsComponent,
	AsciiMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AsciiAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  AsciiTemplateDrivenValidationDecoratorsExtendedModule { }
