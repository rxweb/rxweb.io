import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { CreditCardAsyncCompleteValidatorComponent } from './complete/credit-card-async-complete.component';
import { CreditCardAsyncDynamicValidatorComponent } from './dynamic/credit-card-async-dynamic.component';
import { CreditCardAsyncAddValidatorComponent } from './add/credit-card-async-add.component';

@NgModule({
  declarations: [
	CreditCardAsyncCompleteValidatorComponent,
	CreditCardAsyncDynamicValidatorComponent,
	CreditCardAsyncAddValidatorComponent,
  ],
entryComponents: [
	CreditCardAsyncCompleteValidatorComponent,
	CreditCardAsyncDynamicValidatorComponent,
	CreditCardAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CreditCardAsyncCompleteValidatorComponent,
	CreditCardAsyncDynamicValidatorComponent,
	CreditCardAsyncAddValidatorComponent,
  ],

})
export class  CreditCardAsyncValidatorsExtendedModule { }
