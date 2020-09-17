import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MultilingualValidationMessageCompleteValidatorComponent } from './complete/multilingual-validation-message-complete.component';




@NgModule({
  declarations: [
    MultilingualValidationMessageCompleteValidatorComponent
  ],
entryComponents: [
	MultilingualValidationMessageCompleteValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MultilingualValidationMessageCompleteValidatorComponent
  ],

})
export class  MultilingualValidationMessageValidatorsExtendedModule { }