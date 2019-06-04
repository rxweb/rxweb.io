import { FocusStaticComponent } from "src/assets/examples/dynamic-forms/ui-features/focus/static/focus-static.component";
import { FocusConditionalComponent } from "src/assets/examples/dynamic-forms/ui-features/focus/conditional/focus-conditional.component";

export const FOCUS_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:FocusStaticComponent,
        conditional:FocusConditionalComponent
    }
}