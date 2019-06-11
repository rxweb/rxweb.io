import { CssClassNamesStaticComponent } from "src/assets/examples/dynamic-forms/cssclassnames/static/cssClassNames-static.component";
import { CssClassNamesConditionalComponent } from "src/assets/examples/dynamic-forms/cssclassnames/conditional/cssClassNames-conditional.component";

export const CSSCLASSNAMES_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static: CssClassNamesStaticComponent,
        conditional: CssClassNamesConditionalComponent
    }
}