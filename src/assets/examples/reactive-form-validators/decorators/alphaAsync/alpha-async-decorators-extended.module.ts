import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaAsyncCompleteComponent } from './complete/alpha-async-complete.component';
import { AlphaAsyncConditionalExpressionComponent } from './conditionalExpression/alpha-async-conditional-expression.component';
import { AlphaAsyncLocaleComponent } from './locale/alpha-async-locale.component';
import { AlphaAsyncAllowWhiteSpaceComponent } from './allowWhiteSpace/alpha-async-allow-white-space.component';
import { AlphaAsyncMessageComponent } from './message/alpha-async-message.component';
import { AlphaAsyncMessageKeyComponent } from './messageKey/alpha-async-message-key.component';
import { AlphaAsyncDynamicComponent } from './dynamic/alpha-async-dynamic.component';
import { AlphaAsyncAddComponent } from './add/alpha-async-add.component';
import { AlphaAsyncEditComponent } from './edit/alpha-async-edit.component';

@NgModule({
  declarations: [
	AlphaAsyncCompleteComponent,
	AlphaAsyncConditionalExpressionComponent,
	AlphaAsyncLocaleComponent,
	AlphaAsyncAllowWhiteSpaceComponent,
	AlphaAsyncMessageComponent,
	AlphaAsyncMessageKeyComponent,
	AlphaAsyncDynamicComponent,
	AlphaAsyncAddComponent,
	AlphaAsyncEditComponent,
  ],
entryComponents: [
	AlphaAsyncCompleteComponent,
	AlphaAsyncConditionalExpressionComponent,
	AlphaAsyncLocaleComponent,
	AlphaAsyncAllowWhiteSpaceComponent,
	AlphaAsyncMessageComponent,
	AlphaAsyncMessageKeyComponent,
	AlphaAsyncDynamicComponent,
	AlphaAsyncAddComponent,
	AlphaAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaAsyncCompleteComponent,
	AlphaAsyncConditionalExpressionComponent,
	AlphaAsyncLocaleComponent,
	AlphaAsyncAllowWhiteSpaceComponent,
	AlphaAsyncMessageComponent,
	AlphaAsyncMessageKeyComponent,
	AlphaAsyncDynamicComponent,
	AlphaAsyncAddComponent,
	AlphaAsyncEditComponent,
  ],

})
export class  AlphaAsyncDecoratorsExtendedModule { }
