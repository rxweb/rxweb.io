import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanCompleteTemplateDrivenValidationDirectivesComponent } from './complete/greater-than-complete.component';
import { GreaterThanFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/greater-than-field-name.component';
import { GreaterThanValueTemplateDrivenValidationDirectivesComponent } from './value/greater-than-value.component';
import { GreaterThanConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/greater-than-conditional-expression.component';
import { GreaterThanMessageTemplateDrivenValidationDirectivesComponent } from './message/greater-than-message.component';
import { GreaterThanMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/greater-than-message-key.component';
import { GreaterThanAddTemplateDrivenValidationDirectivesComponent } from './add/greater-than-add.component';

@NgModule({
  declarations: [
	GreaterThanCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	GreaterThanCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  GreaterThanTemplateDrivenValidationDirectivesExtendedModule { }
