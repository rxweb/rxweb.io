
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms'
import { LocalStorageCompleteComponent } from './complete/local-storage-complete.component';

@NgModule({
  declarations: [
    LocalStorageCompleteComponent
  ],
  entryComponents: [
    LocalStorageCompleteComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule, 
    // BrowserStorage
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LocalStorageCompleteComponent
  ],

})
export class LocalStorageValidatorsExtendedModule { }