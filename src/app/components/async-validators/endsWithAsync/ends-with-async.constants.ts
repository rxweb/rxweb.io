import { EndsWithAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/complete/ends-with-async-complete.component";

import { EndsWithAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/complete/ends-with-async-complete.component";
import { EndsWithAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/value/ends-with-async-value.component";

import { EndsWithAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/value/ends-with-async-value.component";
import { EndsWithAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/message/ends-with-async-message.component";

import { EndsWithAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/message/ends-with-async-message.component";
import { EndsWithAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/messageKey/ends-with-async-message-key.component";

import { EndsWithAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/messageKey/ends-with-async-message-key.component";
import { EndsWithAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/dynamic/ends-with-async-dynamic.component";
import { EndsWithAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/dynamic/ends-with-async-dynamic.component";
import { EndsWithAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/add/ends-with-async-add.component";

import { EndsWithAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/endsWithAsync/add/ends-with-async-add.component";
import { EndsWithAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/endsWithAsync/edit/ends-with-async-edit.component";

export const ENDS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : EndsWithAsyncCompleteComponent,
						value : EndsWithAsyncValueComponent,
						message : EndsWithAsyncMessageComponent,
						messageKey : EndsWithAsyncMessageKeyComponent,
						dynamic : EndsWithAsyncDynamicComponent,
						add : EndsWithAsyncAddComponent,
						edit : EndsWithAsyncEditComponent,
			  },
	
	validators:{
						complete : EndsWithAsyncCompleteValidatorComponent,
						value : EndsWithAsyncValueValidatorComponent,
						message : EndsWithAsyncMessageValidatorComponent,
						messageKey : EndsWithAsyncMessageKeyValidatorComponent,
						dynamic : EndsWithAsyncDynamicValidatorComponent,
						add : EndsWithAsyncAddValidatorComponent,
			  },
}
