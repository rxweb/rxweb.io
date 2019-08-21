import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DynamicurlCompleteComponent } from './complete/dynamicurl-complete.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';

@NgModule({
  declarations: [
    DynamicurlCompleteComponent
  ],
  entryComponents: [
    DynamicurlCompleteComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicurlCompleteComponent
  ],

})
export class DynamicurlValidatorsExtendedModule { }