import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { GridCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/grid-complete.component';
import { GridConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/grid-conditional-expression.component';
import { GridMessageTemplateDrivenValidationDecoratorsComponent } from './message/grid-message.component';
import { GridMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/grid-message-key.component';
import { GridAddTemplateDrivenValidationDecoratorsComponent } from './add/grid-add.component';

@NgModule({
  declarations: [
	GridCompleteTemplateDrivenValidationDecoratorsComponent,
	GridConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	GridMessageTemplateDrivenValidationDecoratorsComponent,
	GridMessageKeyTemplateDrivenValidationDecoratorsComponent,
	GridAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	GridCompleteTemplateDrivenValidationDecoratorsComponent,
	GridConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	GridMessageTemplateDrivenValidationDecoratorsComponent,
	GridMessageKeyTemplateDrivenValidationDecoratorsComponent,
	GridAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GridCompleteTemplateDrivenValidationDecoratorsComponent,
	GridConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	GridMessageTemplateDrivenValidationDecoratorsComponent,
	GridMessageKeyTemplateDrivenValidationDecoratorsComponent,
	GridAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  GridTemplateDrivenValidationDecoratorsExtendedModule { }
