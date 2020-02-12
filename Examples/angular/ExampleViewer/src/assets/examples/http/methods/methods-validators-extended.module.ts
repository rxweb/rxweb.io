import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MethodsPatchComponent } from './patch/methods-patch.component';
import { MethodsPostComponent } from './post/methods-post.component';
import { MethodsPutComponent } from './put/methods-put.component';
import { MethodsDeleteComponent } from './delete/methods-delete.component';

@NgModule({
  declarations: [
    MethodsPatchComponent,
    MethodsPostComponent,
    MethodsPutComponent,
    MethodsDeleteComponent
  ],
entryComponents: [
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
    MethodsPatchComponent,
    MethodsPostComponent,
    MethodsPutComponent,
    MethodsDeleteComponent
  ],

})
export class  MethodsValidatorsExtendedModule { }