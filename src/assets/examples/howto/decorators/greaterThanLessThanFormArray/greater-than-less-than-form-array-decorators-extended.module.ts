import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { GreaterThanLessThanFormArrayCompleteComponent } from './complete/greater-than-less-than-form-array-complete.component';
import { GreaterThanLessThanFormArrayAddComponent } from './add/greater-than-less-than-form-array-add.component';



@NgModule({
  declarations: [
    GreaterThanLessThanFormArrayCompleteComponent,GreaterThanLessThanFormArrayAddComponent
  ],
entryComponents: [
    GreaterThanLessThanFormArrayCompleteComponent,GreaterThanLessThanFormArrayAddComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    GreaterThanLessThanFormArrayCompleteComponent,GreaterThanLessThanFormArrayAddComponent
  ],

})
export class  GreaterThanLessThanFormArrayDecoratorsExtendedModule { }