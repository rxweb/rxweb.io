import { DisableStaticComponent } from "src/assets/examples/dynamic-forms/disable/static/disable-static.component";
import { DisableConditionalComponent } from "src/assets/examples/dynamic-forms/disable/conditional/disable-conditional.component";

export const DYNAMICDISABLE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:DisableStaticComponent,
        conditional:DisableConditionalComponent
    }
}