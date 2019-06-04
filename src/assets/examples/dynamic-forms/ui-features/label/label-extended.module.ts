import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { LabelConditionalComponent } from './conditional/label-conditional.component';
import { LabelStaticComponent } from './static/label-static.component';

@NgModule({
  declarations: [
    LabelConditionalComponent,
    LabelStaticComponent
  ],
entryComponents: [
    LabelConditionalComponent,
    LabelStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LabelConditionalComponent,
    LabelStaticComponent
  ],

})
export class  LabelExtendedModule { }
