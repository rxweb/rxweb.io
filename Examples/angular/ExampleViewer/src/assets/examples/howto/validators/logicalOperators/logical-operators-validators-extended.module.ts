import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { OrCompleteValidatorComponent } from './or/complete/or-complete.component';
import { AndAddValidatorComponent } from './and/add/and-add.component';
import { NotDigitValidatorComponent } from './not/digit/not-digit.component';


@NgModule({
  declarations: [
    OrCompleteValidatorComponent,AndAddValidatorComponent,NotDigitValidatorComponent
  ],
entryComponents: [
	OrCompleteValidatorComponent,AndAddValidatorComponent,NotDigitValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OrCompleteValidatorComponent,AndAddValidatorComponent,NotDigitValidatorComponent
  ],

})
export class  LogicalOperatorsValidatorsExtendedModule { }