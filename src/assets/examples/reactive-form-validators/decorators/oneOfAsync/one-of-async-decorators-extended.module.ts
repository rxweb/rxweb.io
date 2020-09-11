import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { OneOfAsyncCompleteComponent } from './complete/one-of-async-complete.component';
import { OneOfAsyncMatchValuesComponent } from './matchValues/one-of-async-match-values.component';
import { OneOfAsyncMessageComponent } from './message/one-of-async-message.component';
import { OneOfAsyncAddComponent } from './add/one-of-async-add.component';
import { OneOfAsyncMessageKeyComponent } from './messageKey/one-of-async-message-key.component';

@NgModule({
  declarations: [
    OneOfAsyncCompleteComponent,
    OneOfAsyncMatchValuesComponent,
    OneOfAsyncMessageComponent,
    OneOfAsyncAddComponent,
    OneOfAsyncMessageKeyComponent
  ],
  entryComponents: [
    OneOfAsyncCompleteComponent,
    OneOfAsyncMatchValuesComponent,
    OneOfAsyncMessageComponent,
    OneOfAsyncAddComponent,
    OneOfAsyncMessageKeyComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OneOfAsyncCompleteComponent,
    OneOfAsyncMatchValuesComponent,
    OneOfAsyncMessageComponent,
    OneOfAsyncAddComponent,
    OneOfAsyncMessageKeyComponent
  ],

})
export class OneOfAsyncDecoratorsExtendedModule { }
