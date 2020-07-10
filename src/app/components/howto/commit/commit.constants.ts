

import { CommitDynamicComponent } from "src/assets/examples/howto/decorators/commit/dynamic/commit-dynamic.component";
import { CommitDynamicValidatorComponent } from "src/assets/examples/howto/validators/commit/dynamic/commit-dynamic.component";




export const COMMIT_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        dynamic:CommitDynamicValidatorComponent 
       
    },
    decorators:
    {
        dynamic: CommitDynamicComponent
       
    }
}