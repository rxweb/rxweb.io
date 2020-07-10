import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PortCompleteTemplateDrivenValidationDirectivesComponent } from './complete/port-complete.component';
import { PortConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/port-conditional-expression.component';
import { PortMessageTemplateDrivenValidationDirectivesComponent } from './message/port-message.component';
import { PortMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/port-message-key.component';
import { PortAddTemplateDrivenValidationDirectivesComponent } from './add/port-add.component';

@NgModule({
  declarations: [
	PortCompleteTemplateDrivenValidationDirectivesComponent,
	PortConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PortMessageTemplateDrivenValidationDirectivesComponent,
	PortMessageKeyTemplateDrivenValidationDirectivesComponent,
	PortAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	PortCompleteTemplateDrivenValidationDirectivesComponent,
	PortConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PortMessageTemplateDrivenValidationDirectivesComponent,
	PortMessageKeyTemplateDrivenValidationDirectivesComponent,
	PortAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PortCompleteTemplateDrivenValidationDirectivesComponent,
	PortConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	PortMessageTemplateDrivenValidationDirectivesComponent,
	PortMessageKeyTemplateDrivenValidationDirectivesComponent,
	PortAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  PortTemplateDrivenValidationDirectivesExtendedModule { }
