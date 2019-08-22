import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DynamicfileCompleteComponent } from './complete/dynamicfile-complete.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { DynamicfileMultipleComponent } from './multiple/dynamicfile-multiple.component';

@NgModule({
  declarations: [
    DynamicfileCompleteComponent,
    DynamicfileMultipleComponent
  ],
entryComponents: [
  DynamicfileCompleteComponent,
  DynamicfileMultipleComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicfileCompleteComponent,
    DynamicfileMultipleComponent
  ],

})
export class  DynamicfileValidatorsExtendedModule { }