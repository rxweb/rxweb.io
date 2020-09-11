import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ChoiceAsyncAddValidatorComponent } from './add/choice-async-add.component';
import { ChoiceAsyncCompleteValidatorComponent } from './complete/choice-async-complete.component';

import { ChoiceAsyncMessageValidatorComponent } from './message/choice-async-message.component';
import { ChoiceAsyncMaxLengthValidatorComponent } from './maxLength/choice-async-max-length.component';
import { ChoiceAsyncMinLengthValidatorComponent } from './minLength/choice-async-min-length.component';
import { ChoiceAsyncMessageKeyValidatorComponent } from './messageKey/choice-async-message-key.component';

@NgModule({
  declarations: [
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncCompleteValidatorComponent,
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncMaxLengthValidatorComponent,
    ChoiceAsyncMessageValidatorComponent,
    ChoiceAsyncMinLengthValidatorComponent,
    ChoiceAsyncMessageKeyValidatorComponent
  ],
  entryComponents: [
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncCompleteValidatorComponent,
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncMaxLengthValidatorComponent,
    ChoiceAsyncMessageValidatorComponent,
    ChoiceAsyncMinLengthValidatorComponent,
    ChoiceAsyncMessageKeyValidatorComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncCompleteValidatorComponent,
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncMaxLengthValidatorComponent,
    ChoiceAsyncMessageValidatorComponent,
    ChoiceAsyncMinLengthValidatorComponent,
    ChoiceAsyncMessageKeyValidatorComponent
  ],

})
export class ChoiceAsyncValidatorsExtendedModule { }
