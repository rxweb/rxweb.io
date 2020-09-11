import { MinDateAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/complete/min-date-async-complete.component";

import { MinDateAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/complete/min-date-async-complete.component";
import { MinDateAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/value/min-date-async-value.component";

import { MinDateAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/value/min-date-async-value.component";
import { MinDateAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/message/min-date-async-message.component";

import { MinDateAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/message/min-date-async-message.component";
import { MinDateAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/fieldName/min-date-async-field-name.component";

import { MinDateAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/fieldName/min-date-async-field-name.component";
import { MinDateAsyncOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/operator/min-date-async-operator.component";

import { MinDateAsyncOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/operator/min-date-async-operator.component";
import { MinDateAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/messageKey/min-date-async-message-key.component";

import { MinDateAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/messageKey/min-date-async-message-key.component";
import { MinDateAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/dynamic/min-date-async-dynamic.component";
import { MinDateAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/dynamic/min-date-async-dynamic.component";
import { MinDateAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/add/min-date-async-add.component";

import { MinDateAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDateAsync/add/min-date-async-add.component";
import { MinDateAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minDateAsync/edit/min-date-async-edit.component";

export const MIN_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinDateAsyncCompleteComponent,
						value : MinDateAsyncValueComponent,
						message : MinDateAsyncMessageComponent,
						fieldName : MinDateAsyncFieldNameComponent,
						operator : MinDateAsyncOperatorComponent,
						messageKey : MinDateAsyncMessageKeyComponent,
						dynamic : MinDateAsyncDynamicComponent,
						add : MinDateAsyncAddComponent,
						edit : MinDateAsyncEditComponent,
			  },
	
	validators:{
						complete : MinDateAsyncCompleteValidatorComponent,
						value : MinDateAsyncValueValidatorComponent,
						message : MinDateAsyncMessageValidatorComponent,
						fieldName : MinDateAsyncFieldNameValidatorComponent,
						operator : MinDateAsyncOperatorValidatorComponent,
						messageKey : MinDateAsyncMessageKeyValidatorComponent,
						dynamic : MinDateAsyncDynamicValidatorComponent,
						add : MinDateAsyncAddValidatorComponent,
			  },
}
