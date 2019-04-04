import { DifferentCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/different/complete/different-complete.component";
import { DifferentCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/different/complete/different-complete.component";
import { DifferentCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/different/complete/different-complete.component";
import { DifferentCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/complete/different-complete.component";
import { DifferentFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/different/fieldName/different-field-name.component";
import { DifferentFieldNameTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/different/fieldName/different-field-name.component";
import { DifferentFieldNameTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/different/fieldName/different-field-name.component";
import { DifferentFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/fieldName/different-field-name.component";
import { DifferentMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/different/message/different-message.component";
import { DifferentMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/different/message/different-message.component";
import { DifferentMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/different/message/different-message.component";
import { DifferentMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/message/different-message.component";
import { DifferentMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/different/messageKey/different-message-key.component";
import { DifferentMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/different/messageKey/different-message-key.component";
import { DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/different/messageKey/different-message-key.component";
import { DifferentMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/messageKey/different-message-key.component";
import { DifferentDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/different/dynamic/different-dynamic.component";
import { DifferentDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/dynamic/different-dynamic.component";
import { DifferentAddComponent } from "src/assets/examples/reactive-form-validators/decorators/different/add/different-add.component";
import { DifferentAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/different/add/different-add.component";
import { DifferentAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/different/add/different-add.component";
import { DifferentAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/different/add/different-add.component";
import { DifferentEditComponent } from "src/assets/examples/reactive-form-validators/decorators/different/edit/different-edit.component";

export const DIFFERENT_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : DifferentCompleteComponent,
						fieldName : DifferentFieldNameComponent,
						message : DifferentMessageComponent,
						messageKey : DifferentMessageKeyComponent,
						dynamic : DifferentDynamicComponent,
						add : DifferentAddComponent,
						edit : DifferentEditComponent,
			  },
	template_driven_validation_directives:{
						complete : DifferentCompleteTemplateDrivenValidationDirectivesComponent,
						fieldName : DifferentFieldNameTemplateDrivenValidationDirectivesComponent,
						message : DifferentMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : DifferentMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : DifferentAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : DifferentCompleteTemplateDrivenValidationDecoratorsComponent,
						fieldName : DifferentFieldNameTemplateDrivenValidationDecoratorsComponent,
						message : DifferentMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : DifferentMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : DifferentAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : DifferentCompleteValidatorComponent,
						fieldName : DifferentFieldNameValidatorComponent,
						message : DifferentMessageValidatorComponent,
						messageKey : DifferentMessageKeyValidatorComponent,
						dynamic : DifferentDynamicValidatorComponent,
						add : DifferentAddValidatorComponent,
			  },
}