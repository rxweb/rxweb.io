import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import { FocusCompleteComponent } from './complete/focus-complete.component';



@NgModule({
  declarations: [
    FocusCompleteComponent
  ],
entryComponents: [
	FocusCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FocusCompleteComponent
  ],

})
export class  FocusValidatorsExtendedModule { }