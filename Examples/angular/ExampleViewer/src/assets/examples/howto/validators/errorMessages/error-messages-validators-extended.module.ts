import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { ErrormessageSingleValidatorComponent } from './single-message/errormessage-single.component';
import { ErrormessageCompleteValidatorComponent } from './complete/errormessage-complete.component';
import { ErrormessageInvertedValidatorComponent } from './inverted/errormessage-inverted.component';





@NgModule({
  declarations: [
    ErrormessageSingleValidatorComponent,ErrormessageCompleteValidatorComponent,ErrormessageInvertedValidatorComponent
  ],
entryComponents: [
	ErrormessageSingleValidatorComponent,ErrormessageCompleteValidatorComponent,ErrormessageInvertedValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ErrormessageSingleValidatorComponent,ErrormessageCompleteValidatorComponent,ErrormessageInvertedValidatorComponent
  ],

})
export class  ErrorMessagesValidatorsExtendedModule { }