import { DynamicCustomSizingComponent } from "src/assets/examples/dynamic-forms/dynamic/customSizing/dynamic-custom-sizing.component";
import { DynamicBasicComponent } from "src/assets/examples/dynamic-forms/dynamic/basic/dynamic-basic.component";
import { DynamicPlainTextComponent } from "src/assets/examples/dynamic-forms/dynamic/plainText/dynamic-plain-text.component";
import { DynamicDisabledCheckboxComponent } from "src/assets/examples/dynamic-forms/dynamic/disabledCheckbox/dynamic-disabled-checkbox.component";
import { DynamicDisabledRadioComponent } from "src/assets/examples/dynamic-forms/dynamic/disabledRadio/dynamic-disabled-radio.component";
import { DynamicInlineFormComponent } from "src/assets/examples/dynamic-forms/dynamic/inlineForm/dynamic-inline-form.component";
import { DynamicLabelSizingComponent } from "src/assets/examples/dynamic-forms/dynamic/labelSizing/dynamic-label-sizing.component";
import { DynamicAdvanceLayoutComponent } from "src/assets/examples/dynamic-forms/dynamic/advanceLayout/dynamic-advance-layout.component";
import { DynamicHorizontalLayoutComponent } from "src/assets/examples/dynamic-forms/dynamic/horizontalLayout/dynamic-horizontal-layout.component";
import { DynamicPrependTextboxComponent } from "src/assets/examples/dynamic-forms/dynamic/prependTextbox/dynamic-prepend-textbox.component";

export const DYNAMIC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        basic: DynamicBasicComponent,
        plainText: DynamicPlainTextComponent,
        disabledCheckbox: DynamicDisabledCheckboxComponent,
        disabledRadio: DynamicDisabledRadioComponent,
        customSizing: DynamicCustomSizingComponent,
        inlineForm: DynamicInlineFormComponent,
        labelSizing: DynamicLabelSizingComponent,
        advanceLayout: DynamicAdvanceLayoutComponent,
        horizontalLayout: DynamicHorizontalLayoutComponent,
        prependTextbox: DynamicPrependTextboxComponent
    }
}