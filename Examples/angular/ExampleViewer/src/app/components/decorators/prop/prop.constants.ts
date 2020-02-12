import { PropAddComponent } from "src/assets/examples/decorators/prop/add/prop-add.component";
import { PropServerComponent } from "src/assets/examples/decorators/prop/bindingServerProperty/prop-server.component";
import { PropDefaultComponent } from "src/assets/examples/decorators/prop/defaultValue/prop-default.component";
import { PropExcludeComponent } from "src/assets/examples/decorators/prop/excludeProps/prop-exclude.component";
import { PropPrimaryComponent } from "src/assets/examples/decorators/prop/primaryKey/prop-primary.component";

export const PROP_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:
    {
        add:PropAddComponent,
        server:PropServerComponent,
        default:PropDefaultComponent,
        exclude:PropExcludeComponent,
        primary:PropPrimaryComponent
    }
}