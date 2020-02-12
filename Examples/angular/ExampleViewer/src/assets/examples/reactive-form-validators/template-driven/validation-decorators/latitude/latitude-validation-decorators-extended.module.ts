import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LatitudeCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/latitude-complete.component';
import { LatitudeConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/latitude-conditional-expression.component';
import { LatitudeMessageTemplateDrivenValidationDecoratorsComponent } from './message/latitude-message.component';
import { LatitudeMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/latitude-message-key.component';
import { LatitudeAddTemplateDrivenValidationDecoratorsComponent } from './add/latitude-add.component';

@NgModule({
  declarations: [
	LatitudeCompleteTemplateDrivenValidationDecoratorsComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LatitudeAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	LatitudeCompleteTemplateDrivenValidationDecoratorsComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LatitudeAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LatitudeCompleteTemplateDrivenValidationDecoratorsComponent,
	LatitudeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageTemplateDrivenValidationDecoratorsComponent,
	LatitudeMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LatitudeAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  LatitudeTemplateDrivenValidationDecoratorsExtendedModule { }
