import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/alpha-complete.component';
import { AlphaConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/alpha-conditional-expression.component';
import { AlphaLocaleTemplateDrivenValidationDecoratorsComponent } from './locale/alpha-locale.component';
import { AlphaAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent } from './allowWhiteSpace/alpha-allow-white-space.component';
import { AlphaMessageTemplateDrivenValidationDecoratorsComponent } from './message/alpha-message.component';
import { AlphaMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/alpha-message-key.component';
import { AlphaAddTemplateDrivenValidationDecoratorsComponent } from './add/alpha-add.component';

@NgModule({
  declarations: [
	AlphaCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	AlphaCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  AlphaTemplateDrivenValidationDecoratorsExtendedModule { }
