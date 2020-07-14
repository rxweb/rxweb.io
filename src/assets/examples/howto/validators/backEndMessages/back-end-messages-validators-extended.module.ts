import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {  BackEndMessagesCompleteValidatorComponent } from './complete/back-end-messages-complete.component';
import { BackEndMessagesAddValidatorComponent } from './add/back-end-messages-add.component';



@NgModule({
  declarations: [
    BackEndMessagesCompleteValidatorComponent,BackEndMessagesAddValidatorComponent
  ],
entryComponents: [
	BackEndMessagesCompleteValidatorComponent,BackEndMessagesAddValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BackEndMessagesCompleteValidatorComponent,BackEndMessagesAddValidatorComponent
  ],

})
export class  BackEndMessagesvalidatorsExtendedModule { }