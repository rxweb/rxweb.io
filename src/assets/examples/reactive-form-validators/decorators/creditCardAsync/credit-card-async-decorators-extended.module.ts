import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { CreditCardAsyncCompleteComponent } from './complete/credit-card-async-complete.component';
import { CreditCardAsyncDynamicComponent } from './dynamic/credit-card-async-dynamic.component';
import { CreditCardAsyncAddComponent } from './add/credit-card-async-add.component';
import { CreditCardAsyncEditComponent } from './edit/credit-card-async-edit.component';

@NgModule({
  declarations: [
	CreditCardAsyncCompleteComponent,
	CreditCardAsyncDynamicComponent,
	CreditCardAsyncAddComponent,
	CreditCardAsyncEditComponent,
  ],
entryComponents: [
	CreditCardAsyncCompleteComponent,
	CreditCardAsyncDynamicComponent,
	CreditCardAsyncAddComponent,
	CreditCardAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CreditCardAsyncCompleteComponent,
	CreditCardAsyncDynamicComponent,
	CreditCardAsyncAddComponent,
	CreditCardAsyncEditComponent,
  ],

})
export class  CreditCardAsyncDecoratorsExtendedModule { }
