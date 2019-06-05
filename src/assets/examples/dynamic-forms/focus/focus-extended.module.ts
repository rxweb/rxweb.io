import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FocusStaticComponent } from './static/focus-static.component';
import { FocusConditionalComponent } from './conditional/focus-conditional.component';

@NgModule({
  declarations: [
    FocusConditionalComponent,
    FocusStaticComponent
  ],
entryComponents: [
    FocusConditionalComponent,
    FocusStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FocusConditionalComponent,
    FocusStaticComponent
  ],

})
export class  FocusExtendedModule { }
