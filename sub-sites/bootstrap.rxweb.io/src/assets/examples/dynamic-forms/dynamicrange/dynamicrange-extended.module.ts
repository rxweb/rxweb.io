import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DynamicRangeCompleteComponent } from './dynamicrange-complete.component';



@NgModule({
  declarations: [
    DynamicRangeCompleteComponent
  ],
entryComponents: [
    DynamicRangeCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicRangeCompleteComponent
  ],

})
export class  DynamicrangeExtendedModule { }