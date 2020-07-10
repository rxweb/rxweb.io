import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgxTranslateValidationMessageCompleteValidatorComponent } from './complete/ngx-translate-validation-message-complete.component';



@NgModule({
  declarations: [
    NgxTranslateValidationMessageCompleteValidatorComponent
  ],
entryComponents: [
	NgxTranslateValidationMessageCompleteValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgxTranslateValidationMessageCompleteValidatorComponent
  ],

})
export class  NgxTranslateValidationMessageValidatorsExtendedModule { }