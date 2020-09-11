import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NoneOfAsyncCompleteValidatorComponent } from './complete/none-of-async-complete.component';
import { NoneOfAsyncAddValidatorComponent } from './add/none-of-async-add.component';
import { NoneOfAsyncMatchValuesValidatorComponent } from './matchValues/none-of-async-match-values.component';
import { NoneOfAsyncMessageValidatorComponent } from './message/none-of-async-message.component';
import { NoneOfAsyncNonArrayValueValidatorComponent } from './nonArrayValue/none-of-async-non-array-value.component';
import { NoneOfAsyncMessageKeyValidatorComponent } from './messageKey/none-of-async-message-key.component';



@NgModule({
  declarations: [
	NoneOfAsyncCompleteValidatorComponent,
	NoneOfAsyncMatchValuesValidatorComponent,
	NoneOfAsyncMessageValidatorComponent,
	NoneOfAsyncAddValidatorComponent,
  NoneOfAsyncNonArrayValueValidatorComponent,
  NoneOfAsyncMessageKeyValidatorComponent
  ],
entryComponents: [
	NoneOfAsyncCompleteValidatorComponent,
	NoneOfAsyncMatchValuesValidatorComponent,
	NoneOfAsyncMessageValidatorComponent,
	NoneOfAsyncAddValidatorComponent,
  NoneOfAsyncNonArrayValueValidatorComponent,
  NoneOfAsyncMessageKeyValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NoneOfAsyncCompleteValidatorComponent,
	NoneOfAsyncMatchValuesValidatorComponent,
	NoneOfAsyncMessageValidatorComponent,
	NoneOfAsyncAddValidatorComponent,
  NoneOfAsyncNonArrayValueValidatorComponent,
  NoneOfAsyncMessageKeyValidatorComponent
  ],

})
export class  NoneOfAsyncValidatorsExtendedModule { }
