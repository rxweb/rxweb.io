import { AllOfAsyncMatchValuesValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/matchValues/all-of-async-match-values.component';
import { AllOfAsyncMessageValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/message/all-of-async-message.component';
import { AllOfAsyncAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/add/all-of-async-add.component';
import { AllOfAsyncMessageKeyValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/messageKey/all-of-async-message-key.component';
import { AllOfAsyncCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/complete/all-of-async-complete.component';
import { AllOfAsyncCompleteComponent } from 'src/assets/examples/reactive-form-validators/decorators/allOfAsync/complete/all-of-async-complete.component';
import { AllOfAsyncMatchValuesComponent } from 'src/assets/examples/reactive-form-validators/decorators/allOfAsync/matchValues/all-of-async-match-values.component';
import { AllOfAsyncMessageComponent } from 'src/assets/examples/reactive-form-validators/decorators/allOfAsync/message/all-of-async-message.component';
import { AllOfAddComponent } from 'src/assets/examples/reactive-form-validators/decorators/allOf/add/all-of-add.component';
import { AllOfMessageKeyComponent } from 'src/assets/examples/reactive-form-validators/decorators/allOf/messageKey/all-of-message-key.component';


export const ALL_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : AllOfAsyncCompleteComponent,
					
						matchValues : AllOfAsyncMatchValuesComponent,
						message : AllOfAsyncMessageComponent,
					
            add: AllOfAddComponent,
            messageKey: AllOfMessageKeyComponent
			  },
	template_driven_validation_directives:{
						// complete : AllOfCompleteTemplateDrivenValidationDirectivesComponent,
						// conditionalExpression : AllOfConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						// matchValues : AllOfMatchValuesTemplateDrivenValidationDirectivesComponent,
						// message : AllOfMessageTemplateDrivenValidationDirectivesComponent,
						// add : AllOfAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						// complete : AllOfCompleteTemplateDrivenValidationDecoratorsComponent,
						// conditionalExpression : AllOfConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						// matchValues : AllOfMatchValuesTemplateDrivenValidationDecoratorsComponent,
						// message : AllOfMessageTemplateDrivenValidationDecoratorsComponent,
						// add : AllOfAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : AllOfAsyncCompleteValidatorComponent,
						matchValues : AllOfAsyncMatchValuesValidatorComponent,
						message : AllOfAsyncMessageValidatorComponent,
            add: AllOfAsyncAddValidatorComponent,
            messageKey: AllOfAsyncMessageKeyValidatorComponent
			  },
}
