import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { GreaterThanEqualToCompleteTemplateDrivenValidationDirectivesComponent } from './complete/greater-than-equal-to-complete.component';
import { GreaterThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/greater-than-equal-to-field-name.component';
import { GreaterThanEqualToValueTemplateDrivenValidationDirectivesComponent } from './value/greater-than-equal-to-value.component';
import { GreaterThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/greater-than-equal-to-conditional-expression.component';
import { GreaterThanEqualToMessageTemplateDrivenValidationDirectivesComponent } from './message/greater-than-equal-to-message.component';
import { GreaterThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/greater-than-equal-to-message-key.component';
import { GreaterThanEqualToAddTemplateDrivenValidationDirectivesComponent } from './add/greater-than-equal-to-add.component';

@NgModule({
  declarations: [
	GreaterThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	GreaterThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	GreaterThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  GreaterThanEqualToTemplateDrivenValidationDirectivesExtendedModule { }
