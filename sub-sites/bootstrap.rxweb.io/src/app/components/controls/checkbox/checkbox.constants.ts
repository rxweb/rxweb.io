import { CheckboxCompleteComponent } from 'src/assets/examples/controls/checkbox/complete/checkbox-complete.component';
import { CheckboxInlineComponent } from 'src/assets/examples/controls/checkbox/inline/checkbox-inline.component';
import { CheckboxValueComponent } from 'src/assets/examples/controls/checkbox/value/checkbox-value.component';

export const CHECKBOX_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        complete: CheckboxCompleteComponent,
        inline: CheckboxInlineComponent,
        value: CheckboxValueComponent
    }

}