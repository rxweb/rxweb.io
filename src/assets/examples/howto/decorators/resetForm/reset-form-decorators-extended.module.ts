import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ResetCompleteComponent } from './complete/reset-complete.component';
import { ResetControlsOnlyComponent } from './controlsOnly/reset-controls-only.component';
import { ResetFormGroupsOnlyComponent } from './formGroupsOnly/reset-form-group-only.component';
import { ResetFormArraysOnlyComponent } from './formArraysOnly/reset-form-array-only.component';
import { ResetcontrolsAndFormGroupsOnlyComponent } from './controlsAndFormGroupsOnly/reset-controls-and-form-groups-only.component';
import { ResetAllComponent } from './all/reset-all.component';
import { ResetWithComponent } from './with/reset-with.component';
import { ResetValueComponent } from './value/reset-value.component';
import { ResetDefinedPropsOnlyComponent } from './definedPropsOnly/reset-defined-props-only.component';







@NgModule({
  declarations: [
    ResetCompleteComponent,ResetControlsOnlyComponent,ResetFormGroupsOnlyComponent,ResetFormArraysOnlyComponent,ResetcontrolsAndFormGroupsOnlyComponent,ResetAllComponent,ResetWithComponent,ResetValueComponent,ResetDefinedPropsOnlyComponent
  ],
entryComponents: [
	ResetCompleteComponent,ResetControlsOnlyComponent,ResetFormGroupsOnlyComponent,ResetFormArraysOnlyComponent,ResetcontrolsAndFormGroupsOnlyComponent,ResetAllComponent,ResetWithComponent,ResetValueComponent,ResetDefinedPropsOnlyComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ResetCompleteComponent,ResetControlsOnlyComponent,ResetFormGroupsOnlyComponent,ResetFormArraysOnlyComponent,ResetcontrolsAndFormGroupsOnlyComponent,ResetAllComponent,ResetWithComponent,ResetValueComponent,ResetDefinedPropsOnlyComponent
  ],

})
export class  ResetFormDecoratorsExtendedModule { }