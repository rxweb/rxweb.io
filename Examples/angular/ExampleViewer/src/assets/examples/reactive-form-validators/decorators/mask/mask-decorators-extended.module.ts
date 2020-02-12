import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MaskCompleteComponent } from './complete/mask-complete.component';
import { MaskMaskComponent } from './mask/mask-mask.component';
import { MaskConditionalExpressionComponent } from './conditionalExpression/mask-conditional-expression.component';
import { MaskMessageComponent } from './message/mask-message.component';
import { MaskMessageKeyComponent } from './messageKey/mask-message-key.component';
import { MaskDynamicComponent } from './dynamic/mask-dynamic.component';
import { MaskAddComponent } from './add/mask-add.component';
import { MaskEditComponent } from './edit/mask-edit.component';

@NgModule({
  declarations: [
	MaskCompleteComponent,
	MaskMaskComponent,
	MaskConditionalExpressionComponent,
	MaskMessageComponent,
	MaskMessageKeyComponent,
	MaskDynamicComponent,
	MaskAddComponent,
	MaskEditComponent,
  ],
entryComponents: [
	MaskCompleteComponent,
	MaskMaskComponent,
	MaskConditionalExpressionComponent,
	MaskMessageComponent,
	MaskMessageKeyComponent,
	MaskDynamicComponent,
	MaskAddComponent,
	MaskEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MaskCompleteComponent,
	MaskMaskComponent,
	MaskConditionalExpressionComponent,
	MaskMessageComponent,
	MaskMessageKeyComponent,
	MaskDynamicComponent,
	MaskAddComponent,
	MaskEditComponent,
  ],

})
export class  MaskDecoratorsExtendedModule { }
