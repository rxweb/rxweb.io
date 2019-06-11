import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DisableConditionalComponent } from './conditional/disable-conditional.component';
import { DisableStaticComponent } from './static/disable-static.component';

@NgModule({
  declarations: [
    DisableConditionalComponent,
    DisableStaticComponent
  ],
entryComponents: [
    DisableConditionalComponent,
    DisableStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DisableConditionalComponent,
    DisableStaticComponent
  ],

})
export class  DynamicdisableExtendedModule { }
