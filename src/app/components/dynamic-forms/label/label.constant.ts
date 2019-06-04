import { LabelStaticComponent } from "src/assets/examples/dynamic-forms/ui-features/label/static/label-static.component";
import { LabelConditionalComponent } from "src/assets/examples/dynamic-forms/ui-features/label/conditional/label-conditional.component";

export const LABEL_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:LabelStaticComponent,
        conditional:LabelConditionalComponent
    }
}