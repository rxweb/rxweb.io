import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { FactorAsyncCompleteValidatorComponent } from './complete/factor-async-complete.component';
import { FactorAsyncFieldNameValidatorComponent } from './fieldName/factor-async-field-name.component';
import { FactorAsyncDividendValidatorComponent } from './dividend/factor-async-dividend.component';
import { FactorAsyncMessageValidatorComponent } from './message/factor-async-message.component';
import { FactorAsyncMessageKeyValidatorComponent } from './messageKey/factor-async-message-key.component';
import { FactorAsyncDynamicValidatorComponent } from './dynamic/factor-async-dynamic.component';
import { FactorAsyncAddValidatorComponent } from './add/factor-async-add.component';

@NgModule({
  declarations: [
	FactorAsyncCompleteValidatorComponent,
	FactorAsyncFieldNameValidatorComponent,
	FactorAsyncDividendValidatorComponent,
	FactorAsyncMessageValidatorComponent,
	FactorAsyncMessageKeyValidatorComponent,
	FactorAsyncDynamicValidatorComponent,
	FactorAsyncAddValidatorComponent,
  ],
entryComponents: [
	FactorAsyncCompleteValidatorComponent,
	FactorAsyncFieldNameValidatorComponent,
	FactorAsyncDividendValidatorComponent,
	FactorAsyncMessageValidatorComponent,
	FactorAsyncMessageKeyValidatorComponent,
	FactorAsyncDynamicValidatorComponent,
	FactorAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FactorAsyncCompleteValidatorComponent,
	FactorAsyncFieldNameValidatorComponent,
	FactorAsyncDividendValidatorComponent,
	FactorAsyncMessageValidatorComponent,
	FactorAsyncMessageKeyValidatorComponent,
	FactorAsyncDynamicValidatorComponent,
	FactorAsyncAddValidatorComponent,
  ],

})
export class  FactorAsyncValidatorsExtendedModule { }
