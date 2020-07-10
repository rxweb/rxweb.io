import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DropdownSyncComponent } from './sync/dropdown-sync.component';
import { DropdownStaticComponent } from './static/dropdown-static.component';
import { DropdownValueComponent } from './value/dropdown-value.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms'
import { DropdownMultiselectComponent } from './multiselect/dropdown-multiselect.component';
import { DropdownAsyncComponent } from './async/dropdown-async.component';


@NgModule({
  declarations: [
    DropdownStaticComponent, DropdownMultiselectComponent, DropdownValueComponent, DropdownAsyncComponent, DropdownSyncComponent
  ],
entryComponents: [
    DropdownStaticComponent, DropdownMultiselectComponent, DropdownValueComponent, DropdownAsyncComponent, DropdownSyncComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DropdownStaticComponent, DropdownMultiselectComponent, DropdownValueComponent, DropdownAsyncComponent, DropdownSyncComponent
  ],

})
export class  DropdownValidatorsExtendedModule { }