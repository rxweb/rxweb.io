import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MacCompleteTemplateDrivenValidationDirectivesComponent } from './complete/mac-complete.component';
import { MacConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/mac-conditional-expression.component';
import { MacMessageTemplateDrivenValidationDirectivesComponent } from './message/mac-message.component';
import { MacMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/mac-message-key.component';
import { MacAddTemplateDrivenValidationDirectivesComponent } from './add/mac-add.component';

@NgModule({
  declarations: [
	MacCompleteTemplateDrivenValidationDirectivesComponent,
	MacConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MacMessageTemplateDrivenValidationDirectivesComponent,
	MacMessageKeyTemplateDrivenValidationDirectivesComponent,
	MacAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MacCompleteTemplateDrivenValidationDirectivesComponent,
	MacConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MacMessageTemplateDrivenValidationDirectivesComponent,
	MacMessageKeyTemplateDrivenValidationDirectivesComponent,
	MacAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MacCompleteTemplateDrivenValidationDirectivesComponent,
	MacConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MacMessageTemplateDrivenValidationDirectivesComponent,
	MacMessageKeyTemplateDrivenValidationDirectivesComponent,
	MacAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MacTemplateDrivenValidationDirectivesExtendedModule { }
