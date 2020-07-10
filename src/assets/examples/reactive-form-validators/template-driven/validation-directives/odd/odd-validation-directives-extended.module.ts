import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { OddCompleteTemplateDrivenValidationDirectivesComponent } from './complete/odd-complete.component';
import { OddConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/odd-conditional-expression.component';
import { OddMessageTemplateDrivenValidationDirectivesComponent } from './message/odd-message.component';
import { OddMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/odd-message-key.component';
import { OddAddTemplateDrivenValidationDirectivesComponent } from './add/odd-add.component';

@NgModule({
  declarations: [
	OddCompleteTemplateDrivenValidationDirectivesComponent,
	OddConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	OddMessageTemplateDrivenValidationDirectivesComponent,
	OddMessageKeyTemplateDrivenValidationDirectivesComponent,
	OddAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	OddCompleteTemplateDrivenValidationDirectivesComponent,
	OddConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	OddMessageTemplateDrivenValidationDirectivesComponent,
	OddMessageKeyTemplateDrivenValidationDirectivesComponent,
	OddAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	OddCompleteTemplateDrivenValidationDirectivesComponent,
	OddConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	OddMessageTemplateDrivenValidationDirectivesComponent,
	OddMessageKeyTemplateDrivenValidationDirectivesComponent,
	OddAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  OddTemplateDrivenValidationDirectivesExtendedModule { }
