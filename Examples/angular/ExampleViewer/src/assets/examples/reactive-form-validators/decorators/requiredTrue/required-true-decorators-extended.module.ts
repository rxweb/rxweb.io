import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RequiredTrueCompleteComponent } from './complete/required-true-complete.component';
import { RequiredTrueConditionalExpressionComponent } from './conditionalExpression/required-true-conditional-expression.component';
import { RequiredTrueMessageComponent } from './message/required-true-message.component';
import { RequiredTrueMessageKeyComponent } from './messageKey/required-true-message-key.component';
import { RequiredTrueDynamicComponent } from './dynamic/required-true-dynamic.component';
import { RequiredTrueAddComponent } from './add/required-true-add.component';
import { RequiredTrueEditComponent } from './edit/required-true-edit.component';

@NgModule({
  declarations: [
	RequiredTrueCompleteComponent,
	RequiredTrueConditionalExpressionComponent,
	RequiredTrueMessageComponent,
	RequiredTrueMessageKeyComponent,
	RequiredTrueDynamicComponent,
	RequiredTrueAddComponent,
	RequiredTrueEditComponent,
  ],
entryComponents: [
	RequiredTrueCompleteComponent,
	RequiredTrueConditionalExpressionComponent,
	RequiredTrueMessageComponent,
	RequiredTrueMessageKeyComponent,
	RequiredTrueDynamicComponent,
	RequiredTrueAddComponent,
	RequiredTrueEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RequiredTrueCompleteComponent,
	RequiredTrueConditionalExpressionComponent,
	RequiredTrueMessageComponent,
	RequiredTrueMessageKeyComponent,
	RequiredTrueDynamicComponent,
	RequiredTrueAddComponent,
	RequiredTrueEditComponent,
  ],

})
export class  RequiredTrueDecoratorsExtendedModule { }
