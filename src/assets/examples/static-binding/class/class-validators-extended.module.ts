
import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ClassCompleteComponent } from './complete/class-complete.component';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

@NgModule({
  declarations: [
    ClassCompleteComponent
  ],
entryComponents: [
	ClassCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ClassCompleteComponent
  ],

})
export class  ClassValidatorsExtendedModule { }