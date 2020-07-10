


import { ErrormessageSingleValidatorComponent } from "src/assets/examples/howto/validators/errorMessages/single-message/errormessage-single.component";
import { ErrormessageSingleComponent } from "src/assets/examples/howto/decorators/errorMessages/single-message/errormessage-single.component";
import { ErrormessageCompleteComponent } from "src/assets/examples/howto/decorators/errorMessages/complete/errormessage-complete.component";
import { ErrormessageCompleteValidatorComponent } from "src/assets/examples/howto/validators/errorMessages/complete/errormessage-complete.component";
import { ErrormessageInvertedComponent } from "src/assets/examples/howto/decorators/errorMessages/inverted/errormessage-inverted.component";
import { ErrormessageInvertedValidatorComponent } from "src/assets/examples/howto/validators/errorMessages/inverted/errormessage-inverted.component";






export const ERROR_MESSAGES_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:
    {
        complete:ErrormessageCompleteComponent,
        single:ErrormessageSingleComponent,
        inverted:ErrormessageInvertedComponent
    },
    validators:
    {
        complete:ErrormessageCompleteValidatorComponent,
        single:ErrormessageSingleValidatorComponent,
        inverted:ErrormessageInvertedValidatorComponent
    }
}