import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { StartsWithCompleteComponent } from './complete/starts-with-complete.component';
import { StartsWithValueComponent } from './value/starts-with-value.component';
import { StartsWithIsRestrictComponent } from './isRestrict/starts-with-is-restrict.component';
import { StartsWithConditionalExpressionComponent } from './conditionalExpression/starts-with-conditional-expression.component';
import { StartsWithMessageComponent } from './message/starts-with-message.component';
import { StartsWithMessageKeyComponent } from './messageKey/starts-with-message-key.component';
import { StartsWithDynamicComponent } from './dynamic/starts-with-dynamic.component';
import { StartsWithAddComponent } from './add/starts-with-add.component';
import { StartsWithEditComponent } from './edit/starts-with-edit.component';

@NgModule({
  declarations: [
	StartsWithCompleteComponent,
	StartsWithValueComponent,
	StartsWithIsRestrictComponent,
	StartsWithConditionalExpressionComponent,
	StartsWithMessageComponent,
	StartsWithMessageKeyComponent,
	StartsWithDynamicComponent,
	StartsWithAddComponent,
	StartsWithEditComponent,
  ],
entryComponents: [
	StartsWithCompleteComponent,
	StartsWithValueComponent,
	StartsWithIsRestrictComponent,
	StartsWithConditionalExpressionComponent,
	StartsWithMessageComponent,
	StartsWithMessageKeyComponent,
	StartsWithDynamicComponent,
	StartsWithAddComponent,
	StartsWithEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StartsWithCompleteComponent,
	StartsWithValueComponent,
	StartsWithIsRestrictComponent,
	StartsWithConditionalExpressionComponent,
	StartsWithMessageComponent,
	StartsWithMessageKeyComponent,
	StartsWithDynamicComponent,
	StartsWithAddComponent,
	StartsWithEditComponent,
  ],

})
export class  StartsWithDecoratorsExtendedModule { }
