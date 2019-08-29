import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms'
import { CheckboxCompleteComponent } from './complete/checkbox-complete.component';
import { CheckboxInlineComponent } from './inline/checkbox-inline.component';
import { CheckboxValueComponent } from './value/checkbox-value.component';
import { CheckboxSingleComponent } from './single/checkbox-single.component';
import { CheckboxMultiselectComponent } from './multiselect/checkbox-multiselect.component';
import { CheckboxSelectallComponent } from './selectall/checkbox-selectall.component';

@NgModule({
  declarations: [
    CheckboxCompleteComponent,
    CheckboxInlineComponent,
    CheckboxValueComponent,
    CheckboxSingleComponent,
    CheckboxMultiselectComponent,
    CheckboxSelectallComponent
  ],
entryComponents: [
  CheckboxCompleteComponent,
  CheckboxInlineComponent,
  CheckboxValueComponent,
  CheckboxSingleComponent,
  CheckboxMultiselectComponent,
  CheckboxSelectallComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CheckboxCompleteComponent,
    CheckboxInlineComponent,
    CheckboxValueComponent,
    CheckboxSingleComponent,
    CheckboxMultiselectComponent,
    CheckboxSelectallComponent
  ]

})
export class  CheckboxValidatorsExtendedModule { }