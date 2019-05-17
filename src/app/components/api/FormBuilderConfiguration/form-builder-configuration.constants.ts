import { FormbuilderconfigurationCompleteComponent } from "src/assets/examples/api/FormBuilderConfiguration/complete/formbuilderconfiguration-complete.component";
import { FormbuilderconfigurationObjectComponent } from "src/assets/examples/api/FormBuilderConfiguration/object/formbuilderconfiguration-object.component";
import { FormbuilderconfigurationArrayobjectComponent } from "src/assets/examples/api/FormBuilderConfiguration/arrayobject/formbuilderconfiguration-arrayobject.component";
import { FormbuilderconfigurationIncludepropsComponent } from "src/assets/examples/api/FormBuilderConfiguration/includeprops/formbuilderconfiguration-includeprops.component";
import { FormbuilderconfigurationIgnoreundefinedpropsComponent } from "src/assets/examples/api/FormBuilderConfiguration/ignoreUndefinedProps/formbuilderconfiguration-ignoreundefinedprops.component";
import { FormbuilderconfigurationDynamicdefaultComponent } from "src/assets/examples/api/FormBuilderConfiguration/dynamicDefaultValue/formbuilderconfiguration-dynamic.component";




export const FORM_BUILDER_CONFIGURATION_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:
    {
        complete: FormbuilderconfigurationCompleteComponent,
        object:FormbuilderconfigurationObjectComponent,
        arrayobject:FormbuilderconfigurationArrayobjectComponent,
        includeprops:FormbuilderconfigurationIncludepropsComponent,
        ignoreundefined:FormbuilderconfigurationIgnoreundefinedpropsComponent,
        dynamicdefault:FormbuilderconfigurationDynamicdefaultComponent
    },
}