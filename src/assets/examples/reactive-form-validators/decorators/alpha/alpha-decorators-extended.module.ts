import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaCompleteComponent } from './complete/alpha-complete.component';
import { AlphaConditionalExpressionComponent } from './conditionalExpression/alpha-conditional-expression.component';
import { AlphaLocaleComponent } from './locale/alpha-locale.component';
import { AlphaAllowWhiteSpaceComponent } from './allowWhiteSpace/alpha-allow-white-space.component';
import { AlphaMessageComponent } from './message/alpha-message.component';
import { AlphaMessageKeyComponent } from './messageKey/alpha-message-key.component';
import { AlphaDynamicComponent } from './dynamic/alpha-dynamic.component';
import { AlphaAddComponent } from './add/alpha-add.component';
import { AlphaEditComponent } from './edit/alpha-edit.component';

@NgModule({
  declarations: [
	AlphaCompleteComponent,
	AlphaConditionalExpressionComponent,
	AlphaLocaleComponent,
	AlphaAllowWhiteSpaceComponent,
	AlphaMessageComponent,
	AlphaMessageKeyComponent,
	AlphaDynamicComponent,
	AlphaAddComponent,
	AlphaEditComponent,
  ],
entryComponents: [
	AlphaCompleteComponent,
	AlphaConditionalExpressionComponent,
	AlphaLocaleComponent,
	AlphaAllowWhiteSpaceComponent,
	AlphaMessageComponent,
	AlphaMessageKeyComponent,
	AlphaDynamicComponent,
	AlphaAddComponent,
	AlphaEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaCompleteComponent,
	AlphaConditionalExpressionComponent,
	AlphaLocaleComponent,
	AlphaAllowWhiteSpaceComponent,
	AlphaMessageComponent,
	AlphaMessageKeyComponent,
	AlphaDynamicComponent,
	AlphaAddComponent,
	AlphaEditComponent,
  ],

})
export class  AlphaDecoratorsExtendedModule { }
