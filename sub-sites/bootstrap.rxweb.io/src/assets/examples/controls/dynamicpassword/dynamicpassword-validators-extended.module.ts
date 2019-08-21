import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DynamicpasswordCompleteComponent } from './complete/dynamicpassword-complete.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';

@NgModule({
  declarations: [
    DynamicpasswordCompleteComponent
  ],
entryComponents: [
    DynamicpasswordCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicpasswordCompleteComponent
  ],

})
export class  DynamicpasswordValidatorsExtendedModule { }