import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ComposeAddComponent } from './add/compose-add.component';
import { ComposeValidatorsComponent } from './validators/compose-validators.component';
import { ComposeMessageComponent } from './message/compose-message.component';
import { ComposeMessageKeyComponent } from './messageKey/compose-message-key.component';
import { ComposeConditionalExpressionComponent } from './conditionalExpression/compose-conditional-expression.component';
import { ComposeCompleteComponent } from './complete/compose-complete.component';


@NgModule({
  declarations: [
    ComposeAddComponent,
    ComposeValidatorsComponent,
    ComposeMessageComponent,
    ComposeMessageKeyComponent,
    ComposeConditionalExpressionComponent,
    ComposeCompleteComponent
  ],
entryComponents: [
    ComposeAddComponent,
    ComposeValidatorsComponent,
    ComposeMessageComponent,
    ComposeMessageKeyComponent,
    ComposeConditionalExpressionComponent,
    ComposeCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ComposeAddComponent,
    ComposeValidatorsComponent,
    ComposeMessageComponent,
    ComposeMessageKeyComponent,
    ComposeConditionalExpressionComponent,
    ComposeCompleteComponent
  ],

})
export class  ComposeDecoratorsExtendedModule { }
