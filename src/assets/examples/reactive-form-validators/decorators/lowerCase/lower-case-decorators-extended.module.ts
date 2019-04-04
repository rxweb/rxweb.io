import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LowerCaseCompleteComponent } from './complete/lower-case-complete.component';
import { LowerCaseConditionalExpressionComponent } from './conditionalExpression/lower-case-conditional-expression.component';
import { LowerCaseMessageComponent } from './message/lower-case-message.component';
import { LowerCaseMessageKeyComponent } from './messageKey/lower-case-message-key.component';
import { LowerCaseDynamicComponent } from './dynamic/lower-case-dynamic.component';
import { LowerCaseAddComponent } from './add/lower-case-add.component';
import { LowerCaseEditComponent } from './edit/lower-case-edit.component';

@NgModule({
  declarations: [
	LowerCaseCompleteComponent,
	LowerCaseConditionalExpressionComponent,
	LowerCaseMessageComponent,
	LowerCaseMessageKeyComponent,
	LowerCaseDynamicComponent,
	LowerCaseAddComponent,
	LowerCaseEditComponent,
  ],
entryComponents: [
	LowerCaseCompleteComponent,
	LowerCaseConditionalExpressionComponent,
	LowerCaseMessageComponent,
	LowerCaseMessageKeyComponent,
	LowerCaseDynamicComponent,
	LowerCaseAddComponent,
	LowerCaseEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LowerCaseCompleteComponent,
	LowerCaseConditionalExpressionComponent,
	LowerCaseMessageComponent,
	LowerCaseMessageKeyComponent,
	LowerCaseDynamicComponent,
	LowerCaseAddComponent,
	LowerCaseEditComponent,
  ],

})
export class  LowerCaseDecoratorsExtendedModule { }
