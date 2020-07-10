import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ConditionalControlDisableCompleteComponent } from './complete/conditional-control-disable-complete.component';





@NgModule({
  declarations: [
    ConditionalControlDisableCompleteComponent
  ],
entryComponents: [
    ConditionalControlDisableCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ConditionalControlDisableCompleteComponent
  ],

})
export class  ConditionalControlDisableDecoratorsExtendedModule { }