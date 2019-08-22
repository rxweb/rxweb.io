import { RadioStaticComponent } from 'src/assets/examples/controls/radio/static/radio-static.component';
import { RadioValueComponent } from 'src/assets/examples/controls/radio/value/radio-value.component';
import { RadioInlineComponent } from 'src/assets/examples/controls/radio/inline/radio-inline.component';

export const RADIO_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        static: RadioStaticComponent,
        value: RadioValueComponent,
        inline: RadioInlineComponent
    }

}