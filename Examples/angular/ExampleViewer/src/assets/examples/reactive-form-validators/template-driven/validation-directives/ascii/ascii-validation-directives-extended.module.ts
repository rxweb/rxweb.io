import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AsciiCompleteTemplateDrivenValidationDirectivesComponent } from './complete/ascii-complete.component';
import { AsciiConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/ascii-conditional-expression.component';
import { AsciiMessageTemplateDrivenValidationDirectivesComponent } from './message/ascii-message.component';
import { AsciiMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/ascii-message-key.component';
import { AsciiAddTemplateDrivenValidationDirectivesComponent } from './add/ascii-add.component';

@NgModule({
  declarations: [
	AsciiCompleteTemplateDrivenValidationDirectivesComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AsciiMessageTemplateDrivenValidationDirectivesComponent,
	AsciiMessageKeyTemplateDrivenValidationDirectivesComponent,
	AsciiAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	AsciiCompleteTemplateDrivenValidationDirectivesComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AsciiMessageTemplateDrivenValidationDirectivesComponent,
	AsciiMessageKeyTemplateDrivenValidationDirectivesComponent,
	AsciiAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AsciiCompleteTemplateDrivenValidationDirectivesComponent,
	AsciiConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	AsciiMessageTemplateDrivenValidationDirectivesComponent,
	AsciiMessageKeyTemplateDrivenValidationDirectivesComponent,
	AsciiAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  AsciiTemplateDrivenValidationDirectivesExtendedModule { }
