import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LeapYearCompleteTemplateDrivenValidationDirectivesComponent } from './complete/leap-year-complete.component';
import { LeapYearConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/leap-year-conditional-expression.component';
import { LeapYearMessageTemplateDrivenValidationDirectivesComponent } from './message/leap-year-message.component';
import { LeapYearMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/leap-year-message-key.component';
import { LeapYearAddTemplateDrivenValidationDirectivesComponent } from './add/leap-year-add.component';

@NgModule({
  declarations: [
	LeapYearCompleteTemplateDrivenValidationDirectivesComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageKeyTemplateDrivenValidationDirectivesComponent,
	LeapYearAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LeapYearCompleteTemplateDrivenValidationDirectivesComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageKeyTemplateDrivenValidationDirectivesComponent,
	LeapYearAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LeapYearCompleteTemplateDrivenValidationDirectivesComponent,
	LeapYearConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageTemplateDrivenValidationDirectivesComponent,
	LeapYearMessageKeyTemplateDrivenValidationDirectivesComponent,
	LeapYearAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LeapYearTemplateDrivenValidationDirectivesExtendedModule { }
