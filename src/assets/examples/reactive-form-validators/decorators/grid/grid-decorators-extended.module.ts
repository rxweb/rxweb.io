import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { GridCompleteComponent } from './complete/grid-complete.component';
import { GridConditionalExpressionComponent } from './conditionalExpression/grid-conditional-expression.component';
import { GridMessageComponent } from './message/grid-message.component';
import { GridDynamicComponent } from './dynamic/grid-dynamic.component';
import { GridAddComponent } from './add/grid-add.component';
import { GridEditComponent } from './edit/grid-edit.component';
import { GridMessageKeyComponent } from './messageKey/grid-message-key.component';

@NgModule({ 
  declarations: [
	GridCompleteComponent,
	GridConditionalExpressionComponent,
	GridMessageComponent,
	GridDynamicComponent,
	GridAddComponent,
	GridEditComponent,
	GridMessageKeyComponent
  ],
entryComponents: [
	GridCompleteComponent,
	GridConditionalExpressionComponent,
	GridMessageComponent,
	GridDynamicComponent,
	GridAddComponent,
	GridEditComponent,
	GridMessageKeyComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GridCompleteComponent,
	GridConditionalExpressionComponent,
	GridMessageComponent,
	GridDynamicComponent,
	GridAddComponent,
	GridEditComponent,
	GridMessageKeyComponent
  ],

})
export class  GridDecoratorsExtendedModule { }
