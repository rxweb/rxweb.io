import { MaxNumberAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/complete/max-number-async-complete.component";

import { MaxNumberAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/complete/max-number-async-complete.component";
import { MaxNumberAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/value/max-number-async-value.component";

import { MaxNumberAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/value/max-number-async-value.component";
import { MaxNumberAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/message/max-number-async-message.component";

import { MaxNumberAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/message/max-number-async-message.component";
import { MaxNumberAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/messageKey/max-number-async-message-key.component";

import { MaxNumberAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/messageKey/max-number-async-message-key.component";
import { MaxNumberAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/dynamic/max-number-async-dynamic.component";
import { MaxNumberAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/dynamic/max-number-async-dynamic.component";
import { MaxNumberAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/add/max-number-async-add.component";

import { MaxNumberAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumberAsync/add/max-number-async-add.component";
import { MaxNumberAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumberAsync/edit/max-number-async-edit.component";

export const MAX_NUMBER_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxNumberAsyncCompleteComponent,
						value : MaxNumberAsyncValueComponent,
						message : MaxNumberAsyncMessageComponent,
						messageKey : MaxNumberAsyncMessageKeyComponent,
						dynamic : MaxNumberAsyncDynamicComponent,
						add : MaxNumberAsyncAddComponent,
						edit : MaxNumberAsyncEditComponent,
			  },
	
	validators:{
						complete : MaxNumberAsyncCompleteValidatorComponent,
						value : MaxNumberAsyncValueValidatorComponent,
						message : MaxNumberAsyncMessageValidatorComponent,
						messageKey : MaxNumberAsyncMessageKeyValidatorComponent,
						dynamic : MaxNumberAsyncDynamicValidatorComponent,
						add : MaxNumberAsyncAddValidatorComponent,
			  },
}
