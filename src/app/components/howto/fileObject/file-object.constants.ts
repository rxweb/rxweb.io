
import { FileobjectCompleteValidatorComponent } from "src/assets/examples/howto/validators/fileObject/complete/fileObject-complete.component";
import { FileobjectCompleteComponent } from "src/assets/examples/howto/decorators/fileObject/complete/fileObject-complete.component";

import { FileobjectExcludeImageComponent } from "src/assets/examples/howto/decorators/fileObject/excludeImageIndex/fileObject-excludeImageIndex.component";

import { FileobjectExcludeIndexValidatorComponent } from "src/assets/examples/howto/validators/fileObject/excludeindex/fileObject-excludeindex.component";


export const FILE_OBJECT_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:FileobjectCompleteValidatorComponent,
        excludeindex:FileobjectExcludeIndexValidatorComponent
    },
    decorators:
    {
        complete:FileobjectCompleteComponent,
        excludeindex:FileobjectExcludeImageComponent
    }
}