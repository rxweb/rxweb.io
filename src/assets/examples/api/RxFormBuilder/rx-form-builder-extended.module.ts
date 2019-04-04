import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormgroupAddComponent } from './add/formgroup-add.component';
import { GroupCompleteComponent } from './complete/group-complete.component';




@NgModule({
  declarations: [
    FormgroupAddComponent,GroupCompleteComponent
  ],
entryComponents: [
	FormgroupAddComponent,GroupCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FormgroupAddComponent,GroupCompleteComponent
  ],

})
export class  RxFormBuilderExtendedModule { }