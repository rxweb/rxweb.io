import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { NumericAsyncCompleteValidatorComponent } from './complete/numeric-async-complete.component';
import { NumericAsyncAcceptValueValidatorComponent } from './acceptValue/numeric-async-accept-value.component';
import { NumericAsyncIsFormatValidatorComponent } from './isFormat/numeric-async-is-format.component';
import { NumericAsyncAllowDecimalValidatorComponent } from './allowDecimal/numeric-async-allow-decimal.component';
import { NumericAsyncMessageValidatorComponent } from './message/numeric-async-message.component';
import { NumericAsyncMessageKeyValidatorComponent } from './messageKey/numeric-async-message-key.component';
import { NumericAsyncDynamicValidatorComponent } from './dynamic/numeric-async-dynamic.component';
import { NumericAsyncAddValidatorComponent } from './add/numeric-async-add.component';

@NgModule({
  declarations: [
	NumericAsyncCompleteValidatorComponent,
	NumericAsyncAcceptValueValidatorComponent,
	NumericAsyncIsFormatValidatorComponent,
	NumericAsyncAllowDecimalValidatorComponent,
	NumericAsyncMessageValidatorComponent,
	NumericAsyncMessageKeyValidatorComponent,
	NumericAsyncDynamicValidatorComponent,
	NumericAsyncAddValidatorComponent,
  ],
entryComponents: [
	NumericAsyncCompleteValidatorComponent,
	NumericAsyncAcceptValueValidatorComponent,
	NumericAsyncIsFormatValidatorComponent,
	NumericAsyncAllowDecimalValidatorComponent,
	NumericAsyncMessageValidatorComponent,
	NumericAsyncMessageKeyValidatorComponent,
	NumericAsyncDynamicValidatorComponent,
	NumericAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NumericAsyncCompleteValidatorComponent,
	NumericAsyncAcceptValueValidatorComponent,
	NumericAsyncIsFormatValidatorComponent,
	NumericAsyncAllowDecimalValidatorComponent,
	NumericAsyncMessageValidatorComponent,
	NumericAsyncMessageKeyValidatorComponent,
	NumericAsyncDynamicValidatorComponent,
	NumericAsyncAddValidatorComponent,
  ],

})
export class  NumericAsyncValidatorsExtendedModule { }
