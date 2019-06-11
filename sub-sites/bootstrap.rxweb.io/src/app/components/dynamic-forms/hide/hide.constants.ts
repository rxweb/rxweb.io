import { HideStaticComponent } from "src/assets/examples/dynamic-forms/hide/static/hide-static.component";
import { HideConditionalComponent } from "src/assets/examples/dynamic-forms/hide/conditional/hide-conditional.component";

export const HIDE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:HideStaticComponent,
        conditional: HideConditionalComponent
    }
}