import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


import { NoneOfAsyncAddComponent } from './add/none-of-async-add.component';
import { NoneOfAsyncCompleteComponent } from './complete/none-of-async-complete.component';
import { NoneOfAsyncMatchValuesComponent } from './matchValues/none-of-async-match-values.component';
import { NoneOfAsyncMessageComponent } from './message/none-of-async-message.component';
import { NoneOfAsyncNonArrayValueComponent } from './nonArrayValue/none-of-async-non-array-value.component';
import { NoneOfAsyncMessageKeyComponent } from './messageKey/none-of-async-message-key.component';

@NgModule({
  declarations: [
    NoneOfAsyncCompleteComponent,
    NoneOfAsyncMatchValuesComponent,
    NoneOfAsyncMessageComponent,
    NoneOfAsyncAddComponent,
    NoneOfAsyncNonArrayValueComponent,
    NoneOfAsyncMessageKeyComponent
  ],
  entryComponents: [
    NoneOfAsyncCompleteComponent,
    NoneOfAsyncMatchValuesComponent,
    NoneOfAsyncMessageComponent,
    NoneOfAsyncAddComponent,
    NoneOfAsyncNonArrayValueComponent,
    NoneOfAsyncMessageKeyComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NoneOfAsyncCompleteComponent,
    NoneOfAsyncMatchValuesComponent,
    NoneOfAsyncMessageComponent,
    NoneOfAsyncAddComponent,
    NoneOfAsyncNonArrayValueComponent,
    NoneOfAsyncMessageKeyComponent
  ],

})
export class NoneOfAsyncDecoratorsExtendedModule { }
