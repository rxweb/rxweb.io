import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaskCompleteTemplateDrivenValidationDirectivesComponent } from './complete/mask-complete.component';
import { MaskMaskTemplateDrivenValidationDirectivesComponent } from './mask/mask-mask.component';
import { MaskConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/mask-conditional-expression.component';
import { MaskMessageTemplateDrivenValidationDirectivesComponent } from './message/mask-message.component';
import { MaskMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/mask-message-key.component';
import { MaskAddTemplateDrivenValidationDirectivesComponent } from './add/mask-add.component';

@NgModule({
  declarations: [
	MaskCompleteTemplateDrivenValidationDirectivesComponent,
	MaskMaskTemplateDrivenValidationDirectivesComponent,
	MaskConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaskMessageTemplateDrivenValidationDirectivesComponent,
	MaskMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaskAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MaskCompleteTemplateDrivenValidationDirectivesComponent,
	MaskMaskTemplateDrivenValidationDirectivesComponent,
	MaskConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaskMessageTemplateDrivenValidationDirectivesComponent,
	MaskMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaskAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaskCompleteTemplateDrivenValidationDirectivesComponent,
	MaskMaskTemplateDrivenValidationDirectivesComponent,
	MaskConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MaskMessageTemplateDrivenValidationDirectivesComponent,
	MaskMessageKeyTemplateDrivenValidationDirectivesComponent,
	MaskAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MaskTemplateDrivenValidationDirectivesExtendedModule { }
