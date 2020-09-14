import { OneOfAsyncCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/complete/one-of-async-complete.component';
import { OneOfAsyncMatchValuesValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/matchValues/one-of-async-match-values.component';
import { OneOfAsyncMessageValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/message/one-of-async-message.component';
import { OneOfAsyncAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/add/one-of-async-add.component';
import { OneOfAsyncMessageKeyValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/messageKey/one-of-async-message-key.component';
import { OneOfAsyncCompleteComponent } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/complete/one-of-async-complete.component';
import { OneOfAsyncMatchValuesComponent } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/matchValues/one-of-async-match-values.component';
import { OneOfAsyncMessageComponent } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/message/one-of-async-message.component';
import { OneOfAsyncAddComponent } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/add/one-of-async-add.component';
import { OneOfAsyncMessageKeyComponent } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/messageKey/one-of-async-message-key.component';


export const ONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
  decorators: {
    complete: OneOfAsyncCompleteComponent,
    matchValues: OneOfAsyncMatchValuesComponent,
    message: OneOfAsyncMessageComponent,
    add: OneOfAsyncAddComponent,
    messageKey: OneOfAsyncMessageKeyComponent
  },
  template_driven_validation_directives: {
    // complete : OneOfCompleteTemplateDrivenValidationDirectivesComponent,
    // conditionalExpression : OneOfConditionalExpressionTemplateDrivenValidationDirectivesComponent,
    // matchValues : OneOfMatchValuesTemplateDrivenValidationDirectivesComponent,
    // message : OneOfMessageTemplateDrivenValidationDirectivesComponent,
    // add : OneOfAddTemplateDrivenValidationDirectivesComponent,
  },
  template_driven_validation_decorators: {
    // complete : OneOfCompleteTemplateDrivenValidationDecoratorsComponent,
    // conditionalExpression : OneOfConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
    // matchValues : OneOfMatchValuesTemplateDrivenValidationDecoratorsComponent,
    // message : OneOfMessageTemplateDrivenValidationDecoratorsComponent,
    // add : OneOfAddTemplateDrivenValidationDecoratorsComponent,
  },
  validators: {
    complete: OneOfAsyncCompleteValidatorComponent,
    matchValues: OneOfAsyncMatchValuesValidatorComponent,
    message: OneOfAsyncMessageValidatorComponent,
    add: OneOfAsyncAddValidatorComponent,
    messageKey: OneOfAsyncMessageKeyValidatorComponent
  },
}
