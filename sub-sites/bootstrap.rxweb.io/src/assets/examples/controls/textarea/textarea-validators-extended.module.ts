import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { TextareaCompleteComponent } from './complete/textarea-complete.component';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { TextareaSizeComponent } from './size/textarea-size.component';
import { TextareaInputlengthComponent } from './inputlength/textarea-inputlength.component';

@NgModule({
  declarations: [
    TextareaCompleteComponent,
    TextareaSizeComponent,
    TextareaInputlengthComponent
  ],
  entryComponents: [
    TextareaCompleteComponent,
    TextareaSizeComponent,
    TextareaInputlengthComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    TextareaCompleteComponent,
    TextareaSizeComponent,
    TextareaInputlengthComponent
  ],

})
export class TextareaValidatorsExtendedModule { }