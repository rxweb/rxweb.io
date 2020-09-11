import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { NumericAsyncCompleteComponent } from './complete/numeric-async-complete.component';
import { NumericAsyncAcceptValueComponent } from './acceptValue/numeric-async-accept-value.component';
import { NumericAsyncIsFormatComponent } from './isFormat/numeric-async-is-format.component';
import { NumericAsyncAllowDecimalComponent } from './allowDecimal/numeric-async-allow-decimal.component';
import { NumericAsyncMessageComponent } from './message/numeric-async-message.component';
import { NumericAsyncMessageKeyComponent } from './messageKey/numeric-async-message-key.component';
import { NumericAsyncDynamicComponent } from './dynamic/numeric-async-dynamic.component';
import { NumericAsyncAddComponent } from './add/numeric-async-add.component';
import { NumericAsyncEditComponent } from './edit/numeric-async-edit.component';

@NgModule({
  declarations: [
	NumericAsyncCompleteComponent,
	NumericAsyncAcceptValueComponent,
	NumericAsyncIsFormatComponent,
	NumericAsyncAllowDecimalComponent,
	NumericAsyncMessageComponent,
	NumericAsyncMessageKeyComponent,
	NumericAsyncDynamicComponent,
	NumericAsyncAddComponent,
	NumericAsyncEditComponent,
  ],
entryComponents: [
	NumericAsyncCompleteComponent,
	NumericAsyncAcceptValueComponent,
	NumericAsyncIsFormatComponent,
	NumericAsyncAllowDecimalComponent,
	NumericAsyncMessageComponent,
	NumericAsyncMessageKeyComponent,
	NumericAsyncDynamicComponent,
	NumericAsyncAddComponent,
	NumericAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NumericAsyncCompleteComponent,
	NumericAsyncAcceptValueComponent,
	NumericAsyncIsFormatComponent,
	NumericAsyncAllowDecimalComponent,
	NumericAsyncMessageComponent,
	NumericAsyncMessageKeyComponent,
	NumericAsyncDynamicComponent,
	NumericAsyncAddComponent,
	NumericAsyncEditComponent,
  ],

})
export class  NumericAsyncDecoratorsExtendedModule { }
