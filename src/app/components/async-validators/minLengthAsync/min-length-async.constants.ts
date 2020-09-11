import { MinLengthAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/complete/min-length-async-complete.component";

import { MinLengthAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/complete/min-length-async-complete.component";
import { MinLengthAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/value/min-length-async-value.component";

import { MinLengthAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/value/min-length-async-value.component";
import { MinLengthAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/message/min-length-async-message.component";

import { MinLengthAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/message/min-length-async-message.component";
import { MinLengthAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/messageKey/min-length-async-message-key.component";

import { MinLengthAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/messageKey/min-length-async-message-key.component";
import { MinLengthAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/dynamic/min-length-async-dynamic.component";
import { MinLengthAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/dynamic/min-length-async-dynamic.component";
import { MinLengthAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/add/min-length-async-add.component";

import { MinLengthAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minLengthAsync/add/min-length-async-add.component";
import { MinLengthAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minLengthAsync/edit/min-length-async-edit.component";

export const MIN_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinLengthAsyncCompleteComponent,
						value : MinLengthAsyncValueComponent,
						message : MinLengthAsyncMessageComponent,
						messageKey : MinLengthAsyncMessageKeyComponent,
						dynamic : MinLengthAsyncDynamicComponent,
						add : MinLengthAsyncAddComponent,
						edit : MinLengthAsyncEditComponent,
			  },
	
	validators:{
						complete : MinLengthAsyncCompleteValidatorComponent,
						value : MinLengthAsyncValueValidatorComponent,
						message : MinLengthAsyncMessageValidatorComponent,
						messageKey : MinLengthAsyncMessageKeyValidatorComponent,
						dynamic : MinLengthAsyncDynamicValidatorComponent,
						add : MinLengthAsyncAddValidatorComponent,
			  },
}
