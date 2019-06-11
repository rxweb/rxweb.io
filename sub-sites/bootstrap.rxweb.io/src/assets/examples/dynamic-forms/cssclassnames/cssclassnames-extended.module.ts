import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CssClassNamesStaticComponent } from './static/cssClassNames-static.component';
import { CssClassNamesConditionalComponent } from './conditional/cssClassNames-conditional.component';

@NgModule({
  declarations: [
    CssClassNamesConditionalComponent,
    CssClassNamesStaticComponent
  ],
entryComponents: [
    CssClassNamesConditionalComponent,
    CssClassNamesStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CssClassNamesConditionalComponent,
    CssClassNamesStaticComponent
  ],

})
export class  CssclassnamesExtendedModule { }
