import { NoneOfAsyncCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/complete/none-of-async-complete.component';
import { NoneOfAsyncMatchValuesValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/matchValues/none-of-async-match-values.component';
import { NoneOfAsyncMessageValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/message/none-of-async-message.component';
import { NoneOfAsyncAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/add/none-of-async-add.component';
import { NoneOfAsyncNonArrayValueValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/nonArrayValue/none-of-async-non-array-value.component';
import { NoneOfAsyncMessageKeyValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/messageKey/none-of-async-message-key.component';



export const NONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
  decorators: {
    // complete: NoneOfAsyncCompleteComponent,
    // matchValues: NoneOfAsyncMatchValuesComponent,
    // message: NoneOfAsyncMessageComponent,
    // add: NoneOfAsyncAddComponent,
    // nonArrayValue: NoneOfAsyncNonArrayValueComponent,
    // messageKey: NoneOfAsyncMessageKeyComponent
  },
  template_driven_validation_directives: {
    // complete : NoneOfCompleteTemplateDrivenValidationDirectivesComponent,
    // conditionalExpression : NoneOfConditionalExpressionTemplateDrivenValidationDirectivesComponent,
    // matchValues : NoneOfMatchValuesTemplateDrivenValidationDirectivesComponent,
    // message : NoneOfMessageTemplateDrivenValidationDirectivesComponent,
    // add : NoneOfAddTemplateDrivenValidationDirectivesComponent,
  },
  template_driven_validation_decorators: {
    // complete : NoneOfCompleteTemplateDrivenValidationDecoratorsComponent,
    // conditionalExpression : NoneOfConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
    // matchValues : NoneOfMatchValuesTemplateDrivenValidationDecoratorsComponent,
    // message : NoneOfMessageTemplateDrivenValidationDecoratorsComponent,
    // add : NoneOfAddTemplateDrivenValidationDecoratorsComponent,
  },
  validators: {
    complete: NoneOfAsyncCompleteValidatorComponent,
    matchValues: NoneOfAsyncMatchValuesValidatorComponent,
    message: NoneOfAsyncMessageValidatorComponent,
    add: NoneOfAsyncAddValidatorComponent,
    nonArrayValue: NoneOfAsyncNonArrayValueValidatorComponent,
    messageKey: NoneOfAsyncMessageKeyValidatorComponent
  },
}
