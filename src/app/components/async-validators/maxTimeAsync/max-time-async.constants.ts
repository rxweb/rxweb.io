import { MaxTimeAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/complete/max-time-async-complete.component";

import { MaxTimeAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/complete/max-time-async-complete.component";
import { MaxTimeAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/value/max-time-async-value.component";

import { MaxTimeAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/value/max-time-async-value.component";
import { MaxTimeAsyncOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/operator/max-time-async-operator.component";

import { MaxTimeAsyncOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/operator/max-time-async-operator.component";
import { MaxTimeAsyncAllowSecondsComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/allowSeconds/max-time-async-allow-seconds.component";

import { MaxTimeAsyncAllowSecondsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/allowSeconds/max-time-async-allow-seconds.component";
import { MaxTimeAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/message/max-time-async-message.component";

import { MaxTimeAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/message/max-time-async-message.component";
import { MaxTimeAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/fieldName/max-time-async-field-name.component";

import { MaxTimeAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/fieldName/max-time-async-field-name.component";
import { MaxTimeAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/messageKey/max-time-async-message-key.component";

import { MaxTimeAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/messageKey/max-time-async-message-key.component";
import { MaxTimeAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/dynamic/max-time-async-dynamic.component";
import { MaxTimeAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/dynamic/max-time-async-dynamic.component";
import { MaxTimeAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/add/max-time-async-add.component";

import { MaxTimeAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxTimeAsync/add/max-time-async-add.component";
import { MaxTimeAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxTimeAsync/edit/max-time-async-edit.component";

export const MAX_TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxTimeAsyncCompleteComponent,
						value : MaxTimeAsyncValueComponent,
						operator : MaxTimeAsyncOperatorComponent,
						allowSeconds : MaxTimeAsyncAllowSecondsComponent,
						message : MaxTimeAsyncMessageComponent,
						fieldName : MaxTimeAsyncFieldNameComponent,
						messageKey : MaxTimeAsyncMessageKeyComponent,
						dynamic : MaxTimeAsyncDynamicComponent,
						add : MaxTimeAsyncAddComponent,
						edit : MaxTimeAsyncEditComponent,
			  },
	
	validators:{
						complete : MaxTimeAsyncCompleteValidatorComponent,
						value : MaxTimeAsyncValueValidatorComponent,
						operator : MaxTimeAsyncOperatorValidatorComponent,
						allowSeconds : MaxTimeAsyncAllowSecondsValidatorComponent,
						message : MaxTimeAsyncMessageValidatorComponent,
						fieldName : MaxTimeAsyncFieldNameValidatorComponent,
						messageKey : MaxTimeAsyncMessageKeyValidatorComponent,
						dynamic : MaxTimeAsyncDynamicValidatorComponent,
						add : MaxTimeAsyncAddValidatorComponent,
			  },
}
