import { PropArrayAddComponent } from "src/assets/examples/decorators/propArray/add/prop-array-add.component";
import { PropArrayServerComponent } from "src/assets/examples/decorators/propArray/bindingServerProperty/prop-array-server.component";
import { PropArrayDefaultComponent } from "src/assets/examples/decorators/propArray/defaultValue/prop-array-default-component";
import { PropArrayEntityComponent } from "src/assets/examples/decorators/propArray/entity/prop-array-entity.component";


export const PROP_ARRAY_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:{
        add:PropArrayAddComponent,
        server:PropArrayServerComponent,
        default:PropArrayDefaultComponent,
        entity:PropArrayEntityComponent
    },
}