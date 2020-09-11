import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericAsyncCompleteComponent } from './complete/alpha-numeric-async-complete.component';
import { AlphaNumericAsyncAllowWhiteSpaceComponent } from './allowWhiteSpace/alpha-numeric-async-allow-white-space.component';
import { AlphaNumericAsyncLocaleComponent } from './locale/alpha-numeric-async-locale.component';
import { AlphaNumericAsyncMessageComponent } from './message/alpha-numeric-async-message.component';
import { AlphaNumericAsyncMessageKeyComponent } from './messageKey/alpha-numeric-async-message-key.component';
import { AlphaNumericAsyncDynamicComponent } from './dynamic/alpha-numeric-async-dynamic.component';
import { AlphaNumericAsyncAddComponent } from './add/alpha-numeric-async-add.component';
import { AlphaNumericAsyncEditComponent } from './edit/alpha-numeric-async-edit.component';

@NgModule({
  declarations: [
	AlphaNumericAsyncCompleteComponent,
	AlphaNumericAsyncAllowWhiteSpaceComponent,
	AlphaNumericAsyncLocaleComponent,
	AlphaNumericAsyncMessageComponent,
	AlphaNumericAsyncMessageKeyComponent,
	AlphaNumericAsyncDynamicComponent,
	AlphaNumericAsyncAddComponent,
	AlphaNumericAsyncEditComponent,
  ],
entryComponents: [
	AlphaNumericAsyncCompleteComponent,
	AlphaNumericAsyncAllowWhiteSpaceComponent,
	AlphaNumericAsyncLocaleComponent,
	AlphaNumericAsyncMessageComponent,
	AlphaNumericAsyncMessageKeyComponent,
	AlphaNumericAsyncDynamicComponent,
	AlphaNumericAsyncAddComponent,
	AlphaNumericAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericAsyncCompleteComponent,
	AlphaNumericAsyncAllowWhiteSpaceComponent,
	AlphaNumericAsyncLocaleComponent,
	AlphaNumericAsyncMessageComponent,
	AlphaNumericAsyncMessageKeyComponent,
	AlphaNumericAsyncDynamicComponent,
	AlphaNumericAsyncAddComponent,
	AlphaNumericAsyncEditComponent,
  ],

})
export class  AlphaNumericAsyncDecoratorsExtendedModule { }
