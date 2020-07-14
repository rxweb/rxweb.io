import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaskCompleteValidatorComponent } from './complete/mask-complete.component';
import { MaskMaskValidatorComponent } from './mask/mask-mask.component';
import { MaskConditionalExpressionValidatorComponent } from './conditionalExpression/mask-conditional-expression.component';
import { MaskMessageValidatorComponent } from './message/mask-message.component';
import { MaskMinLengthValidatorComponent } from './minLength/mask-min-length.component';
import { MaskMessageKeyValidatorComponent } from './messageKey/mask-message-key.component';
import { MaskDynamicValidatorComponent } from './dynamic/mask-dynamic.component';
import { MaskAddValidatorComponent } from './add/mask-add.component';

@NgModule({
  declarations: [
	MaskCompleteValidatorComponent,
	MaskMaskValidatorComponent,
	MaskConditionalExpressionValidatorComponent,
	MaskMessageValidatorComponent,
	MaskMinLengthValidatorComponent,
	MaskMessageKeyValidatorComponent,
	MaskDynamicValidatorComponent,
	MaskAddValidatorComponent,
  ],
entryComponents: [
	MaskCompleteValidatorComponent,
	MaskMaskValidatorComponent,
	MaskConditionalExpressionValidatorComponent,
	MaskMessageValidatorComponent,
	MaskMinLengthValidatorComponent,
	MaskMessageKeyValidatorComponent,
	MaskDynamicValidatorComponent,
	MaskAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaskCompleteValidatorComponent,
	MaskMaskValidatorComponent,
	MaskConditionalExpressionValidatorComponent,
	MaskMessageValidatorComponent,
	MaskMinLengthValidatorComponent,
	MaskMessageKeyValidatorComponent,
	MaskDynamicValidatorComponent,
	MaskAddValidatorComponent,
  ],

})
export class  MaskValidatorsExtendedModule { }
