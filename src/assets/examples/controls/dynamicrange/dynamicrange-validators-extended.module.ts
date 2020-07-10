import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DynamicrangeCompleteComponent } from './complete/dynamicrange-complete.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { DynamicrangeValueComponent } from './value/dynamicrange-value.component';
import { DynamicrangeStepComponent } from './step/dynamicrange-step.component';



@NgModule({
  declarations: [
    DynamicrangeCompleteComponent,
    DynamicrangeValueComponent,
    DynamicrangeStepComponent
  ],
entryComponents: [
    DynamicrangeCompleteComponent,
    DynamicrangeValueComponent,
    DynamicrangeStepComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicrangeCompleteComponent,
    DynamicrangeValueComponent,
    DynamicrangeStepComponent
  ],

})
export class  DynamicrangeValidatorsExtendedModule { }