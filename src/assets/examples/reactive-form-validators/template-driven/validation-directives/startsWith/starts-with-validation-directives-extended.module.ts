import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithCompleteTemplateDrivenValidationDirectivesComponent } from './complete/starts-with-complete.component';
import { StartsWithValueTemplateDrivenValidationDirectivesComponent } from './value/starts-with-value.component';
import { StartsWithIsRestrictTemplateDrivenValidationDirectivesComponent } from './isRestrict/starts-with-is-restrict.component';
import { StartsWithConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/starts-with-conditional-expression.component';
import { StartsWithMessageTemplateDrivenValidationDirectivesComponent } from './message/starts-with-message.component';
import { StartsWithMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/starts-with-message-key.component';
import { StartsWithAddTemplateDrivenValidationDirectivesComponent } from './add/starts-with-add.component';

@NgModule({
  declarations: [
	StartsWithCompleteTemplateDrivenValidationDirectivesComponent,
	StartsWithValueTemplateDrivenValidationDirectivesComponent,
	StartsWithIsRestrictTemplateDrivenValidationDirectivesComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageKeyTemplateDrivenValidationDirectivesComponent,
	StartsWithAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	StartsWithCompleteTemplateDrivenValidationDirectivesComponent,
	StartsWithValueTemplateDrivenValidationDirectivesComponent,
	StartsWithIsRestrictTemplateDrivenValidationDirectivesComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageKeyTemplateDrivenValidationDirectivesComponent,
	StartsWithAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithCompleteTemplateDrivenValidationDirectivesComponent,
	StartsWithValueTemplateDrivenValidationDirectivesComponent,
	StartsWithIsRestrictTemplateDrivenValidationDirectivesComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageTemplateDrivenValidationDirectivesComponent,
	StartsWithMessageKeyTemplateDrivenValidationDirectivesComponent,
	StartsWithAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  StartsWithTemplateDrivenValidationDirectivesExtendedModule { }
