import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AllOfAsyncMessageKeyValidatorComponent } from './messageKey/all-of-async-message-key.component';
import { AllOfAsyncAddValidatorComponent } from './add/all-of-async-add.component';
import { AllOfAsyncMessageValidatorComponent } from './message/all-of-async-message.component';
import { AllOfAsyncMatchValuesValidatorComponent } from './matchValues/all-of-async-match-values.component';
import { AllOfAsyncCompleteValidatorComponent } from './complete/all-of-async-complete.component';



@NgModule({
  declarations: [
	AllOfAsyncCompleteValidatorComponent,
	AllOfAsyncMatchValuesValidatorComponent,
	AllOfAsyncMessageValidatorComponent,
  AllOfAsyncAddValidatorComponent,
  AllOfAsyncMessageKeyValidatorComponent
  ],
entryComponents: [
	AllOfAsyncCompleteValidatorComponent,
	AllOfAsyncMatchValuesValidatorComponent,
	AllOfAsyncMessageValidatorComponent,
  AllOfAsyncAddValidatorComponent,
  AllOfAsyncMessageKeyValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AllOfAsyncCompleteValidatorComponent,
    AllOfAsyncMatchValuesValidatorComponent,
    AllOfAsyncMessageValidatorComponent,
    AllOfAsyncAddValidatorComponent,
    AllOfAsyncMessageKeyValidatorComponent
  ],

})
export class  AllOfAsyncValidatorsExtendedModule { }
