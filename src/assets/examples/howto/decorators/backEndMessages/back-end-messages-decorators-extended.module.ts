import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BackEndMessagesCompleteComponent } from './complete/back-end-messages-complete.component';
import { BackEndMessagesAddComponent } from './add/back-end-messages-add.component';



@NgModule({
  declarations: [
    BackEndMessagesCompleteComponent,BackEndMessagesAddComponent
  ],
entryComponents: [
	BackEndMessagesCompleteComponent,BackEndMessagesAddComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BackEndMessagesCompleteComponent,BackEndMessagesAddComponent
  ],

})
export class  BackEndMessagesDecoratorsExtendedModule { }