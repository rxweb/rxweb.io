import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RadioCompleteComponent } from './radio-complete.component';





@NgModule({
  declarations: [
    RadioCompleteComponent
  ],
entryComponents: [
    RadioCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RadioCompleteComponent
  ],

})
export class  RadioExtendedModule { }