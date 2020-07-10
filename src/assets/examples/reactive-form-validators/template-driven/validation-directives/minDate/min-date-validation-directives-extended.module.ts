import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinDateCompleteTemplateDrivenValidationDirectivesComponent } from './complete/min-date-complete.component';
import { MinDateValueTemplateDrivenValidationDirectivesComponent } from './value/min-date-value.component';
import { MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/min-date-conditional-expression.component';
import { MinDateMessageTemplateDrivenValidationDirectivesComponent } from './message/min-date-message.component';
import { MinDateFieldNameTemplateDrivenValidationDirectivesComponent } from './fieldName/min-date-field-name.component';
import { MinDateOperatorTemplateDrivenValidationDirectivesComponent } from './operator/min-date-operator.component';
import { MinDateMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/min-date-message-key.component';
import { MinDateAddTemplateDrivenValidationDirectivesComponent } from './add/min-date-add.component';

@NgModule({
  declarations: [
	MinDateCompleteTemplateDrivenValidationDirectivesComponent,
	MinDateValueTemplateDrivenValidationDirectivesComponent,
	MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinDateMessageTemplateDrivenValidationDirectivesComponent,
	MinDateFieldNameTemplateDrivenValidationDirectivesComponent,
	MinDateOperatorTemplateDrivenValidationDirectivesComponent,
	MinDateMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinDateAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MinDateCompleteTemplateDrivenValidationDirectivesComponent,
	MinDateValueTemplateDrivenValidationDirectivesComponent,
	MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinDateMessageTemplateDrivenValidationDirectivesComponent,
	MinDateFieldNameTemplateDrivenValidationDirectivesComponent,
	MinDateOperatorTemplateDrivenValidationDirectivesComponent,
	MinDateMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinDateAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinDateCompleteTemplateDrivenValidationDirectivesComponent,
	MinDateValueTemplateDrivenValidationDirectivesComponent,
	MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinDateMessageTemplateDrivenValidationDirectivesComponent,
	MinDateFieldNameTemplateDrivenValidationDirectivesComponent,
	MinDateOperatorTemplateDrivenValidationDirectivesComponent,
	MinDateMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinDateAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MinDateTemplateDrivenValidationDirectivesExtendedModule { }
