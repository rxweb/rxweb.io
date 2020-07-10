import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { TimeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/time-complete.component';
import { TimeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/time-conditional-expression.component';
import { TimeAllowSecondsTemplateDrivenValidationDirectivesComponent } from './allowSeconds/time-allow-seconds.component';
import { TimeMessageTemplateDrivenValidationDirectivesComponent } from './message/time-message.component';
import { TimeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/time-message-key.component';
import { TimeAddTemplateDrivenValidationDirectivesComponent } from './add/time-add.component';

@NgModule({
  declarations: [
	TimeCompleteTemplateDrivenValidationDirectivesComponent,
	TimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	TimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	TimeMessageTemplateDrivenValidationDirectivesComponent,
	TimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	TimeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	TimeCompleteTemplateDrivenValidationDirectivesComponent,
	TimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	TimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	TimeMessageTemplateDrivenValidationDirectivesComponent,
	TimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	TimeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	TimeCompleteTemplateDrivenValidationDirectivesComponent,
	TimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	TimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
	TimeMessageTemplateDrivenValidationDirectivesComponent,
	TimeMessageKeyTemplateDrivenValidationDirectivesComponent,
	TimeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  TimeTemplateDrivenValidationDirectivesExtendedModule { }
