import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { OneOfAsyncCompleteValidatorComponent } from './complete/one-of-async-complete.component';
import { OneOfAsyncMessageValidatorComponent } from './message/one-of-async-message.component';
import { OneOfAsyncAddValidatorComponent } from './add/one-of-async-add.component';
import { OneOfAsyncMatchValuesValidatorComponent } from './matchValues/one-of-async-match-values.component';
import { OneOfAsyncMessageKeyValidatorComponent } from './messageKey/one-of-async-message-key.component';

@NgModule({
  declarations: [
    OneOfAsyncCompleteValidatorComponent,
    OneOfAsyncMatchValuesValidatorComponent,
    OneOfAsyncMessageValidatorComponent,
    OneOfAsyncAddValidatorComponent,
    OneOfAsyncMessageKeyValidatorComponent
  ],
  entryComponents: [
    OneOfAsyncCompleteValidatorComponent,
    OneOfAsyncMatchValuesValidatorComponent,
    OneOfAsyncMessageValidatorComponent,
    OneOfAsyncAddValidatorComponent,
    OneOfAsyncMessageKeyValidatorComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OneOfAsyncCompleteValidatorComponent,
    OneOfAsyncMatchValuesValidatorComponent,
    OneOfAsyncMessageValidatorComponent,
    OneOfAsyncAddValidatorComponent,
    OneOfAsyncMessageKeyValidatorComponent
  ],

})
export class OneOfAsyncValidatorsExtendedModule { }
