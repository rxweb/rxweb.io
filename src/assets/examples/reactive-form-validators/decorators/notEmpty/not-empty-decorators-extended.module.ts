import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NotEmptyCompleteComponent } from './complete/not-empty-complete.component';
import { NotEmptyConditionalExpressionComponent } from './conditionalExpression/not-empty-conditional-expression.component';
import { NotEmptyMessageComponent } from './message/not-empty-message.component';
import { NotEmptyDynamicComponent } from './dynamic/not-empty-dynamic.component';
import { NotEmptyAddComponent } from './add/not-empty-add.component';
import { NotEmptyEditComponent } from './edit/not-empty-edit.component';

@NgModule({
  declarations: [
	NotEmptyCompleteComponent,
	NotEmptyConditionalExpressionComponent,
	NotEmptyMessageComponent,
	NotEmptyDynamicComponent,
	NotEmptyAddComponent,
	NotEmptyEditComponent,
  ],
entryComponents: [
	NotEmptyCompleteComponent,
	NotEmptyConditionalExpressionComponent,
	NotEmptyMessageComponent,
	NotEmptyDynamicComponent,
	NotEmptyAddComponent,
	NotEmptyEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NotEmptyCompleteComponent,
	NotEmptyConditionalExpressionComponent,
	NotEmptyMessageComponent,
	NotEmptyDynamicComponent,
	NotEmptyAddComponent,
	NotEmptyEditComponent,
  ],

})
export class  NotEmptyDecoratorsExtendedModule { }
