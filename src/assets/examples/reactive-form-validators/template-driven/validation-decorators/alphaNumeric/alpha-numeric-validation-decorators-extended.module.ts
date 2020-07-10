import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/alpha-numeric-complete.component';
import { AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent } from './allowWhiteSpace/alpha-numeric-allow-white-space.component';
import { AlphaNumericLocaleTemplateDrivenValidationDecoratorsComponent } from './locale/alpha-numeric-locale.component';
import { AlphaNumericMessageTemplateDrivenValidationDecoratorsComponent } from './message/alpha-numeric-message.component';
import { AlphaNumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/alpha-numeric-conditional-expression.component';
import { AlphaNumericMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/alpha-numeric-message-key.component';
import { AlphaNumericAddTemplateDrivenValidationDecoratorsComponent } from './add/alpha-numeric-add.component';

@NgModule({
  declarations: [
	AlphaNumericCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	AlphaNumericCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericCompleteTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericLocaleTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
	AlphaNumericAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  AlphaNumericTemplateDrivenValidationDecoratorsExtendedModule { }
