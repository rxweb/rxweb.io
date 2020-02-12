import { BindConfigCompleteValidatorComponent } from "src/assets/examples/howto/validators/bindConfig/complete/bind-config-complete.component";
import { BindConfigCompleteComponent } from "src/assets/examples/howto/decorators/bindConfig/complete/bind-config-complete.component";

import {BindConfigReturnComponent} from "src/assets/examples/howto/decorators/bindConfig/return/bind-config-return.component"
import {BindConfigReturnValidatorComponent} from "src/assets/examples/howto/validators/bindConfig/return/bind-config-return.component"

export const BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:BindConfigCompleteValidatorComponent,
        return:BindConfigReturnValidatorComponent   
    },
    decorators:
    {
        complete: BindConfigCompleteComponent,
        return:BindConfigReturnComponent
    }
}