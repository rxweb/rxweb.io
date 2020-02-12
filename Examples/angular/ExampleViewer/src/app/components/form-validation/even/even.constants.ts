import { EvenCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/even/complete/even-complete.component";
import { EvenCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/even/complete/even-complete.component";
import { EvenCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/even/complete/even-complete.component";
import { EvenCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/complete/even-complete.component";
import { EvenConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/even/conditionalExpression/even-conditional-expression.component";
import { EvenConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/even/conditionalExpression/even-conditional-expression.component";
import { EvenConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/even/conditionalExpression/even-conditional-expression.component";
import { EvenConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/conditionalExpression/even-conditional-expression.component";
import { EvenMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/even/message/even-message.component";
import { EvenMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/even/message/even-message.component";
import { EvenMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/even/message/even-message.component";
import { EvenMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/message/even-message.component";
import { EvenMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/even/messageKey/even-message-key.component";
import { EvenMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/even/messageKey/even-message-key.component";
import { EvenMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/even/messageKey/even-message-key.component";
import { EvenMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/messageKey/even-message-key.component";
import { EvenDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/even/dynamic/even-dynamic.component";
import { EvenDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/dynamic/even-dynamic.component";
import { EvenAddComponent } from "src/assets/examples/reactive-form-validators/decorators/even/add/even-add.component";
import { EvenAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/even/add/even-add.component";
import { EvenAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/even/add/even-add.component";
import { EvenAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/even/add/even-add.component";
import { EvenEditComponent } from "src/assets/examples/reactive-form-validators/decorators/even/edit/even-edit.component";

export const EVEN_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : EvenCompleteComponent,
						conditionalExpression : EvenConditionalExpressionComponent,
						message : EvenMessageComponent,
						messageKey : EvenMessageKeyComponent,
						dynamic : EvenDynamicComponent,
						add : EvenAddComponent,
						edit : EvenEditComponent,
			  },
	template_driven_validation_directives:{
						complete : EvenCompleteTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : EvenConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : EvenMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : EvenMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : EvenAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : EvenCompleteTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : EvenConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : EvenMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : EvenMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : EvenAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : EvenCompleteValidatorComponent,
						conditionalExpression : EvenConditionalExpressionValidatorComponent,
						message : EvenMessageValidatorComponent,
						messageKey : EvenMessageKeyValidatorComponent,
						dynamic : EvenDynamicValidatorComponent,
						add : EvenAddValidatorComponent,
			  },
}