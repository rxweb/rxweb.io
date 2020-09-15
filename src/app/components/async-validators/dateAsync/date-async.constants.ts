import { DateAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/complete/date-async-complete.component";

import { DateAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/complete/date-async-complete.component";
import { DateAsyncAllowISODateComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/allowISODate/date-async-allow-i-s-o-date.component";

import { DateAsyncAllowISODateValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/allowISODate/date-async-allow-i-s-o-date.component";
import { DateAsyncConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/conditionalExpression/date-async-conditional-expression.component";

import { DateAsyncConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/conditionalExpression/date-async-conditional-expression.component";
import { DateAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/message/date-async-message.component";

import { DateAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/message/date-async-message.component";
import { DateAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/messageKey/date-async-message-key.component";

import { DateAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/messageKey/date-async-message-key.component";
import { DateAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/dynamic/date-async-dynamic.component";
import { DateAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/dynamic/date-async-dynamic.component";
import { DateAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/add/date-async-add.component";

import { DateAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/dateAsync/add/date-async-add.component";
import { DateAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/dateAsync/edit/date-async-edit.component";

export const DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : DateAsyncCompleteComponent,
						allowISODate : DateAsyncAllowISODateComponent,
						conditionalExpression : DateAsyncConditionalExpressionComponent,
						message : DateAsyncMessageComponent,
						messageKey : DateAsyncMessageKeyComponent,
						dynamic : DateAsyncDynamicComponent,
						add : DateAsyncAddComponent,
						edit : DateAsyncEditComponent,
			  },
	
	validators:{
						complete : DateAsyncCompleteValidatorComponent,
						allowISODate : DateAsyncAllowISODateValidatorComponent,
						conditionalExpression : DateAsyncConditionalExpressionValidatorComponent,
						message : DateAsyncMessageValidatorComponent,
						messageKey : DateAsyncMessageKeyValidatorComponent,
						dynamic : DateAsyncDynamicValidatorComponent,
						add : DateAsyncAddValidatorComponent,
			  },
}
