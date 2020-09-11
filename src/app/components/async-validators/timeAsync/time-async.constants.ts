import { TimeAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/complete/time-async-complete.component";

import { TimeAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/complete/time-async-complete.component";
import { TimeAsyncAllowSecondsComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/allowSeconds/time-async-allow-seconds.component";

import { TimeAsyncAllowSecondsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/allowSeconds/time-async-allow-seconds.component";
import { TimeAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/message/time-async-message.component";

import { TimeAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/message/time-async-message.component";
import { TimeAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/messageKey/time-async-message-key.component";

import { TimeAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/messageKey/time-async-message-key.component";
import { TimeAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/dynamic/time-async-dynamic.component";
import { TimeAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/dynamic/time-async-dynamic.component";
import { TimeAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/add/time-async-add.component";

import { TimeAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/timeAsync/add/time-async-add.component";
import { TimeAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/timeAsync/edit/time-async-edit.component";

export const TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : TimeAsyncCompleteComponent,
						allowSeconds : TimeAsyncAllowSecondsComponent,
						message : TimeAsyncMessageComponent,
						messageKey : TimeAsyncMessageKeyComponent,
						dynamic : TimeAsyncDynamicComponent,
						add : TimeAsyncAddComponent,
						edit : TimeAsyncEditComponent,
			  },
	
	validators:{
						complete : TimeAsyncCompleteValidatorComponent,
						allowSeconds : TimeAsyncAllowSecondsValidatorComponent,
						message : TimeAsyncMessageValidatorComponent,
						messageKey : TimeAsyncMessageKeyValidatorComponent,
						dynamic : TimeAsyncDynamicValidatorComponent,
						add : TimeAsyncAddValidatorComponent,
			  },
}
