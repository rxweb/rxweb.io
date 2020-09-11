import { MaxLengthAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/complete/max-length-async-complete.component";

import { MaxLengthAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/complete/max-length-async-complete.component";
import { MaxLengthAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/value/max-length-async-value.component";

import { MaxLengthAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/value/max-length-async-value.component";
import { MaxLengthAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/message/max-length-async-message.component";

import { MaxLengthAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/message/max-length-async-message.component";
import { MaxLengthAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/messageKey/max-length-async-message-key.component";

import { MaxLengthAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/messageKey/max-length-async-message-key.component";
import { MaxLengthAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/dynamic/max-length-async-dynamic.component";
import { MaxLengthAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/dynamic/max-length-async-dynamic.component";
import { MaxLengthAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/add/max-length-async-add.component";

import { MaxLengthAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxLengthAsync/add/max-length-async-add.component";
import { MaxLengthAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/edit/max-length-async-edit.component";

export const MAX_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxLengthAsyncCompleteComponent,
						value : MaxLengthAsyncValueComponent,
						message : MaxLengthAsyncMessageComponent,
						messageKey : MaxLengthAsyncMessageKeyComponent,
						dynamic : MaxLengthAsyncDynamicComponent,
						add : MaxLengthAsyncAddComponent,
						edit : MaxLengthAsyncEditComponent,
			  },
	
	validators:{
						complete : MaxLengthAsyncCompleteValidatorComponent,
						value : MaxLengthAsyncValueValidatorComponent,
						message : MaxLengthAsyncMessageValidatorComponent,
						messageKey : MaxLengthAsyncMessageKeyValidatorComponent,
						dynamic : MaxLengthAsyncDynamicValidatorComponent,
						add : MaxLengthAsyncAddValidatorComponent,
			  },
}
