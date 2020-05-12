import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { DataUriCompleteTemplateDrivenValidationDirectivesComponent } from './complete/data-uri-complete.component';
import { DataUriConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/data-uri-conditional-expression.component';
import { DataUriMessageTemplateDrivenValidationDirectivesComponent } from './message/data-uri-message.component';
import { DataUriMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/data-uri-message-key.component';
import { DataUriAddTemplateDrivenValidationDirectivesComponent } from './add/data-uri-add.component';

@NgModule({
  declarations: [
	DataUriCompleteTemplateDrivenValidationDirectivesComponent,
	DataUriConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DataUriMessageTemplateDrivenValidationDirectivesComponent,
	DataUriMessageKeyTemplateDrivenValidationDirectivesComponent,
	DataUriAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	DataUriCompleteTemplateDrivenValidationDirectivesComponent,
	DataUriConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DataUriMessageTemplateDrivenValidationDirectivesComponent,
	DataUriMessageKeyTemplateDrivenValidationDirectivesComponent,
	DataUriAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DataUriCompleteTemplateDrivenValidationDirectivesComponent,
	DataUriConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DataUriMessageTemplateDrivenValidationDirectivesComponent,
	DataUriMessageKeyTemplateDrivenValidationDirectivesComponent,
	DataUriAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  DataUriTemplateDrivenValidationDirectivesExtendedModule { }
