import { GreaterThanLessThanFormArrayCompleteComponent } from 'src/assets/examples/howto/decorators/greaterThanLessThanFormArray/complete/greater-than-less-than-form-array-complete.component';
import { GreaterThanLessThanFormArrayCompleteValidatorComponent } from 'src/assets/examples/howto/validators/greaterThanLessThanFormArray/complete/greater-than-less-than-form-array-complete.component';
import { GreaterThanLessThanFormArrayAddValidatorComponent } from 'src/assets/examples/howto/validators/greaterThanLessThanFormArray/add/greater-than-less-than-form-array-add.component';




export const GREATER_THAN_LESS_THAN_FORM_ARRAY_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
       complete:GreaterThanLessThanFormArrayCompleteValidatorComponent,
       add:GreaterThanLessThanFormArrayAddValidatorComponent
    },
    decorators:
    {
       complete:GreaterThanLessThanFormArrayCompleteComponent,
       add:GreaterThanLessThanFormArrayCompleteValidatorComponent
    }
}