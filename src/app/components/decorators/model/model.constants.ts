import { ModelAddComponent } from "src/assets/examples/decorators/model/add/model-add.component";
import { ModelExcludeComponent } from "src/assets/examples/decorators/model/excludeProps/model-exclude.component";
import { ModelErrorComponent } from "src/assets/examples/decorators/model/error/model-error.component";
import { ModelElementComponent } from "src/assets/examples/decorators/model/elementClass/model-element.component";


export const MODEL_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:
    {
        add: ModelAddComponent,
        exclude:ModelExcludeComponent,
        error:ModelErrorComponent,
        element:ModelElementComponent
    }
}