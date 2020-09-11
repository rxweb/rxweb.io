import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { PatternAsyncCompleteComponent } from './complete/pattern-async-complete.component';
import { PatternAsyncExpressionComponent } from './expression/pattern-async-expression.component';
import { PatternAsyncMessageComponent } from './message/pattern-async-message.component';
import { PatternAsyncMessageKeyComponent } from './messageKey/pattern-async-message-key.component';
import { PatternAsyncDynamicComponent } from './dynamic/pattern-async-dynamic.component';
import { PatternAsyncAddComponent } from './add/pattern-async-add.component';
import { PatternAsyncEditComponent } from './edit/pattern-async-edit.component';

@NgModule({
  declarations: [
	PatternAsyncCompleteComponent,
	PatternAsyncExpressionComponent,
	PatternAsyncMessageComponent,
	PatternAsyncMessageKeyComponent,
	PatternAsyncDynamicComponent,
	PatternAsyncAddComponent,
	PatternAsyncEditComponent,
  ],
entryComponents: [
	PatternAsyncCompleteComponent,
	PatternAsyncExpressionComponent,
	PatternAsyncMessageComponent,
	PatternAsyncMessageKeyComponent,
	PatternAsyncDynamicComponent,
	PatternAsyncAddComponent,
	PatternAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PatternAsyncCompleteComponent,
	PatternAsyncExpressionComponent,
	PatternAsyncMessageComponent,
	PatternAsyncMessageKeyComponent,
	PatternAsyncDynamicComponent,
	PatternAsyncAddComponent,
	PatternAsyncEditComponent,
  ],

})
export class  PatternAsyncDecoratorsExtendedModule { }
