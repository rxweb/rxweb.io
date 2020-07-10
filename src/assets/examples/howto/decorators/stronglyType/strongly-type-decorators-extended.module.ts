import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { StronglyTypeAddComponent } from './add/strongly-type-add.component';
import { StronglyTypeDefinedComponent } from './defined/strongly-type-defined.component';




@NgModule({
  declarations: [
    StronglyTypeAddComponent,StronglyTypeDefinedComponent
  ],
entryComponents: [
	StronglyTypeAddComponent,StronglyTypeDefinedComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    StronglyTypeAddComponent,StronglyTypeDefinedComponent
  ],

})
export class  StronglyTypeDecoratorsExtendedModule { }