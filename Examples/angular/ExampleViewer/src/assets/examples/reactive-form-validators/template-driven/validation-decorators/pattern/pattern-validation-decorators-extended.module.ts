import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { PatternCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/pattern-complete.component';
import { PatternExpressionTemplateDrivenValidationDecoratorsComponent } from './expression/pattern-expression.component';
import { PatternMessageTemplateDrivenValidationDecoratorsComponent } from './message/pattern-message.component';
import { PatternConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/pattern-conditional-expression.component';
import { PatternMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/pattern-message-key.component';
import { PatternAddTemplateDrivenValidationDecoratorsComponent } from './add/pattern-add.component';

@NgModule({
  declarations: [
	PatternCompleteTemplateDrivenValidationDecoratorsComponent,
	PatternExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageTemplateDrivenValidationDecoratorsComponent,
	PatternConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PatternAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	PatternCompleteTemplateDrivenValidationDecoratorsComponent,
	PatternExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageTemplateDrivenValidationDecoratorsComponent,
	PatternConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PatternAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PatternCompleteTemplateDrivenValidationDecoratorsComponent,
	PatternExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageTemplateDrivenValidationDecoratorsComponent,
	PatternConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	PatternMessageKeyTemplateDrivenValidationDecoratorsComponent,
	PatternAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  PatternTemplateDrivenValidationDecoratorsExtendedModule { }
