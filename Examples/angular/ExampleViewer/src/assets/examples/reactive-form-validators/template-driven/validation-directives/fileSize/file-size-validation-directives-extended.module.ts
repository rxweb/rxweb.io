import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { FileSizeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/file-size-complete.component';
import { FileSizeMaxSizeTemplateDrivenValidationDirectivesComponent } from './maxSize/file-size-max-size.component';
import { FileSizeMinSizeTemplateDrivenValidationDirectivesComponent } from './minSize/file-size-min-size.component';
import { FileSizeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/file-size-conditional-expression.component';
import { FileSizeMessageTemplateDrivenValidationDirectivesComponent } from './message/file-size-message.component';
import { FileSizeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/file-size-message-key.component';
import { FileSizeAddTemplateDrivenValidationDirectivesComponent } from './add/file-size-add.component';

@NgModule({
  declarations: [
	FileSizeCompleteTemplateDrivenValidationDirectivesComponent,
	FileSizeMaxSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeMinSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageKeyTemplateDrivenValidationDirectivesComponent,
	FileSizeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	FileSizeCompleteTemplateDrivenValidationDirectivesComponent,
	FileSizeMaxSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeMinSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageKeyTemplateDrivenValidationDirectivesComponent,
	FileSizeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileSizeCompleteTemplateDrivenValidationDirectivesComponent,
	FileSizeMaxSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeMinSizeTemplateDrivenValidationDirectivesComponent,
	FileSizeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageTemplateDrivenValidationDirectivesComponent,
	FileSizeMessageKeyTemplateDrivenValidationDirectivesComponent,
	FileSizeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  FileSizeTemplateDrivenValidationDirectivesExtendedModule { }
