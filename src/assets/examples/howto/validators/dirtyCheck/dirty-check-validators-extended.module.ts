import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DirtyCompleteValidatorComponent } from './complete/dirty-check-complete.component';
import { DirtyModifiedValidatorComponent } from './modified/dirty-modified.component';





@NgModule({
  declarations: [
    DirtyCompleteValidatorComponent,DirtyModifiedValidatorComponent
  ],
entryComponents: [
	DirtyCompleteValidatorComponent,DirtyModifiedValidatorComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DirtyCompleteValidatorComponent,DirtyModifiedValidatorComponent
  ],

})
export class  DirtyCheckValidatorsExtendedModule { }