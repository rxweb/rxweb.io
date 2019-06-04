import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DropDownCascadingComponent } from './cascading/dropdown-cascading.component';
import { DropDownStaticComponent } from './static/dropdown-static.component';



@NgModule({
  declarations: [
    DropDownStaticComponent,DropDownCascadingComponent
  ],
entryComponents: [
    DropDownStaticComponent,DropDownCascadingComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DropDownStaticComponent,DropDownCascadingComponent
  ],

})
export class  DropdownExtendedModule { }