import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NotEmptyCompleteTemplateDrivenValidationDirectivesComponent } from './complete/not-empty-complete.component';
import { NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/not-empty-conditional-expression.component';
import { NotEmptyMessageTemplateDrivenValidationDirectivesComponent } from './message/not-empty-message.component';
import { NotEmptyAddTemplateDrivenValidationDirectivesComponent } from './add/not-empty-add.component';

@NgModule({
  declarations: [
	NotEmptyCompleteTemplateDrivenValidationDirectivesComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NotEmptyMessageTemplateDrivenValidationDirectivesComponent,
	NotEmptyAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	NotEmptyCompleteTemplateDrivenValidationDirectivesComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NotEmptyMessageTemplateDrivenValidationDirectivesComponent,
	NotEmptyAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NotEmptyCompleteTemplateDrivenValidationDirectivesComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NotEmptyMessageTemplateDrivenValidationDirectivesComponent,
	NotEmptyAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  NotEmptyTemplateDrivenValidationDirectivesExtendedModule { }
