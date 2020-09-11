import { MinNumberAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/complete/min-number-async-complete.component";

import { MinNumberAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/complete/min-number-async-complete.component";
import { MinNumberAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/value/min-number-async-value.component";

import { MinNumberAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/value/min-number-async-value.component";
import { MinNumberAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/message/min-number-async-message.component";

import { MinNumberAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/message/min-number-async-message.component";
import { MinNumberAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/messageKey/min-number-async-message-key.component";

import { MinNumberAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/messageKey/min-number-async-message-key.component";
import { MinNumberAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/dynamic/min-number-async-dynamic.component";
import { MinNumberAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/dynamic/min-number-async-dynamic.component";
import { MinNumberAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/add/min-number-async-add.component";

import { MinNumberAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minNumberAsync/add/min-number-async-add.component";
import { MinNumberAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minNumberAsync/edit/min-number-async-edit.component";

export const MIN_NUMBER_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinNumberAsyncCompleteComponent,
						value : MinNumberAsyncValueComponent,
						message : MinNumberAsyncMessageComponent,
						messageKey : MinNumberAsyncMessageKeyComponent,
						dynamic : MinNumberAsyncDynamicComponent,
						add : MinNumberAsyncAddComponent,
						edit : MinNumberAsyncEditComponent,
			  },
	
	validators:{
						complete : MinNumberAsyncCompleteValidatorComponent,
						value : MinNumberAsyncValueValidatorComponent,
						message : MinNumberAsyncMessageValidatorComponent,
						messageKey : MinNumberAsyncMessageKeyValidatorComponent,
						dynamic : MinNumberAsyncDynamicValidatorComponent,
						add : MinNumberAsyncAddValidatorComponent,
			  },
}
