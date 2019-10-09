import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { UrlCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/url-complete.component';
import { UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/url-conditional-expression.component';
import { UrlMessageTemplateDrivenValidationDecoratorsComponent } from './message/url-message.component';
import { UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent } from './urlValidationType/url-url-validation-type.component';
import { UrlMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/url-message-key.component';
import { UrlAddTemplateDrivenValidationDecoratorsComponent } from './add/url-add.component';

@NgModule({
  declarations: [
	UrlCompleteTemplateDrivenValidationDecoratorsComponent,
	UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UrlMessageTemplateDrivenValidationDecoratorsComponent,
	UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent,
	UrlMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UrlAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	UrlCompleteTemplateDrivenValidationDecoratorsComponent,
	UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UrlMessageTemplateDrivenValidationDecoratorsComponent,
	UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent,
	UrlMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UrlAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UrlCompleteTemplateDrivenValidationDecoratorsComponent,
	UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	UrlMessageTemplateDrivenValidationDecoratorsComponent,
	UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent,
	UrlMessageKeyTemplateDrivenValidationDecoratorsComponent,
	UrlAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  UrlTemplateDrivenValidationDecoratorsExtendedModule { }
