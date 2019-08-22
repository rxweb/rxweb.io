import { DropdownStaticComponent } from 'src/assets/examples/controls/dropdown/static/dropdown-static.component';
import { DropdownValueComponent } from 'src/assets/examples/controls/dropdown/value/dropdown-value.component';
import { DropdownMultiselectComponent } from 'src/assets/examples/controls/dropdown/multiselect/dropdown-multiselect.component';
import { DropdownAsyncComponent } from 'src/assets/examples/controls/dropdown/async/dropdown-async.component';
import { DropdownSyncComponent } from 'src/assets/examples/controls/dropdown/sync/dropdown-sync.component';

export const DROPDOWN_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        static: DropdownStaticComponent,
        async: DropdownAsyncComponent,
        value: DropdownValueComponent,
        multiselect: DropdownMultiselectComponent,
        sync: DropdownSyncComponent
    }

}