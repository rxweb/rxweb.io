import { ReadonlyStaticComponent } from "src/assets/examples/dynamic-forms/readonly/static/readonly-static.component";
import { ReadonlyConditionalComponent } from "src/assets/examples/dynamic-forms/readonly/conditional/readonly-conditional.component";

export const READONLY_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static:ReadonlyStaticComponent,
        conditional: ReadonlyConditionalComponent
    }
}