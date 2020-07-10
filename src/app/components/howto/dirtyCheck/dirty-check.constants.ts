import {  DirtyCompleteValidatorComponent } from "src/assets/examples/howto/validators/dirtyCheck/complete/dirty-check-complete.component";
import { DirtyCompleteComponent } from "src/assets/examples/howto/decorators/dirtyCheck/complete/dirty-check-complete.component";
import { DirtyModifiedComponent } from "src/assets/examples/howto/decorators/dirtyCheck/modified/dirty-modified.component";
import { DirtyModifiedValidatorComponent } from "src/assets/examples/howto/validators/dirtyCheck/modified/dirty-modified.component";




export const DIRTY_CHECK_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:DirtyCompleteValidatorComponent, 
        modified:DirtyModifiedValidatorComponent
    },
    decorators:
    {
        complete: DirtyCompleteComponent,
        modified:DirtyModifiedComponent
    }
}