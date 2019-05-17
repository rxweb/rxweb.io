import { MaxTimeCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/complete/max-time-complete.component";
import { MaxTimeCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/complete/max-time-complete.component";
import { MaxTimeCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/complete/max-time-complete.component";
import { MaxTimeCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/complete/max-time-complete.component";
import { MaxTimeValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/value/max-time-value.component";
import { MaxTimeValueTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/value/max-time-value.component";
import { MaxTimeValueTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/value/max-time-value.component";
import { MaxTimeValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/value/max-time-value.component";
import { MaxTimeOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/operator/max-time-operator.component";
import { MaxTimeOperatorTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/operator/max-time-operator.component";
import { MaxTimeOperatorTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/operator/max-time-operator.component";
import { MaxTimeOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/operator/max-time-operator.component";
import { MaxTimeConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/conditionalExpression/max-time-conditional-expression.component";
import { MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/conditionalExpression/max-time-conditional-expression.component";
import { MaxTimeConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/conditionalExpression/max-time-conditional-expression.component";
import { MaxTimeConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/conditionalExpression/max-time-conditional-expression.component";
import { MaxTimeAllowSecondsComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/allowSeconds/max-time-allow-seconds.component";
import { MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/allowSeconds/max-time-allow-seconds.component";
import { MaxTimeAllowSecondsTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/allowSeconds/max-time-allow-seconds.component";
import { MaxTimeAllowSecondsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/allowSeconds/max-time-allow-seconds.component";
import { MaxTimeMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/message/max-time-message.component";
import { MaxTimeMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/message/max-time-message.component";
import { MaxTimeMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/message/max-time-message.component";
import { MaxTimeMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/message/max-time-message.component";
import { MaxTimeFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/fieldName/max-time-field-name.component";
import { MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/fieldName/max-time-field-name.component";
import { MaxTimeFieldNameTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/fieldName/max-time-field-name.component";
import { MaxTimeFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/fieldName/max-time-field-name.component";
import { MaxTimeMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/messageKey/max-time-message-key.component";
import { MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/messageKey/max-time-message-key.component";
import { MaxTimeMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/messageKey/max-time-message-key.component";
import { MaxTimeMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/messageKey/max-time-message-key.component";
import { MaxTimeDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/dynamic/max-time-dynamic.component";
import { MaxTimeDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/dynamic/max-time-dynamic.component";
import { MaxTimeAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/add/max-time-add.component";
import { MaxTimeAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/add/max-time-add.component";
import { MaxTimeAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/add/max-time-add.component";
import { MaxTimeAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTime/add/max-time-add.component";
import { MaxTimeEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTime/edit/max-time-edit.component";

export const MAX_TIME_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxTimeCompleteComponent,
						value : MaxTimeValueComponent,
						operator : MaxTimeOperatorComponent,
						conditionalExpression : MaxTimeConditionalExpressionComponent,
						allowSeconds : MaxTimeAllowSecondsComponent,
						message : MaxTimeMessageComponent,
						fieldName : MaxTimeFieldNameComponent,
						messageKey : MaxTimeMessageKeyComponent,
						dynamic : MaxTimeDynamicComponent,
						add : MaxTimeAddComponent,
						edit : MaxTimeEditComponent,
			  },
	template_driven_validation_directives:{
						complete : MaxTimeCompleteTemplateDrivenValidationDirectivesComponent,
						value : MaxTimeValueTemplateDrivenValidationDirectivesComponent,
						operator : MaxTimeOperatorTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : MaxTimeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						allowSeconds : MaxTimeAllowSecondsTemplateDrivenValidationDirectivesComponent,
						message : MaxTimeMessageTemplateDrivenValidationDirectivesComponent,
						fieldName : MaxTimeFieldNameTemplateDrivenValidationDirectivesComponent,
						messageKey : MaxTimeMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : MaxTimeAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : MaxTimeCompleteTemplateDrivenValidationDecoratorsComponent,
						value : MaxTimeValueTemplateDrivenValidationDecoratorsComponent,
						operator : MaxTimeOperatorTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : MaxTimeConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						allowSeconds : MaxTimeAllowSecondsTemplateDrivenValidationDecoratorsComponent,
						message : MaxTimeMessageTemplateDrivenValidationDecoratorsComponent,
						fieldName : MaxTimeFieldNameTemplateDrivenValidationDecoratorsComponent,
						messageKey : MaxTimeMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : MaxTimeAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : MaxTimeCompleteValidatorComponent,
						value : MaxTimeValueValidatorComponent,
						operator : MaxTimeOperatorValidatorComponent,
						conditionalExpression : MaxTimeConditionalExpressionValidatorComponent,
						allowSeconds : MaxTimeAllowSecondsValidatorComponent,
						message : MaxTimeMessageValidatorComponent,
						fieldName : MaxTimeFieldNameValidatorComponent,
						messageKey : MaxTimeMessageKeyValidatorComponent,
						dynamic : MaxTimeDynamicValidatorComponent,
						add : MaxTimeAddValidatorComponent,
			  },
}