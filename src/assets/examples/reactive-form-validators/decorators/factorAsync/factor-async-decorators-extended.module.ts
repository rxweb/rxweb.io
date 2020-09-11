import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { FactorAsyncCompleteComponent } from './complete/factor-async-complete.component';
import { FactorAsyncFieldNameComponent } from './fieldName/factor-async-field-name.component';
import { FactorAsyncDividendComponent } from './dividend/factor-async-dividend.component';
import { FactorAsyncMessageComponent } from './message/factor-async-message.component';
import { FactorAsyncMessageKeyComponent } from './messageKey/factor-async-message-key.component';
import { FactorAsyncDynamicComponent } from './dynamic/factor-async-dynamic.component';
import { FactorAsyncAddComponent } from './add/factor-async-add.component';
import { FactorAsyncEditComponent } from './edit/factor-async-edit.component';

@NgModule({
  declarations: [
	FactorAsyncCompleteComponent,
	FactorAsyncFieldNameComponent,
	FactorAsyncDividendComponent,
	FactorAsyncMessageComponent,
	FactorAsyncMessageKeyComponent,
	FactorAsyncDynamicComponent,
	FactorAsyncAddComponent,
	FactorAsyncEditComponent,
  ],
entryComponents: [
	FactorAsyncCompleteComponent,
	FactorAsyncFieldNameComponent,
	FactorAsyncDividendComponent,
	FactorAsyncMessageComponent,
	FactorAsyncMessageKeyComponent,
	FactorAsyncDynamicComponent,
	FactorAsyncAddComponent,
	FactorAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FactorAsyncCompleteComponent,
	FactorAsyncFieldNameComponent,
	FactorAsyncDividendComponent,
	FactorAsyncMessageComponent,
	FactorAsyncMessageKeyComponent,
	FactorAsyncDynamicComponent,
	FactorAsyncAddComponent,
	FactorAsyncEditComponent,
  ],

})
export class  FactorAsyncDecoratorsExtendedModule { }
