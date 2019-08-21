import { DropdownStaticComponent } from 'src/assets/examples/controls/dropdown/static/dropdown-static.component';
import { DropdownCascadingComponent } from 'src/assets/examples/controls/dropdown/cascading/dropdown-cascading.component';
import { DropdownValueComponent } from 'src/assets/examples/controls/dropdown/value/dropdown-value.component';
import { DropdownMultiselectComponent } from 'src/assets/examples/controls/dropdown/multiselect/dropdown-multiselect.component';

export const DROPDOWN_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        static: DropdownStaticComponent,
        cascading: DropdownCascadingComponent,
        value: DropdownValueComponent,
        multiselect: DropdownMultiselectComponent
    }

}