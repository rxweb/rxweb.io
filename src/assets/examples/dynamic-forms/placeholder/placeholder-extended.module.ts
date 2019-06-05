import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PlaceholderConditionalComponent } from './conditional/placeholder-conditional.component';
import { PlaceholderStaticComponent } from './static/placeholder-static.component';

@NgModule({
  declarations: [
    PlaceholderConditionalComponent,
    PlaceholderStaticComponent
  ],
entryComponents: [
    PlaceholderConditionalComponent,
    PlaceholderStaticComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PlaceholderConditionalComponent,
    PlaceholderStaticComponent
  ],

})
export class  PlaceholderExtendedModule { }
