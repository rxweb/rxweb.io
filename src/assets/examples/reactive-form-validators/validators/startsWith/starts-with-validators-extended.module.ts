import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithCompleteValidatorComponent } from './complete/starts-with-complete.component';
import { StartsWithValueValidatorComponent } from './value/starts-with-value.component';
import { StartsWithIsRestrictValidatorComponent } from './isRestrict/starts-with-is-restrict.component';
import { StartsWithConditionalExpressionValidatorComponent } from './conditionalExpression/starts-with-conditional-expression.component';
import { StartsWithMessageValidatorComponent } from './message/starts-with-message.component';
import { StartsWithMessageKeyValidatorComponent } from './messageKey/starts-with-message-key.component';
import { StartsWithDynamicValidatorComponent } from './dynamic/starts-with-dynamic.component';
import { StartsWithAddValidatorComponent } from './add/starts-with-add.component';

@NgModule({
  declarations: [
	StartsWithCompleteValidatorComponent,
	StartsWithValueValidatorComponent,
	StartsWithIsRestrictValidatorComponent,
	StartsWithConditionalExpressionValidatorComponent,
	StartsWithMessageValidatorComponent,
	StartsWithMessageKeyValidatorComponent,
	StartsWithDynamicValidatorComponent,
	StartsWithAddValidatorComponent,
  ],
entryComponents: [
	StartsWithCompleteValidatorComponent,
	StartsWithValueValidatorComponent,
	StartsWithIsRestrictValidatorComponent,
	StartsWithConditionalExpressionValidatorComponent,
	StartsWithMessageValidatorComponent,
	StartsWithMessageKeyValidatorComponent,
	StartsWithDynamicValidatorComponent,
	StartsWithAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithCompleteValidatorComponent,
	StartsWithValueValidatorComponent,
	StartsWithIsRestrictValidatorComponent,
	StartsWithConditionalExpressionValidatorComponent,
	StartsWithMessageValidatorComponent,
	StartsWithMessageKeyValidatorComponent,
	StartsWithDynamicValidatorComponent,
	StartsWithAddValidatorComponent,
  ],

})
export class  StartsWithValidatorsExtendedModule { }
