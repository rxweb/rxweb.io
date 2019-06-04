import { DropDownStaticComponent } from "src/assets/examples/dynamic-forms/dropdown/static/dropdown-static.component";
import { DropDownCascadingComponent } from "src/assets/examples/dynamic-forms/dropdown/cascading/dropdown-cascading.component";


export const DROPDOWN_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        static: DropDownStaticComponent,
        cascading:DropDownCascadingComponent
    }
}