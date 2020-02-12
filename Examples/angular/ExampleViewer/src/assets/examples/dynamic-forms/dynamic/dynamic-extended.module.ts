import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import { DynamicBasicComponent } from './basic/dynamic-basic.component';
import { DynamicPlainTextComponent } from './plainText/dynamic-plain-text.component';
import { DynamicDisabledCheckboxComponent } from './disabledCheckbox/dynamic-disabled-checkbox.component';
import { DynamicDisabledRadioComponent } from './disabledRadio/dynamic-disabled-radio.component';
import { DynamicCustomSizingComponent } from './customSizing/dynamic-custom-sizing.component';
import { DynamicInlineFormComponent } from './inlineForm/dynamic-inline-form.component';
import { DynamicLabelSizingComponent } from './labelSizing/dynamic-label-sizing.component';
import { DynamicAdvanceLayoutComponent } from './advanceLayout/dynamic-advance-layout.component';
import { DynamicHorizontalLayoutComponent } from './horizontalLayout/dynamic-horizontal-layout.component';
import { DynamicPrependTextboxComponent } from './prependTextbox/dynamic-prepend-textbox.component';

@NgModule({
  declarations: [
    DynamicBasicComponent,
    DynamicPlainTextComponent,
    DynamicDisabledCheckboxComponent,
    DynamicDisabledRadioComponent,
    DynamicCustomSizingComponent,
    DynamicInlineFormComponent,
    DynamicLabelSizingComponent,
    DynamicAdvanceLayoutComponent,
    DynamicHorizontalLayoutComponent,
    DynamicPrependTextboxComponent
  ],
entryComponents: [
  DynamicBasicComponent,
  DynamicPlainTextComponent,
  DynamicDisabledCheckboxComponent,
  DynamicDisabledRadioComponent,
  DynamicCustomSizingComponent,
  DynamicInlineFormComponent,
  DynamicLabelSizingComponent,
  DynamicAdvanceLayoutComponent,
  DynamicHorizontalLayoutComponent,
  DynamicPrependTextboxComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DynamicBasicComponent,
    DynamicPlainTextComponent,
    DynamicDisabledCheckboxComponent,
    DynamicDisabledRadioComponent,
    DynamicCustomSizingComponent,
    DynamicInlineFormComponent,
    DynamicLabelSizingComponent,
    DynamicAdvanceLayoutComponent,
    DynamicHorizontalLayoutComponent,
    DynamicPrependTextboxComponent
  ],

})
export class  DynamicExtendedModule { }