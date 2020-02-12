import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BindConfigCompleteComponent } from './complete/bind-config-complete.component';
import { BindConfigReturnComponent } from './return/bind-config-return.component';





@NgModule({
  declarations: [
    BindConfigCompleteComponent,BindConfigReturnComponent
  ],
entryComponents: [
	BindConfigCompleteComponent,BindConfigReturnComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BindConfigCompleteComponent,BindConfigReturnComponent
  ],

})
export class  BindConfigDecoratorsExtendedModule { }