import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { IbanCompleteValidatorComponent } from './complete/iban-complete.component';
import { IbanCountryCodeValidatorComponent } from './countryCode/iban-country-code.component';
import { IbanConditionalExpressionValidatorComponent } from './conditionalExpression/iban-conditional-expression.component';
import { IbanMessageValidatorComponent } from './message/iban-message.component';
import { IbanMessageKeyValidatorComponent } from './messageKey/iban-message-key.component';
import { IbanDynamicValidatorComponent } from './dynamic/iban-dynamic.component';
import { IbanAddValidatorComponent } from './add/iban-add.component';

@NgModule({
  declarations: [
	IbanCompleteValidatorComponent,
	IbanCountryCodeValidatorComponent,
	IbanConditionalExpressionValidatorComponent,
	IbanMessageValidatorComponent,
	IbanMessageKeyValidatorComponent,
	IbanDynamicValidatorComponent,
	IbanAddValidatorComponent,
  ],
entryComponents: [
	IbanCompleteValidatorComponent,
	IbanCountryCodeValidatorComponent,
	IbanConditionalExpressionValidatorComponent,
	IbanMessageValidatorComponent,
	IbanMessageKeyValidatorComponent,
	IbanDynamicValidatorComponent,
	IbanAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	IbanCompleteValidatorComponent,
	IbanCountryCodeValidatorComponent,
	IbanConditionalExpressionValidatorComponent,
	IbanMessageValidatorComponent,
	IbanMessageKeyValidatorComponent,
	IbanDynamicValidatorComponent,
	IbanAddValidatorComponent,
  ],

})
export class  IbanValidatorsExtendedModule { }
