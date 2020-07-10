import { ComposeCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/complete/compose-complete.component";
import { ComposeValidatorsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/validators/compose-validators.component";
import { ComposeMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/messageKey/compose-message-key.component";
import { ComposeConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/conditionalExpression/compose-conditional-expression.component";
import { ComposeMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/message/compose-message.component";
import { ComposeDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/dynamic/compose-dynamic.component";
import { ComposeAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/compose/add/compose-add.component";
import { ComposeAddComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/add/compose-add.component";
import { ComposeValidatorsComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/validators/compose-validators.component";
import { ComposeMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/message/compose-message.component";
import { ComposeConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/conditionalExpression/compose-conditional-expression.component";
import { ComposeCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/complete/compose-complete.component";
import { ComposeMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/compose/messageKey/compose-message-key.component";

export const COMPOSE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	validators: {
		complete: ComposeCompleteValidatorComponent,
		validators: ComposeValidatorsValidatorComponent,
		messageKey: ComposeMessageKeyValidatorComponent,
		conditionalExpression: ComposeConditionalExpressionValidatorComponent,
		message: ComposeMessageValidatorComponent,
		dynamic: ComposeDynamicValidatorComponent,
		add: ComposeAddValidatorComponent,
	},
	decorators: {
		add: ComposeAddComponent,
		validators: ComposeValidatorsComponent,
		message: ComposeMessageComponent,
		conditionalExpression: ComposeConditionalExpressionComponent,
		complete: ComposeCompleteComponent,
		messageKey: ComposeMessageKeyComponent
	},
}
