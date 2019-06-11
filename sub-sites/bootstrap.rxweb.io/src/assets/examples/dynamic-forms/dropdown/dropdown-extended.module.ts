import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule, RxDynamicReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DropDownCascadingComponent } from './cascading/dropdown-cascading.component';
import { DropDownStaticComponent } from './static/dropdown-static.component';
import { DropDownValueComponent } from './value/dropdown-value.component';



@NgModule({
  declarations: [
    DropDownStaticComponent,DropDownCascadingComponent,DropDownValueComponent
  ],
entryComponents: [
    DropDownStaticComponent,DropDownCascadingComponent,DropDownValueComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxDynamicReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DropDownStaticComponent,DropDownCascadingComponent,DropDownValueComponent
  ],

})
export class  DropdownExtendedModule { }