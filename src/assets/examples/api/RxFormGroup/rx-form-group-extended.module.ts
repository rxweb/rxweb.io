import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxformgroupModelinstanceComponent } from './modelInstance/rxformgroup-modelinstance.component';
import { RxFormGroupErrorMessageSummaryComponent } from './errorMessageSummary/rxformgroup-errormessagesummary.component';


@NgModule({
  declarations: [
    RxformgroupModelinstanceComponent,
    RxFormGroupErrorMessageSummaryComponent
  ],
entryComponents: [
    RxformgroupModelinstanceComponent,
    RxFormGroupErrorMessageSummaryComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RxformgroupModelinstanceComponent,
    RxFormGroupErrorMessageSummaryComponent
  ],

})
export class  RxFormGroupExtendedModule { }