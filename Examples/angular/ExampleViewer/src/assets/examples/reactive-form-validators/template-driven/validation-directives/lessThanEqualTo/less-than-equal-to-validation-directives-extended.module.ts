import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LessThanEqualToCompleteTemplateDrivenValidationDirectivesComponent } from './complete/less-than-equal-to-complete.component';
import { LessThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/less-than-equal-to-field-name.component';
import { LessThanEqualToValueTemplateDrivenValidationDirectivesComponent } from './value/less-than-equal-to-value.component';
import { LessThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/less-than-equal-to-conditional-expression.component';
import { LessThanEqualToMessageTemplateDrivenValidationDirectivesComponent } from './message/less-than-equal-to-message.component';
import { LessThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/less-than-equal-to-message-key.component';
import { LessThanEqualToAddTemplateDrivenValidationDirectivesComponent } from './add/less-than-equal-to-add.component';

@NgModule({
  declarations: [
	LessThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LessThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LessThanEqualToCompleteTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToFieldNameTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToValueTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToMessageKeyTemplateDrivenValidationDirectivesComponent,
	LessThanEqualToAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LessThanEqualToTemplateDrivenValidationDirectivesExtendedModule { }
