import { MinTimeCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/complete/min-time-complete.component";
import { MinTimeCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/complete/min-time-complete.component";
import { MinTimeCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/complete/min-time-complete.component";
import { MinTimeCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/complete/min-time-complete.component";
import { MinTimeValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/value/min-time-value.component";
import { MinTimeValueTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/value/min-time-value.component";
import { MinTimeValueTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/value/min-time-value.component";
import { MinTimeValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/value/min-time-value.component";
import { MinTimeOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/operator/min-time-operator.component";
import { MinTimeOperatorTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/operator/min-time-operator.component";
import { MinTimeOperatorTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/operator/min-time-operator.component";
import { MinTimeOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/operator/min-time-operator.component";
import { MinTimeConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/conditionalExpression/min-time-conditional-expression.component";
import { MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/conditionalExpression/min-time-conditional-expression.component";
import { MinTimeConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/conditionalExpression/min-time-conditional-expression.component";
import { MinTimeConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/conditionalExpression/min-time-conditional-expression.component";
import { MinTimeFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/fieldName/min-time-field-name.component";
import { MinTimeFieldNameTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/fieldName/min-time-field-name.component";
import { MinTimeFieldNameTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/fieldName/min-time-field-name.component";
import { MinTimeFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/fieldName/min-time-field-name.component";
import { MinTimeAllowSecondsComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/allowSeconds/min-time-allow-seconds.component";
import { MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/allowSeconds/min-time-allow-seconds.component";
import { MinTimeAllowSecondsTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/allowSeconds/min-time-allow-seconds.component";
import { MinTimeAllowSecondsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/allowSeconds/min-time-allow-seconds.component";
import { MinTimeMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/message/min-time-message.component";
import { MinTimeMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/message/min-time-message.component";
import { MinTimeMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/message/min-time-message.component";
import { MinTimeMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/message/min-time-message.component";
import { MinTimeMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/messageKey/min-time-message-key.component";
import { MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/messageKey/min-time-message-key.component";
import { MinTimeMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/messageKey/min-time-message-key.component";
import { MinTimeMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/messageKey/min-time-message-key.component";
import { MinTimeDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/dynamic/min-time-dynamic.component";
import { MinTimeDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/dynamic/min-time-dynamic.component";
import { MinTimeAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/add/min-time-add.component";
import { MinTimeAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/add/min-time-add.component";
import { MinTimeAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/add/min-time-add.component";
import { MinTimeAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTime/add/min-time-add.component";
import { MinTimeEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minTime/edit/min-time-edit.component";

export const MIN_TIME_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinTimeCompleteComponent,
						value : MinTimeValueComponent,
						operator : MinTimeOperatorComponent,
						conditionalExpression : MinTimeConditionalExpressionComponent,
						fieldName : MinTimeFieldNameComponent,
						allowSeconds : MinTimeAllowSecondsComponent,
						message : MinTimeMessageComponent,
						messageKey : MinTimeMessageKeyComponent,
						dynamic : MinTimeDynamicComponent,
						add : MinTimeAddComponent,
						edit : MinTimeEditComponent,
			  },
	template_driven_validation_directives:{
						complete : MinTimeCompleteTemplateDrivenValidationDirectivesComponent,
						value : MinTimeValueTemplateDrivenValidationDirectivesComponent,
						operator : MinTimeOperatorTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : MinTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						fieldName : MinTimeFieldNameTemplateDrivenValidationDirectivesComponent,
						allowSeconds : MinTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
						message : MinTimeMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : MinTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : MinTimeAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : MinTimeCompleteTemplateDrivenValidationDecoratorsComponent,
						value : MinTimeValueTemplateDrivenValidationDecoratorsComponent,
						operator : MinTimeOperatorTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : MinTimeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						fieldName : MinTimeFieldNameTemplateDrivenValidationDecoratorsComponent,
						allowSeconds : MinTimeAllowSecondsTemplateDrivenValidationDecoratorsComponent,
						message : MinTimeMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : MinTimeMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : MinTimeAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : MinTimeCompleteValidatorComponent,
						value : MinTimeValueValidatorComponent,
						operator : MinTimeOperatorValidatorComponent,
						conditionalExpression : MinTimeConditionalExpressionValidatorComponent,
						fieldName : MinTimeFieldNameValidatorComponent,
						allowSeconds : MinTimeAllowSecondsValidatorComponent,
						message : MinTimeMessageValidatorComponent,
						messageKey : MinTimeMessageKeyValidatorComponent,
						dynamic : MinTimeDynamicValidatorComponent,
						add : MinTimeAddValidatorComponent,
			  },
}