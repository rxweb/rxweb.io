import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { DifferentCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/different-complete.component';
import { DifferentFieldNameTemplateDrivenValidationDecoratorsComponent } from './fieldName/different-field-name.component';
import { DifferentMessageTemplateDrivenValidationDecoratorsComponent } from './message/different-message.component';
import { DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/different-message-key.component';
import { DifferentAddTemplateDrivenValidationDecoratorsComponent } from './add/different-add.component';

@NgModule({
  declarations: [
	DifferentCompleteTemplateDrivenValidationDecoratorsComponent,
	DifferentFieldNameTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DifferentAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	DifferentCompleteTemplateDrivenValidationDecoratorsComponent,
	DifferentFieldNameTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DifferentAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DifferentCompleteTemplateDrivenValidationDecoratorsComponent,
	DifferentFieldNameTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageTemplateDrivenValidationDecoratorsComponent,
	DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent,
	DifferentAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  DifferentTemplateDrivenValidationDecoratorsExtendedModule { }
