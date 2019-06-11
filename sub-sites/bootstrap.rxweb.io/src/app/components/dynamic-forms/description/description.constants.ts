import { DescriptionConditionalComponent } from "src/assets/examples/dynamic-forms/description/conditional/description-conditional.component";
import { DescriptionStaticComponent } from "src/assets/examples/dynamic-forms/description/static/description-static.component";

export const DESCRIPTION_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:DescriptionStaticComponent,
        conditional: DescriptionConditionalComponent
    }
}