import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ResetCompleteValidatorComponent } from './complete/reset-complete.component';
import { ResetControlsOnlyValidatorComponent } from './controlsOnly/reset-controls-only.component';
import { ResetFormGroupsOnlyValidatorComponent } from './formGroupsOnly/reset-form-group-only.component';
import { ResetFormArraysOnlyValidatorComponent } from './formArraysOnly/reset-form-array-only.component';
import { ResetcontrolsAndFormGroupsOnlyValidatorComponent } from './controlsAndFormGroupsOnly/reset-controls-and-form-groups-only.component';
import { ResetAllValidatorComponent } from './all/reset-all.component';
import { ResetWithValidatorComponent } from './with/reset-with.component';
import { ResetValueValidatorComponent } from './value/reset-value.component';
import { ResetDefinedPropsOnlyValidatorComponent } from './definedPropsOnly/reset-defined-props-only.component';









@NgModule({
  declarations: [
    ResetCompleteValidatorComponent,ResetControlsOnlyValidatorComponent,ResetFormGroupsOnlyValidatorComponent,ResetFormArraysOnlyValidatorComponent,ResetcontrolsAndFormGroupsOnlyValidatorComponent,ResetAllValidatorComponent,ResetWithValidatorComponent,ResetValueValidatorComponent,ResetDefinedPropsOnlyValidatorComponent
  ],
entryComponents: [
	ResetCompleteValidatorComponent,ResetControlsOnlyValidatorComponent,ResetFormGroupsOnlyValidatorComponent,ResetFormArraysOnlyValidatorComponent,ResetcontrolsAndFormGroupsOnlyValidatorComponent,ResetAllValidatorComponent,ResetWithValidatorComponent,ResetValueValidatorComponent,ResetDefinedPropsOnlyValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ResetCompleteValidatorComponent,ResetControlsOnlyValidatorComponent,ResetFormGroupsOnlyValidatorComponent,ResetFormArraysOnlyValidatorComponent,ResetcontrolsAndFormGroupsOnlyValidatorComponent,ResetAllValidatorComponent,ResetWithValidatorComponent,ResetValueValidatorComponent,ResetDefinedPropsOnlyValidatorComponent
  ],

})
export class  ResetFormValidatorsExtendedModule { }