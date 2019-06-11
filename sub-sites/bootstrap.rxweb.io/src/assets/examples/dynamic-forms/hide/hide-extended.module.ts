import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HideConditionalComponent } from './conditional/hide-conditional.component';
import { HideStaticComponent } from './static/hide-static.component';

@NgModule({
  declarations: [
    HideConditionalComponent,
    HideStaticComponent
  ],
entryComponents: [
    HideConditionalComponent,
    HideStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HideConditionalComponent,
    HideStaticComponent
  ],

})
export class  HideExtendedModule { }
