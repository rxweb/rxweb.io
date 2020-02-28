
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms'
import { SessionStorageCompleteComponent } from './complete/session-storage-complete.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SessionStorageCompleteComponent
  ],
  entryComponents: [
    SessionStorageCompleteComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule,
    // BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SessionStorageCompleteComponent
  ],

})
export class SessionStorageValidatorsExtendedModule { }