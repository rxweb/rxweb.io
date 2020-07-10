import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ImageCompleteTemplateDrivenValidationDirectivesComponent } from './complete/image-complete.component';
import { ImageMaxHeightTemplateDrivenValidationDirectivesComponent } from './maxHeight/image-max-height.component';
import { ImageMaxWidthTemplateDrivenValidationDirectivesComponent } from './maxWidth/image-max-width.component';
import { ImageMinHeightTemplateDrivenValidationDirectivesComponent } from './minHeight/image-min-height.component';
import { ImageMinWidthTemplateDrivenValidationDirectivesComponent } from './minWidth/image-min-width.component';
import { ImageConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/image-conditional-expression.component';
import { ImageMessageTemplateDrivenValidationDirectivesComponent } from './message/image-message.component';
import { ImageMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/image-message-key.component';
import { ImageAddTemplateDrivenValidationDirectivesComponent } from './add/image-add.component';

@NgModule({
  declarations: [
	ImageCompleteTemplateDrivenValidationDirectivesComponent,
	ImageMaxHeightTemplateDrivenValidationDirectivesComponent,
	ImageMaxWidthTemplateDrivenValidationDirectivesComponent,
	ImageMinHeightTemplateDrivenValidationDirectivesComponent,
	ImageMinWidthTemplateDrivenValidationDirectivesComponent,
	ImageConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ImageMessageTemplateDrivenValidationDirectivesComponent,
	ImageMessageKeyTemplateDrivenValidationDirectivesComponent,
	ImageAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	ImageCompleteTemplateDrivenValidationDirectivesComponent,
	ImageMaxHeightTemplateDrivenValidationDirectivesComponent,
	ImageMaxWidthTemplateDrivenValidationDirectivesComponent,
	ImageMinHeightTemplateDrivenValidationDirectivesComponent,
	ImageMinWidthTemplateDrivenValidationDirectivesComponent,
	ImageConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ImageMessageTemplateDrivenValidationDirectivesComponent,
	ImageMessageKeyTemplateDrivenValidationDirectivesComponent,
	ImageAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ImageCompleteTemplateDrivenValidationDirectivesComponent,
	ImageMaxHeightTemplateDrivenValidationDirectivesComponent,
	ImageMaxWidthTemplateDrivenValidationDirectivesComponent,
	ImageMinHeightTemplateDrivenValidationDirectivesComponent,
	ImageMinWidthTemplateDrivenValidationDirectivesComponent,
	ImageConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ImageMessageTemplateDrivenValidationDirectivesComponent,
	ImageMessageKeyTemplateDrivenValidationDirectivesComponent,
	ImageAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  ImageTemplateDrivenValidationDirectivesExtendedModule { }
