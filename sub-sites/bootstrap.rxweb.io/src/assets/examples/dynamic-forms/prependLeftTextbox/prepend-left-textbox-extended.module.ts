import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PrependlefttextboxCompleteComponent } from './prependLeftTextbox-complete.component';




@NgModule({
  declarations: [
    PrependlefttextboxCompleteComponent
  ],
entryComponents: [
    PrependlefttextboxCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PrependlefttextboxCompleteComponent
  ],

})
export class  PrependLeftTextboxExtendedModule { }