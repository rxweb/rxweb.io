import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { GridCompleteTemplateDrivenValidationDirectivesComponent } from './complete/grid-complete.component';
import { GridConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/grid-conditional-expression.component';
import { GridMessageTemplateDrivenValidationDirectivesComponent } from './message/grid-message.component';
import { GridAddTemplateDrivenValidationDirectivesComponent } from './add/grid-add.component';
import { GridMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/grid-message-key.component';

@NgModule({ 
  declarations: [
	GridCompleteTemplateDrivenValidationDirectivesComponent,
	GridConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GridMessageTemplateDrivenValidationDirectivesComponent,
	GridAddTemplateDrivenValidationDirectivesComponent,
	GridMessageKeyTemplateDrivenValidationDirectivesComponent
  ],
entryComponents: [
	GridCompleteTemplateDrivenValidationDirectivesComponent,
	GridConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GridMessageTemplateDrivenValidationDirectivesComponent,
	GridAddTemplateDrivenValidationDirectivesComponent,
	GridMessageKeyTemplateDrivenValidationDirectivesComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GridCompleteTemplateDrivenValidationDirectivesComponent,
	GridConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GridMessageTemplateDrivenValidationDirectivesComponent,
	GridAddTemplateDrivenValidationDirectivesComponent,
	GridMessageKeyTemplateDrivenValidationDirectivesComponent
  ],

})
export class  GridTemplateDrivenValidationDirectivesExtendedModule { }
