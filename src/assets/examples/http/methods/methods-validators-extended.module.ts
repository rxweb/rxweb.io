import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MethodsGetComponent } from './get/methods-get.component';
import { MethodsPatchComponent } from './patch/methods-patch.component';
import { MethodsPostComponent } from './post/methods-post.component';
import { MethodsPutComponent } from './put/methods-put.component';
import { MethodsDeleteComponent } from './delete/methods-delete.component';

@NgModule({
  declarations: [
    MethodsGetComponent,
    MethodsPatchComponent,
    MethodsPostComponent,
    MethodsPutComponent,
    MethodsDeleteComponent
  ],
entryComponents: [
  MethodsGetComponent,
  MethodsPatchComponent,
  MethodsPostComponent,
  MethodsPutComponent,
  MethodsDeleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MethodsGetComponent,
    MethodsPatchComponent,
    MethodsPostComponent,
    MethodsPutComponent,
    MethodsDeleteComponent
  ],

})
export class  MethodsValidatorsExtendedModule { }