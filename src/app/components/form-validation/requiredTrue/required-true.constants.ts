import { RequiredTrueCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/complete/required-true-complete.component";
import { RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/complete/required-true-complete.component";
import { RequiredTrueCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/complete/required-true-complete.component";
import { RequiredTrueCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/complete/required-true-complete.component";
import { RequiredTrueConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/conditionalExpression/required-true-conditional-expression.component";
import { RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/conditionalExpression/required-true-conditional-expression.component";
import { RequiredTrueConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/conditionalExpression/required-true-conditional-expression.component";
import { RequiredTrueConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/conditionalExpression/required-true-conditional-expression.component";
import { RequiredTrueMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/message/required-true-message.component";
import { RequiredTrueMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/message/required-true-message.component";
import { RequiredTrueMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/message/required-true-message.component";
import { RequiredTrueMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/message/required-true-message.component";
import { RequiredTrueMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/messageKey/required-true-message-key.component";
import { RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/messageKey/required-true-message-key.component";
import { RequiredTrueMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/messageKey/required-true-message-key.component";
import { RequiredTrueMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/messageKey/required-true-message-key.component";
import { RequiredTrueDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/dynamic/required-true-dynamic.component";
import { RequiredTrueDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/dynamic/required-true-dynamic.component";
import { RequiredTrueAddComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/add/required-true-add.component";
import { RequiredTrueAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/add/required-true-add.component";
import { RequiredTrueAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/add/required-true-add.component";
import { RequiredTrueAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/add/required-true-add.component";
import { RequiredTrueEditComponent } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/edit/required-true-edit.component";

export const REQUIRED_TRUE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : RequiredTrueCompleteComponent,
						conditionalExpression : RequiredTrueConditionalExpressionComponent,
						message : RequiredTrueMessageComponent,
						messageKey : RequiredTrueMessageKeyComponent,
						dynamic : RequiredTrueDynamicComponent,
						add : RequiredTrueAddComponent,
						edit : RequiredTrueEditComponent,
			  },
	template_driven_validation_directives:{
						complete : RequiredTrueCompleteTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : RequiredTrueConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : RequiredTrueMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : RequiredTrueMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : RequiredTrueAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : RequiredTrueCompleteTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : RequiredTrueConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : RequiredTrueMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : RequiredTrueMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : RequiredTrueAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : RequiredTrueCompleteValidatorComponent,
						conditionalExpression : RequiredTrueConditionalExpressionValidatorComponent,
						message : RequiredTrueMessageValidatorComponent,
						messageKey : RequiredTrueMessageKeyValidatorComponent,
						dynamic : RequiredTrueDynamicValidatorComponent,
						add : RequiredTrueAddValidatorComponent,
			  },
}