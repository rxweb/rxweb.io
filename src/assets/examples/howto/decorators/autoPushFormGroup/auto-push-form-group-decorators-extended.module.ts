import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AutoPushFormGroupCompleteComponent } from './complete/auto-push-form-group-complete.component';





@NgModule({
  declarations: [
    AutoPushFormGroupCompleteComponent
  ],
entryComponents: [
	AutoPushFormGroupCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AutoPushFormGroupCompleteComponent
  ],

})
export class  AutoPushFormGroupDecoratorsExtendedModule { }