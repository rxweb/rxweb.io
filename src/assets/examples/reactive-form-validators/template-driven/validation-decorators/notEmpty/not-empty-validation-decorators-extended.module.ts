import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/not-empty-complete.component';
import { NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/not-empty-conditional-expression.component';
import { NotEmptyMessageTemplateDrivenValidationDecoratorsComponent } from './message/not-empty-message.component';
import { NotEmptyMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/not-empty-message-key.component';
import { NotEmptyAddTemplateDrivenValidationDecoratorsComponent } from './add/not-empty-add.component';

@NgModule({
  declarations: [
	NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NotEmptyAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NotEmptyAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent,
	NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageTemplateDrivenValidationDecoratorsComponent,
	NotEmptyMessageKeyTemplateDrivenValidationDecoratorsComponent,
	NotEmptyAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  NotEmptyTemplateDrivenValidationDecoratorsExtendedModule { }
