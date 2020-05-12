import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PatternCompleteTemplateDrivenValidationDirectivesComponent } from './complete/pattern-complete.component';
import { PatternExpressionTemplateDrivenValidationDirectivesComponent } from './expression/pattern-expression.component';
import { PatternMessageTemplateDrivenValidationDirectivesComponent } from './message/pattern-message.component';
import { PatternConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/pattern-conditional-expression.component';
import { PatternMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/pattern-message-key.component';
import { PatternAddTemplateDrivenValidationDirectivesComponent } from './add/pattern-add.component';

@NgModule({
  declarations: [
	PatternCompleteTemplateDrivenValidationDirectivesComponent,
	PatternExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageTemplateDrivenValidationDirectivesComponent,
	PatternConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageKeyTemplateDrivenValidationDirectivesComponent,
	PatternAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	PatternCompleteTemplateDrivenValidationDirectivesComponent,
	PatternExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageTemplateDrivenValidationDirectivesComponent,
	PatternConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageKeyTemplateDrivenValidationDirectivesComponent,
	PatternAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PatternCompleteTemplateDrivenValidationDirectivesComponent,
	PatternExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageTemplateDrivenValidationDirectivesComponent,
	PatternConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PatternMessageKeyTemplateDrivenValidationDirectivesComponent,
	PatternAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  PatternTemplateDrivenValidationDirectivesExtendedModule { }
