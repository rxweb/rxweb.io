import { PatternAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/complete/pattern-async-complete.component";

import { PatternAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/complete/pattern-async-complete.component";
import { PatternAsyncExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/expression/pattern-async-expression.component";

import { PatternAsyncExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/expression/pattern-async-expression.component";
import { PatternAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/message/pattern-async-message.component";

import { PatternAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/message/pattern-async-message.component";
import { PatternAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/messageKey/pattern-async-message-key.component";

import { PatternAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/messageKey/pattern-async-message-key.component";
import { PatternAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/dynamic/pattern-async-dynamic.component";
import { PatternAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/dynamic/pattern-async-dynamic.component";
import { PatternAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/add/pattern-async-add.component";

import { PatternAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/patternAsync/add/pattern-async-add.component";
import { PatternAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/patternAsync/edit/pattern-async-edit.component";

export const PATTERN_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : PatternAsyncCompleteComponent,
						expression : PatternAsyncExpressionComponent,
						message : PatternAsyncMessageComponent,
						messageKey : PatternAsyncMessageKeyComponent,
						dynamic : PatternAsyncDynamicComponent,
						add : PatternAsyncAddComponent,
						edit : PatternAsyncEditComponent,
			  },
	
	validators:{
						complete : PatternAsyncCompleteValidatorComponent,
						expression : PatternAsyncExpressionValidatorComponent,
						message : PatternAsyncMessageValidatorComponent,
						messageKey : PatternAsyncMessageKeyValidatorComponent,
						dynamic : PatternAsyncDynamicValidatorComponent,
						add : PatternAsyncAddValidatorComponent,
			  },
}
