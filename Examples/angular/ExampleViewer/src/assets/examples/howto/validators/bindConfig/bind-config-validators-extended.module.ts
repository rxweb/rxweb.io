import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BindConfigCompleteValidatorComponent } from './complete/bind-config-complete.component';
import {BindConfigReturnValidatorComponent} from './return/bind-config-return.component'


@NgModule({
  declarations: [
    BindConfigCompleteValidatorComponent,BindConfigReturnValidatorComponent
  ],
entryComponents: [
	BindConfigCompleteValidatorComponent,BindConfigReturnValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BindConfigCompleteValidatorComponent,BindConfigReturnValidatorComponent
  ],

})
export class  BindConfigValidatorsExtendedModule { }