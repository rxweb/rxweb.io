import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { UrlCompleteValidatorComponent } from './complete/url-complete.component';
import { UrlConditionalExpressionValidatorComponent } from './conditionalExpression/url-conditional-expression.component';
import { UrlMessageValidatorComponent } from './message/url-message.component';
import { UrlUrlValidationTypeValidatorComponent } from './urlValidationType/url-url-validation-type.component';
import { UrlMessageKeyValidatorComponent } from './messageKey/url-message-key.component';
import { UrlDynamicValidatorComponent } from './dynamic/url-dynamic.component';
import { UrlAddValidatorComponent } from './add/url-add.component';

@NgModule({
  declarations: [
	UrlCompleteValidatorComponent,
	UrlConditionalExpressionValidatorComponent,
	UrlMessageValidatorComponent,
	UrlUrlValidationTypeValidatorComponent,
	UrlMessageKeyValidatorComponent,
	UrlDynamicValidatorComponent,
	UrlAddValidatorComponent,
  ],
entryComponents: [
	UrlCompleteValidatorComponent,
	UrlConditionalExpressionValidatorComponent,
	UrlMessageValidatorComponent,
	UrlUrlValidationTypeValidatorComponent,
	UrlMessageKeyValidatorComponent,
	UrlDynamicValidatorComponent,
	UrlAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UrlCompleteValidatorComponent,
	UrlConditionalExpressionValidatorComponent,
	UrlMessageValidatorComponent,
	UrlUrlValidationTypeValidatorComponent,
	UrlMessageKeyValidatorComponent,
	UrlDynamicValidatorComponent,
	UrlAddValidatorComponent,
  ],

})
export class  UrlValidatorsExtendedModule { }
