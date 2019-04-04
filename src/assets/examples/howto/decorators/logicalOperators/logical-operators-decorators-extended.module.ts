import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { OrCompleteComponent } from './or/Complete/or-complete.component';
import { AndAddComponent } from './and/and-add.component';
import { NotDigitComponent } from './not/digit/not-digit.component';


@NgModule({
  declarations: [
    OrCompleteComponent,AndAddComponent,NotDigitComponent
  ],
entryComponents: [
	OrCompleteComponent,AndAddComponent,NotDigitComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OrCompleteComponent,AndAddComponent,NotDigitComponent
  ],

})
export class  LogicalOperatorsDecoratorsExtendedModule { }