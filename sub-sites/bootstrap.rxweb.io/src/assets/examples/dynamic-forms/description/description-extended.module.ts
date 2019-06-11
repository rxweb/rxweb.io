import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DescriptionConditionalComponent } from './conditional/description-conditional.component';
import { DescriptionStaticComponent } from './static/description-static.component';

@NgModule({
  declarations: [
    DescriptionConditionalComponent,
    DescriptionStaticComponent
  ],
entryComponents: [
    DescriptionConditionalComponent,
    DescriptionStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DescriptionConditionalComponent,
    DescriptionStaticComponent
  ],

})
export class  DescriptionExtendedModule { }
