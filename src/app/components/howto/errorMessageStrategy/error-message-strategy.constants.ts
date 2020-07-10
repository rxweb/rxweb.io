
import { ErrormessagestrategyOnsubmitValidatorComponent } from "src/assets/examples/howto/validators/errorMessageStrategy/onSubmit/errormessagestrategy-onsubmit.component";
import { ErrormessagestrategyOnsubmitComponent } from "src/assets/examples/howto/decorators/errorMessageStrategy/onSubmit/errormessagestrategy-onsubmit.component";





export const ERROR_MESSAGE_STRATEGY_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    decorators:
    {
       onsubmit:ErrormessagestrategyOnsubmitComponent
    },
    validators:
    {
      onsubmit:ErrormessagestrategyOnsubmitValidatorComponent
    }
}