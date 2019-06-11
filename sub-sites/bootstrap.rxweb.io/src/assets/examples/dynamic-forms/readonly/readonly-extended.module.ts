import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ReadonlyStaticComponent } from './static/readonly-static.component';
import { ReadonlyConditionalComponent } from './conditional/readonly-conditional.component';

@NgModule({
  declarations: [
    ReadonlyConditionalComponent,
    ReadonlyStaticComponent
  ],
entryComponents: [
    ReadonlyConditionalComponent,
    ReadonlyStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ReadonlyConditionalComponent,
    ReadonlyStaticComponent
  ],

})
export class  ReadonlyExtendedModule { }
