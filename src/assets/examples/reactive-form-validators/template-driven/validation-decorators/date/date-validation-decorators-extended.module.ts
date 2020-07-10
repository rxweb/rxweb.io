import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { DateCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/date-complete.component';
import { DateAllowISODateTemplateDrivenValidationDecoratorsComponent } from './allowISODate/date-allow-i-s-o-date.component';
import { DateConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/date-conditional-expression.component';
import { DateMessageTemplateDrivenValidationDecoratorsComponent } from './message/date-message.component';
import { DateMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/date-message-key.component';
import { DateAddTemplateDrivenValidationDecoratorsComponent } from './add/date-add.component';

@NgModule({
  declarations: [
	DateCompleteTemplateDrivenValidationDecoratorsComponent,
	DateAllowISODateTemplateDrivenValidationDecoratorsComponent,
	DateConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DateMessageTemplateDrivenValidationDecoratorsComponent,
	DateMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DateAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	DateCompleteTemplateDrivenValidationDecoratorsComponent,
	DateAllowISODateTemplateDrivenValidationDecoratorsComponent,
	DateConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DateMessageTemplateDrivenValidationDecoratorsComponent,
	DateMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DateAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DateCompleteTemplateDrivenValidationDecoratorsComponent,
	DateAllowISODateTemplateDrivenValidationDecoratorsComponent,
	DateConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	DateMessageTemplateDrivenValidationDecoratorsComponent,
	DateMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DateAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  DateTemplateDrivenValidationDecoratorsExtendedModule { }
