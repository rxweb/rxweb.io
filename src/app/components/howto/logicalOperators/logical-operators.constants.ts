import { OrCompleteComponent } from "src/assets/examples/howto/decorators/logicalOperators/or/complete/or-complete.component";
import { OrCompleteValidatorComponent } from "src/assets/examples/howto/validators/logicalOperators/or/complete/or-complete.component";
import { AndAddValidatorComponent } from "src/assets/examples/howto/validators/logicalOperators/and/add/and-add.component";
import { AndAddComponent } from "src/assets/examples/howto/decorators/logicalOperators/and/and-add.component";
import { NotDigitComponent } from "src/assets/examples/howto/decorators/logicalOperators/not/digit/not-digit.component";
import { NotDigitValidatorComponent } from "src/assets/examples/howto/validators/logicalOperators/not/digit/not-digit.component";


export const LOGICAL_OPERATORS_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:OrCompleteValidatorComponent,
        add:AndAddValidatorComponent,
        digit:NotDigitValidatorComponent
    },
    decorators:
    {
        complete:OrCompleteComponent,
        add:AndAddComponent,
        digit:NotDigitComponent
    }
}