import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { RadioValueComponent } from './value/radio-value.component';
import { RadioStaticComponent } from './static/radio-static.component';
import { RadioInlineComponent } from './inline/radio-inline.component';

@NgModule({
  declarations: [
    RadioValueComponent,
    RadioStaticComponent,
    RadioInlineComponent
  ],
  entryComponents: [
    RadioValueComponent,
    RadioStaticComponent,
    RadioInlineComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RadioValueComponent,
    RadioStaticComponent,
    RadioInlineComponent
  ],

})
export class RadioValidatorsExtendedModule { }