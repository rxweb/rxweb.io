import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { JsonCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/json-complete.component';
import { JsonMessageTemplateDrivenValidationDecoratorsComponent } from './message/json-message.component';
import { JsonConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/json-conditional-expression.component';
import { JsonMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/json-message-key.component';
import { JsonAddTemplateDrivenValidationDecoratorsComponent } from './add/json-add.component';

@NgModule({
  declarations: [
	JsonCompleteTemplateDrivenValidationDecoratorsComponent,
	JsonMessageTemplateDrivenValidationDecoratorsComponent,
	JsonConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	JsonMessageKeyTemplateDrivenValidationDecoratorsComponent,
	JsonAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	JsonCompleteTemplateDrivenValidationDecoratorsComponent,
	JsonMessageTemplateDrivenValidationDecoratorsComponent,
	JsonConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	JsonMessageKeyTemplateDrivenValidationDecoratorsComponent,
	JsonAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	JsonCompleteTemplateDrivenValidationDecoratorsComponent,
	JsonMessageTemplateDrivenValidationDecoratorsComponent,
	JsonConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	JsonMessageKeyTemplateDrivenValidationDecoratorsComponent,
	JsonAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  JsonTemplateDrivenValidationDecoratorsExtendedModule { }
