import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AllOfAsyncCompleteComponent } from './complete/all-of-async-complete.component';
import { AllOfAsyncMatchValuesComponent } from './matchValues/all-of-async-match-values.component';
import { AllOfAsyncMessageComponent } from './message/all-of-async-message.component';
import { AllOfAsyncAddComponent } from './add/all-of-async-add.component';
import { AllOfAsyncMessageKeyComponent } from './messageKey/all-of-async-message-key.component';




@NgModule({
  declarations: [
	AllOfAsyncCompleteComponent,
	AllOfAsyncMatchValuesComponent,
	AllOfAsyncMessageComponent,
  AllOfAsyncAddComponent,
  AllOfAsyncMessageKeyComponent
  ],
entryComponents: [
	AllOfAsyncCompleteComponent,
	AllOfAsyncMatchValuesComponent,
	AllOfAsyncMessageComponent,
  AllOfAsyncAddComponent,
  AllOfAsyncMessageKeyComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AllOfAsyncCompleteComponent,
    AllOfAsyncMatchValuesComponent,
    AllOfAsyncMessageComponent,
    AllOfAsyncAddComponent,
    AllOfAsyncMessageKeyComponent
  ],

})
export class  AllOfAsyncDecoratorsExtendedModule { }
