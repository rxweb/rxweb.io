import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BootstrapHorizontalComponent } from './bootstrap-horizontal/bootstrap-horizontal.component';
import { BootstrapAdvanceComponent } from './bootstrap-advance/bootstrap-advance.component';


@NgModule({
  declarations: [
    BootstrapHorizontalComponent,BootstrapAdvanceComponent
  ],
entryComponents: [
    BootstrapHorizontalComponent,BootstrapAdvanceComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BootstrapHorizontalComponent,BootstrapAdvanceComponent
  ],

})
export class AdvancedDynamicFormsExtendedModule { }