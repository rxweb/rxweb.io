import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionCompleteTemplateDrivenValidationDirectivesComponent } from './complete/extension-complete.component';
import { ExtensionExtensionsTemplateDrivenValidationDirectivesComponent } from './extensions/extension-extensions.component';
import { ExtensionConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/extension-conditional-expression.component';
import { ExtensionMessageTemplateDrivenValidationDirectivesComponent } from './message/extension-message.component';
import { ExtensionMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/extension-message-key.component';
import { ExtensionAddTemplateDrivenValidationDirectivesComponent } from './add/extension-add.component';

@NgModule({
  declarations: [
	ExtensionCompleteTemplateDrivenValidationDirectivesComponent,
	ExtensionExtensionsTemplateDrivenValidationDirectivesComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageKeyTemplateDrivenValidationDirectivesComponent,
	ExtensionAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	ExtensionCompleteTemplateDrivenValidationDirectivesComponent,
	ExtensionExtensionsTemplateDrivenValidationDirectivesComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageKeyTemplateDrivenValidationDirectivesComponent,
	ExtensionAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionCompleteTemplateDrivenValidationDirectivesComponent,
	ExtensionExtensionsTemplateDrivenValidationDirectivesComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageTemplateDrivenValidationDirectivesComponent,
	ExtensionMessageKeyTemplateDrivenValidationDirectivesComponent,
	ExtensionAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  ExtensionTemplateDrivenValidationDirectivesExtendedModule { }
