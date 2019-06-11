import { PlaceholderStaticComponent } from "src/assets/examples/dynamic-forms/placeholder/static/placeholder-static.component";
import { PlaceholderConditionalComponent } from "src/assets/examples/dynamic-forms/placeholder/conditional/placeholder-conditional.component";

export const PLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:PlaceholderStaticComponent,
        conditional:PlaceholderConditionalComponent
    }
}