import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericAsyncCompleteValidatorComponent } from './complete/alpha-numeric-async-complete.component';
import { AlphaNumericAsyncAllowWhiteSpaceValidatorComponent } from './allowWhiteSpace/alpha-numeric-async-allow-white-space.component';
import { AlphaNumericAsyncLocaleValidatorComponent } from './locale/alpha-numeric-async-locale.component';
import { AlphaNumericAsyncMessageValidatorComponent } from './message/alpha-numeric-async-message.component';
import { AlphaNumericAsyncMessageKeyValidatorComponent } from './messageKey/alpha-numeric-async-message-key.component';
import { AlphaNumericAsyncDynamicValidatorComponent } from './dynamic/alpha-numeric-async-dynamic.component';
import { AlphaNumericAsyncAddValidatorComponent } from './add/alpha-numeric-async-add.component';

@NgModule({
  declarations: [
	AlphaNumericAsyncCompleteValidatorComponent,
	AlphaNumericAsyncAllowWhiteSpaceValidatorComponent,
	AlphaNumericAsyncLocaleValidatorComponent,
	AlphaNumericAsyncMessageValidatorComponent,
	AlphaNumericAsyncMessageKeyValidatorComponent,
	AlphaNumericAsyncDynamicValidatorComponent,
	AlphaNumericAsyncAddValidatorComponent,
  ],
entryComponents: [
	AlphaNumericAsyncCompleteValidatorComponent,
	AlphaNumericAsyncAllowWhiteSpaceValidatorComponent,
	AlphaNumericAsyncLocaleValidatorComponent,
	AlphaNumericAsyncMessageValidatorComponent,
	AlphaNumericAsyncMessageKeyValidatorComponent,
	AlphaNumericAsyncDynamicValidatorComponent,
	AlphaNumericAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericAsyncCompleteValidatorComponent,
	AlphaNumericAsyncAllowWhiteSpaceValidatorComponent,
	AlphaNumericAsyncLocaleValidatorComponent,
	AlphaNumericAsyncMessageValidatorComponent,
	AlphaNumericAsyncMessageKeyValidatorComponent,
	AlphaNumericAsyncDynamicValidatorComponent,
	AlphaNumericAsyncAddValidatorComponent,
  ],

})
export class  AlphaNumericAsyncValidatorsExtendedModule { }
