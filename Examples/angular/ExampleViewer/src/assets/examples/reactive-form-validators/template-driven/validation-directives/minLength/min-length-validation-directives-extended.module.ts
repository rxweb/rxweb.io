import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinLengthCompleteTemplateDrivenValidationDirectivesComponent } from './complete/min-length-complete.component';
import { MinLengthValueTemplateDrivenValidationDirectivesComponent } from './value/min-length-value.component';
import { MinLengthMessageTemplateDrivenValidationDirectivesComponent } from './message/min-length-message.component';
import { MinLengthConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/min-length-conditional-expression.component';
import { MinLengthMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/min-length-message-key.component';
import { MinLengthAddTemplateDrivenValidationDirectivesComponent } from './add/min-length-add.component';

@NgModule({
  declarations: [
	MinLengthCompleteTemplateDrivenValidationDirectivesComponent,
	MinLengthValueTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageTemplateDrivenValidationDirectivesComponent,
	MinLengthConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinLengthAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MinLengthCompleteTemplateDrivenValidationDirectivesComponent,
	MinLengthValueTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageTemplateDrivenValidationDirectivesComponent,
	MinLengthConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinLengthAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinLengthCompleteTemplateDrivenValidationDirectivesComponent,
	MinLengthValueTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageTemplateDrivenValidationDirectivesComponent,
	MinLengthConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinLengthMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinLengthAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MinLengthTemplateDrivenValidationDirectivesExtendedModule { }
