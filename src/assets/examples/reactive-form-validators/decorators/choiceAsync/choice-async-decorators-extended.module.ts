import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ChoiceAsyncCompleteComponent } from './complete/choice-async-complete.component';
import { ChoiceAsyncMessageComponent } from './message/choice-async-message.component';
import { ChoiceAsyncAddComponent } from './add/choice-async-add.component';
import { ChoiceAsyncMaxLengthComponent } from './maxLength/choice-async-max-length.component';
import { ChoiceAsyncMinLengthComponent } from './minLength/choice-async-min-length.component';
import { ChoiceAsyncMessageKeyComponent } from './messageKey/choice-async-message-key.component';

@NgModule({
  declarations: [
    ChoiceAsyncCompleteComponent,
    ChoiceAsyncMinLengthComponent,
    ChoiceAsyncMaxLengthComponent,
    ChoiceAsyncMessageComponent,
    ChoiceAsyncAddComponent,
    ChoiceAsyncMessageKeyComponent
  ],
  entryComponents: [
    ChoiceAsyncCompleteComponent,
    ChoiceAsyncMinLengthComponent,
    ChoiceAsyncMaxLengthComponent,
    ChoiceAsyncMessageComponent,
    ChoiceAsyncAddComponent,
    ChoiceAsyncMessageKeyComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ChoiceAsyncCompleteComponent,
    ChoiceAsyncMinLengthComponent,
    ChoiceAsyncMaxLengthComponent,
    ChoiceAsyncMessageComponent,
    ChoiceAsyncAddComponent,
    ChoiceAsyncMessageKeyComponent
  ],

})
export class ChoiceAsyncDecoratorsExtendedModule { }
