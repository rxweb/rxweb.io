import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LatitudeCompleteValidatorComponent } from './complete/latitude-complete.component';
import { LatitudeConditionalExpressionValidatorComponent } from './conditionalExpression/latitude-conditional-expression.component';
import { LatitudeMessageValidatorComponent } from './message/latitude-message.component';
import { LatitudeMessageKeyValidatorComponent } from './messageKey/latitude-message-key.component';
import { LatitudeDynamicValidatorComponent } from './dynamic/latitude-dynamic.component';
import { LatitudeAddValidatorComponent } from './add/latitude-add.component';

@NgModule({
  declarations: [
	LatitudeCompleteValidatorComponent,
	LatitudeConditionalExpressionValidatorComponent,
	LatitudeMessageValidatorComponent,
	LatitudeMessageKeyValidatorComponent,
	LatitudeDynamicValidatorComponent,
	LatitudeAddValidatorComponent,
  ],
entryComponents: [
	LatitudeCompleteValidatorComponent,
	LatitudeConditionalExpressionValidatorComponent,
	LatitudeMessageValidatorComponent,
	LatitudeMessageKeyValidatorComponent,
	LatitudeDynamicValidatorComponent,
	LatitudeAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LatitudeCompleteValidatorComponent,
	LatitudeConditionalExpressionValidatorComponent,
	LatitudeMessageValidatorComponent,
	LatitudeMessageKeyValidatorComponent,
	LatitudeDynamicValidatorComponent,
	LatitudeAddValidatorComponent,
  ],

})
export class  LatitudeValidatorsExtendedModule { }
