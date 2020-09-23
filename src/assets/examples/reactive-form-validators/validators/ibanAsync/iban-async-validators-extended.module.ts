import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { IbanAsyncCompleteValidatorComponent } from './complete/iban-async-complete.component';
import { IbanAsyncCountryCodeValidatorComponent } from './countryCode/iban-async-country-code.component';
import { IbanAsyncMessageValidatorComponent } from './message/iban-async-message.component';
import { IbanAsyncMessageKeyValidatorComponent } from './messageKey/iban-async-message-key.component';
import { IbanAsyncDynamicValidatorComponent } from './dynamic/iban-async-dynamic.component';
import { IbanAsyncAddValidatorComponent } from './add/iban-async-add.component';

@NgModule({
  declarations: [
	IbanAsyncCompleteValidatorComponent,
	IbanAsyncCountryCodeValidatorComponent,
	IbanAsyncMessageValidatorComponent,
	IbanAsyncMessageKeyValidatorComponent,
	IbanAsyncDynamicValidatorComponent,
	IbanAsyncAddValidatorComponent,
  ],
entryComponents: [
	IbanAsyncCompleteValidatorComponent,
	IbanAsyncCountryCodeValidatorComponent,
	IbanAsyncMessageValidatorComponent,
	IbanAsyncMessageKeyValidatorComponent,
	IbanAsyncDynamicValidatorComponent,
	IbanAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	IbanAsyncCompleteValidatorComponent,
	IbanAsyncCountryCodeValidatorComponent,
	IbanAsyncMessageValidatorComponent,
	IbanAsyncMessageKeyValidatorComponent,
	IbanAsyncDynamicValidatorComponent,
	IbanAsyncAddValidatorComponent,
  ],

})
export class  IbanAsyncValidatorsExtendedModule { }
