import { MinTimeAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/complete/min-time-async-complete.component";

import { MinTimeAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/complete/min-time-async-complete.component";
import { MinTimeAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/value/min-time-async-value.component";

import { MinTimeAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/value/min-time-async-value.component";
import { MinTimeAsyncOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/operator/min-time-async-operator.component";

import { MinTimeAsyncOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/operator/min-time-async-operator.component";
import { MinTimeAsyncAllowSecondsComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/allowSeconds/min-time-async-allow-seconds.component";

import { MinTimeAsyncAllowSecondsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/allowSeconds/min-time-async-allow-seconds.component";
import { MinTimeAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/message/min-time-async-message.component";

import { MinTimeAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/message/min-time-async-message.component";
import { MinTimeAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/messageKey/min-time-async-message-key.component";

import { MinTimeAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/messageKey/min-time-async-message-key.component";
import { MinTimeAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/dynamic/min-time-async-dynamic.component";
import { MinTimeAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/dynamic/min-time-async-dynamic.component";
import { MinTimeAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/add/min-time-async-add.component";

import { MinTimeAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minTimeAsync/add/min-time-async-add.component";
import { MinTimeAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minTimeAsync/edit/min-time-async-edit.component";

export const MIN_TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinTimeAsyncCompleteComponent,
						value : MinTimeAsyncValueComponent,
						operator : MinTimeAsyncOperatorComponent,
						allowSeconds : MinTimeAsyncAllowSecondsComponent,
						message : MinTimeAsyncMessageComponent,
						messageKey : MinTimeAsyncMessageKeyComponent,
						dynamic : MinTimeAsyncDynamicComponent,
						add : MinTimeAsyncAddComponent,
						edit : MinTimeAsyncEditComponent,
			  },
	
	validators:{
						complete : MinTimeAsyncCompleteValidatorComponent,
						value : MinTimeAsyncValueValidatorComponent,
						operator : MinTimeAsyncOperatorValidatorComponent,
						allowSeconds : MinTimeAsyncAllowSecondsValidatorComponent,
						message : MinTimeAsyncMessageValidatorComponent,
						messageKey : MinTimeAsyncMessageKeyValidatorComponent,
						dynamic : MinTimeAsyncDynamicValidatorComponent,
						add : MinTimeAsyncAddValidatorComponent,
			  },
}
