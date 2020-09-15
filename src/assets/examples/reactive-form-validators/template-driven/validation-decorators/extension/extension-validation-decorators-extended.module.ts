import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/extension-complete.component';
import { ExtensionExtensionsTemplateDrivenValidationDecoratorsComponent } from './extensions/extension-extensions.component';
import { ExtensionIsExcludeExtensionsTemplateDrivenValidationDecoratorsComponent } from './isExcludeExtensions/extension-is-exclude-extensions.component';
import { ExtensionConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/extension-conditional-expression.component';
import { ExtensionMessageTemplateDrivenValidationDecoratorsComponent } from './message/extension-message.component';
import { ExtensionMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/extension-message-key.component';
import { ExtensionAddTemplateDrivenValidationDecoratorsComponent } from './add/extension-add.component';

@NgModule({
  declarations: [
	ExtensionCompleteTemplateDrivenValidationDecoratorsComponent,
	ExtensionExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionIsExcludeExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageKeyTemplateDrivenValidationDecoratorsComponent,
	ExtensionAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	ExtensionCompleteTemplateDrivenValidationDecoratorsComponent,
	ExtensionExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionIsExcludeExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageKeyTemplateDrivenValidationDecoratorsComponent,
	ExtensionAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionCompleteTemplateDrivenValidationDecoratorsComponent,
	ExtensionExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionIsExcludeExtensionsTemplateDrivenValidationDecoratorsComponent,
	ExtensionConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageTemplateDrivenValidationDecoratorsComponent,
	ExtensionMessageKeyTemplateDrivenValidationDecoratorsComponent,
	ExtensionAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  ExtensionTemplateDrivenValidationDecoratorsExtendedModule { }
