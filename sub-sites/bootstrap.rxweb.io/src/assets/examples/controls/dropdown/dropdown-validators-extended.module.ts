import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DropdownCascadingComponent } from './cascading/dropdown-cascading.component';
import { DropdownStaticComponent } from './static/dropdown-static.component';
import { DropdownValueComponent } from './value/dropdown-value.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms'
import { DropdownMultiselectComponent } from './multiselect/dropdown-multiselect.component';


@NgModule({
  declarations: [
    DropdownStaticComponent,DropdownCascadingComponent,DropdownValueComponent,DropdownMultiselectComponent
  ],
entryComponents: [
    DropdownStaticComponent,DropdownCascadingComponent,DropdownValueComponent,DropdownMultiselectComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DropdownStaticComponent,DropdownCascadingComponent,DropdownValueComponent,DropdownMultiselectComponent
  ],

})
export class  DropdownValidatorsExtendedModule { }