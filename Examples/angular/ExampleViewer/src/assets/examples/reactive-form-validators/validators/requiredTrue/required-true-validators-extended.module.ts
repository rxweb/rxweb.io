import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RequiredTrueCompleteValidatorComponent } from './complete/required-true-complete.component';
import { RequiredTrueConditionalExpressionValidatorComponent } from './conditionalExpression/required-true-conditional-expression.component';
import { RequiredTrueMessageValidatorComponent } from './message/required-true-message.component';
import { RequiredTrueMessageKeyValidatorComponent } from './messageKey/required-true-message-key.component';
import { RequiredTrueDynamicValidatorComponent } from './dynamic/required-true-dynamic.component';
import { RequiredTrueAddValidatorComponent } from './add/required-true-add.component';

@NgModule({
  declarations: [
	RequiredTrueCompleteValidatorComponent,
	RequiredTrueConditionalExpressionValidatorComponent,
	RequiredTrueMessageValidatorComponent,
	RequiredTrueMessageKeyValidatorComponent,
	RequiredTrueDynamicValidatorComponent,
	RequiredTrueAddValidatorComponent,
  ],
entryComponents: [
	RequiredTrueCompleteValidatorComponent,
	RequiredTrueConditionalExpressionValidatorComponent,
	RequiredTrueMessageValidatorComponent,
	RequiredTrueMessageKeyValidatorComponent,
	RequiredTrueDynamicValidatorComponent,
	RequiredTrueAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RequiredTrueCompleteValidatorComponent,
	RequiredTrueConditionalExpressionValidatorComponent,
	RequiredTrueMessageValidatorComponent,
	RequiredTrueMessageKeyValidatorComponent,
	RequiredTrueDynamicValidatorComponent,
	RequiredTrueAddValidatorComponent,
  ],

})
export class  RequiredTrueValidatorsExtendedModule { }
