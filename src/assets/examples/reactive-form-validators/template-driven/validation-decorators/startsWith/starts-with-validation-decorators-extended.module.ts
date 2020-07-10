import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/starts-with-complete.component';
import { StartsWithValueTemplateDrivenValidationDecoratorsComponent } from './value/starts-with-value.component';
import { StartsWithIsRestrictTemplateDrivenValidationDecoratorsComponent } from './isRestrict/starts-with-is-restrict.component';
import { StartsWithConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/starts-with-conditional-expression.component';
import { StartsWithMessageTemplateDrivenValidationDecoratorsComponent } from './message/starts-with-message.component';
import { StartsWithMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/starts-with-message-key.component';
import { StartsWithAddTemplateDrivenValidationDecoratorsComponent } from './add/starts-with-add.component';

@NgModule({
  declarations: [
	StartsWithCompleteTemplateDrivenValidationDecoratorsComponent,
	StartsWithValueTemplateDrivenValidationDecoratorsComponent,
	StartsWithIsRestrictTemplateDrivenValidationDecoratorsComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageKeyTemplateDrivenValidationDecoratorsComponent,
	StartsWithAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	StartsWithCompleteTemplateDrivenValidationDecoratorsComponent,
	StartsWithValueTemplateDrivenValidationDecoratorsComponent,
	StartsWithIsRestrictTemplateDrivenValidationDecoratorsComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageKeyTemplateDrivenValidationDecoratorsComponent,
	StartsWithAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithCompleteTemplateDrivenValidationDecoratorsComponent,
	StartsWithValueTemplateDrivenValidationDecoratorsComponent,
	StartsWithIsRestrictTemplateDrivenValidationDecoratorsComponent,
	StartsWithConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageTemplateDrivenValidationDecoratorsComponent,
	StartsWithMessageKeyTemplateDrivenValidationDecoratorsComponent,
	StartsWithAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  StartsWithTemplateDrivenValidationDecoratorsExtendedModule { }
