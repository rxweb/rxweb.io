import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { StronglyTypeCompleteComponent } from './complete/strongly-type-complete.component';
import { StronglyTypeDefinedComponent } from './defined/strongly-type-defined.component';




@NgModule({
  declarations: [
    StronglyTypeCompleteComponent,StronglyTypeDefinedComponent
  ],
entryComponents: [
	StronglyTypeCompleteComponent,StronglyTypeDefinedComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	StronglyTypeCompleteComponent,StronglyTypeDefinedComponent
  ],

})
export class  StronglyTypeDecoratorsExtendedModule { }