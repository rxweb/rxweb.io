import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { CompareCompleteTemplateDrivenValidationDirectivesComponent } from './complete/compare-complete.component';
import { CompareFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/compare-field-name.component';
import { CompareMessageTemplateDrivenValidationDirectivesComponent } from './message/compare-message.component';
import { CompareMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/compare-message-key.component';
import { CompareAddTemplateDrivenValidationDirectivesComponent } from './add/compare-add.component';

@NgModule({
  declarations: [
	CompareCompleteTemplateDrivenValidationDirectivesComponent,
	CompareFieldNameTemplateDrivenValidationDirectivesComponent,
	CompareMessageTemplateDrivenValidationDirectivesComponent,
	CompareMessageKeyTemplateDrivenValidationDirectivesComponent,
	CompareAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	CompareCompleteTemplateDrivenValidationDirectivesComponent,
	CompareFieldNameTemplateDrivenValidationDirectivesComponent,
	CompareMessageTemplateDrivenValidationDirectivesComponent,
	CompareMessageKeyTemplateDrivenValidationDirectivesComponent,
	CompareAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CompareCompleteTemplateDrivenValidationDirectivesComponent,
	CompareFieldNameTemplateDrivenValidationDirectivesComponent,
	CompareMessageTemplateDrivenValidationDirectivesComponent,
	CompareMessageKeyTemplateDrivenValidationDirectivesComponent,
	CompareAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  CompareTemplateDrivenValidationDirectivesExtendedModule { }
