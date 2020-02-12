import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { GetCompleteComponent } from './complete/get-complete.component';
import { GetGetByIdComponent } from './getById/get-get-by-id.component';
import { GetGetByQueryParamsComponent } from './getByQueryParams/get-get-by-query-params.component';
import { GetResponseTypeComponent } from './responseType/get-response-type.component';


@NgModule({
  declarations: [
    GetCompleteComponent,
    GetGetByIdComponent,
    GetGetByQueryParamsComponent,
    GetResponseTypeComponent
  ],
entryComponents: [
  GetCompleteComponent,
  GetGetByIdComponent,
  GetGetByQueryParamsComponent,
  GetResponseTypeComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    GetCompleteComponent,
    GetGetByIdComponent,
    GetGetByQueryParamsComponent,
    GetResponseTypeComponent
  ],

})
export class  GetValidatorsExtendedModule { }