import { DisableConditionalComponent } from "src/assets/examples/dynamic-forms/ui-features/disable/conditional/disable-conditional.component";
import { DisableStaticComponent } from "src/assets/examples/dynamic-forms/ui-features/disable/static/disable-static.component";

export const DYNAMIC_DISABLE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:DisableStaticComponent,
        conditional:DisableConditionalComponent
    }
}