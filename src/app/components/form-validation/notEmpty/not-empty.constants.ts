import { NotEmptyCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/complete/not-empty-complete.component";
import { NotEmptyCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/notEmpty/complete/not-empty-complete.component";
import { NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/notEmpty/complete/not-empty-complete.component";
import { NotEmptyCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/notEmpty/complete/not-empty-complete.component";
import { NotEmptyConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/conditionalExpression/not-empty-conditional-expression.component";
import { NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/notEmpty/conditionalExpression/not-empty-conditional-expression.component";
import { NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/notEmpty/conditionalExpression/not-empty-conditional-expression.component";
import { NotEmptyConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/notEmpty/conditionalExpression/not-empty-conditional-expression.component";
import { NotEmptyMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/message/not-empty-message.component";
import { NotEmptyMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/notEmpty/message/not-empty-message.component";
import { NotEmptyMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/notEmpty/message/not-empty-message.component";
import { NotEmptyMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/notEmpty/message/not-empty-message.component";
import { NotEmptyDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/dynamic/not-empty-dynamic.component";
import { NotEmptyDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/notEmpty/dynamic/not-empty-dynamic.component";
import { NotEmptyAddComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/add/not-empty-add.component";
import { NotEmptyAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/notEmpty/add/not-empty-add.component";
import { NotEmptyAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/notEmpty/add/not-empty-add.component";
import { NotEmptyAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/notEmpty/add/not-empty-add.component";
import { NotEmptyEditComponent } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/edit/not-empty-edit.component";

export const NOT_EMPTY_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : NotEmptyCompleteComponent,
						conditionalExpression : NotEmptyConditionalExpressionComponent,
						message : NotEmptyMessageComponent,
						dynamic : NotEmptyDynamicComponent,
						add : NotEmptyAddComponent,
						edit : NotEmptyEditComponent,
			  },
	template_driven_validation_directives:{
						complete : NotEmptyCompleteTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : NotEmptyConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : NotEmptyMessageTemplateDrivenValidationDirectivesComponent,
						add : NotEmptyAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : NotEmptyCompleteTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : NotEmptyConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : NotEmptyMessageTemplateDrivenValidationDecoratorsComponent,
						add : NotEmptyAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : NotEmptyCompleteValidatorComponent,
						conditionalExpression : NotEmptyConditionalExpressionValidatorComponent,
						message : NotEmptyMessageValidatorComponent,
						dynamic : NotEmptyDynamicValidatorComponent,
						add : NotEmptyAddValidatorComponent,
			  },
}