import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NotEmptyCompleteValidatorComponent } from './complete/not-empty-complete.component';
import { NotEmptyConditionalExpressionValidatorComponent } from './conditionalExpression/not-empty-conditional-expression.component';
import { NotEmptyMessageValidatorComponent } from './message/not-empty-message.component';
import { NotEmptyDynamicValidatorComponent } from './dynamic/not-empty-dynamic.component';
import { NotEmptyAddValidatorComponent } from './add/not-empty-add.component';

@NgModule({
  declarations: [
	NotEmptyCompleteValidatorComponent,
	NotEmptyConditionalExpressionValidatorComponent,
	NotEmptyMessageValidatorComponent,
	NotEmptyDynamicValidatorComponent,
	NotEmptyAddValidatorComponent,
  ],
entryComponents: [
	NotEmptyCompleteValidatorComponent,
	NotEmptyConditionalExpressionValidatorComponent,
	NotEmptyMessageValidatorComponent,
	NotEmptyDynamicValidatorComponent,
	NotEmptyAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NotEmptyCompleteValidatorComponent,
	NotEmptyConditionalExpressionValidatorComponent,
	NotEmptyMessageValidatorComponent,
	NotEmptyDynamicValidatorComponent,
	NotEmptyAddValidatorComponent,
  ],

})
export class  NotEmptyValidatorsExtendedModule { }
