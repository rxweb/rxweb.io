import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LatitudeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/latitude-complete.component';
import { LatitudeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/latitude-conditional-expression.component';
import { LatitudeMessageTemplateDrivenValidationDirectivesComponent } from './message/latitude-message.component';
import { LatitudeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/latitude-message-key.component';
import { LatitudeAddTemplateDrivenValidationDirectivesComponent } from './add/latitude-add.component';

@NgModule({
  declarations: [
	LatitudeCompleteTemplateDrivenValidationDirectivesComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatitudeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LatitudeCompleteTemplateDrivenValidationDirectivesComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatitudeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LatitudeCompleteTemplateDrivenValidationDirectivesComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageTemplateDrivenValidationDirectivesComponent,
	LatitudeMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatitudeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LatitudeTemplateDrivenValidationDirectivesExtendedModule { }
