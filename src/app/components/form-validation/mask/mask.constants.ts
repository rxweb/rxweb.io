import { MaskCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/complete/mask-complete.component";

import { MaskCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/complete/mask-complete.component";
import { MaskMaskComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/mask/mask-mask.component";

import { MaskMaskValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/mask/mask-mask.component";
import { MaskConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/conditionalExpression/mask-conditional-expression.component";

import { MaskConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/conditionalExpression/mask-conditional-expression.component";
import { MaskMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/message/mask-message.component";

import { MaskMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/message/mask-message.component";
import { MaskMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/messageKey/mask-message-key.component";

import { MaskMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/messageKey/mask-message-key.component";
import { MaskDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/dynamic/mask-dynamic.component";
import { MaskDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/dynamic/mask-dynamic.component";
import { MaskAddComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/add/mask-add.component";

import { MaskAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/add/mask-add.component";
import { MaskEditComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/edit/mask-edit.component";
import { MaskMinLengthValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/mask/minLength/mask-min-length.component';
import { MaskMinLengthComponent } from 'src/assets/examples/reactive-form-validators/decorators/mask/minLength/mask-min-length.component';

export const MASK_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaskCompleteComponent,
						mask : MaskMaskComponent,
						conditionalExpression : MaskConditionalExpressionComponent,
						message : MaskMessageComponent,
						messageKey : MaskMessageKeyComponent,
						dynamic : MaskDynamicComponent,
						add : MaskAddComponent,
						edit : MaskEditComponent,
						minLength: MaskMinLengthComponent
			  },
	template_driven_validation_directives:{
				
			  },
	validators:{
						complete : MaskCompleteValidatorComponent,
						mask : MaskMaskValidatorComponent,
						conditionalExpression : MaskConditionalExpressionValidatorComponent,
						message : MaskMessageValidatorComponent,
						messageKey : MaskMessageKeyValidatorComponent,
						dynamic : MaskDynamicValidatorComponent,
						add : MaskAddValidatorComponent,
						minLength:MaskMinLengthValidatorComponent
			  },
}
