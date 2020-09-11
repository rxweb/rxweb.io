import { ChoiceAsyncCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/complete/choice-async-complete.component';
import { ChoiceAsyncMinLengthValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/minLength/choice-async-min-length.component';
import { ChoiceAsyncMaxLengthValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/maxLength/choice-async-max-length.component';
import { ChoiceAsyncMessageValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/message/choice-async-message.component';
import { ChoiceAsyncAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/add/choice-async-add.component';
import { ChoiceAsyncMessageKeyValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/messageKey/choice-async-message-key.component';


export const CHOICE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
  decorators: {
    // complete: ChoiceAsyncCompleteComponent,
    // minLength: ChoiceAsyncMinLengthComponent,
    // maxLength: ChoiceAsyncMaxLengthComponent,
    // message: ChoiceAsyncMessageComponent,
    // add: ChoiceAsyncAddComponent,
    // messageKey: ChoiceAsyncMessageKeyComponent
  },
  template_driven_validation_directives: {
    // complete: ChoiceCompleteTemplateDrivenValidationDirectivesComponent,
    // maxLength: ChoiceMaxLengthTemplateDrivenValidationDirectivesComponent,
    // minLength: ChoiceMinLengthTemplateDrivenValidationDirectivesComponent,
    // message: ChoiceMessageTemplateDrivenValidationDirectivesComponent,
    // conditionalExpression: ChoiceConditionalExpressionTemplateDrivenValidationDirectivesComponent,
    // dynamic: ChoiceDynamicTemplateDrivenValidationDirectivesComponent,
    // add: ChoiceAddTemplateDrivenValidationDirectivesComponent,
  },
  template_driven_validation_decorators: {
  },
  validators: {
    complete: ChoiceAsyncCompleteValidatorComponent,
    minLength: ChoiceAsyncMinLengthValidatorComponent,
    maxLength: ChoiceAsyncMaxLengthValidatorComponent,
    message: ChoiceAsyncMessageValidatorComponent,
    add: ChoiceAsyncAddValidatorComponent,
    messageKey: ChoiceAsyncMessageKeyValidatorComponent
  },
}
