import { FocusStaticComponent } from "src/assets/examples/dynamic-forms/focus/static/focus-static.component";
import { FocusConditionalComponent } from "src/assets/examples/dynamic-forms/focus/conditional/focus-conditional.component";

export const FOCUS_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:FocusStaticComponent,
        conditional:FocusConditionalComponent
    }
}