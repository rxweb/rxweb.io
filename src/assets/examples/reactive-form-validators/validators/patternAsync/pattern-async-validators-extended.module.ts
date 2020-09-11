import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PatternAsyncCompleteValidatorComponent } from './complete/pattern-async-complete.component';
import { PatternAsyncExpressionValidatorComponent } from './expression/pattern-async-expression.component';
import { PatternAsyncMessageValidatorComponent } from './message/pattern-async-message.component';
import { PatternAsyncMessageKeyValidatorComponent } from './messageKey/pattern-async-message-key.component';
import { PatternAsyncDynamicValidatorComponent } from './dynamic/pattern-async-dynamic.component';
import { PatternAsyncAddValidatorComponent } from './add/pattern-async-add.component';

@NgModule({
  declarations: [
	PatternAsyncCompleteValidatorComponent,
	PatternAsyncExpressionValidatorComponent,
	PatternAsyncMessageValidatorComponent,
	PatternAsyncMessageKeyValidatorComponent,
	PatternAsyncDynamicValidatorComponent,
	PatternAsyncAddValidatorComponent,
  ],
entryComponents: [
	PatternAsyncCompleteValidatorComponent,
	PatternAsyncExpressionValidatorComponent,
	PatternAsyncMessageValidatorComponent,
	PatternAsyncMessageKeyValidatorComponent,
	PatternAsyncDynamicValidatorComponent,
	PatternAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PatternAsyncCompleteValidatorComponent,
	PatternAsyncExpressionValidatorComponent,
	PatternAsyncMessageValidatorComponent,
	PatternAsyncMessageKeyValidatorComponent,
	PatternAsyncDynamicValidatorComponent,
	PatternAsyncAddValidatorComponent,
  ],

})
export class  PatternAsyncValidatorsExtendedModule { }
