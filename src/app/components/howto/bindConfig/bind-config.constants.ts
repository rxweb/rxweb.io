import { BindConfigCompleteValidatorComponent } from "src/assets/examples/howto/validators/bindConfig/complete/bind-config-complete.component";
import { BindConfigCompleteComponent } from "src/assets/examples/howto/decorators/bindConfig/complete/bind-config-complete.component";




export const BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:BindConfigCompleteValidatorComponent,   
    },
    decorators:
    {
        complete: BindConfigCompleteComponent
    }
}