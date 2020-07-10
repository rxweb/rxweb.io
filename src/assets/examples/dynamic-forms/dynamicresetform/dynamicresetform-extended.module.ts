import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import { DynamicResetFormFormsonlyComponent } from './controlsOnly/dynamic-reset-form.component';
import { DynamicResetDefinedPropsOnlyComponent } from './definedPropsOnly/dynamic-reset-defined-props-only.component';
import { DynamicresetvalueComponent } from './value/dynamic-reset-value.component';


@NgModule({
  declarations: [
    DynamicResetFormFormsonlyComponent,DynamicResetDefinedPropsOnlyComponent,DynamicresetvalueComponent
  ],
entryComponents: [
    DynamicResetFormFormsonlyComponent,DynamicResetDefinedPropsOnlyComponent,DynamicresetvalueComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicResetFormFormsonlyComponent,DynamicResetDefinedPropsOnlyComponent,DynamicresetvalueComponent
  ],

})
export class  DynamicresetformExtendedModule { }