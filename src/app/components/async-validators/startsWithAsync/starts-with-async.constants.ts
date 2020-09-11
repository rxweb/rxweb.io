import { StartsWithAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/complete/starts-with-async-complete.component";

import { StartsWithAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/complete/starts-with-async-complete.component";
import { StartsWithAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/value/starts-with-async-value.component";

import { StartsWithAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/value/starts-with-async-value.component";
import { StartsWithAsyncIsRestrictComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/isRestrict/starts-with-async-is-restrict.component";

import { StartsWithAsyncIsRestrictValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/isRestrict/starts-with-async-is-restrict.component";
import { StartsWithAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/message/starts-with-async-message.component";

import { StartsWithAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/message/starts-with-async-message.component";
import { StartsWithAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/messageKey/starts-with-async-message-key.component";

import { StartsWithAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/messageKey/starts-with-async-message-key.component";
import { StartsWithAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/dynamic/starts-with-async-dynamic.component";
import { StartsWithAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/dynamic/starts-with-async-dynamic.component";
import { StartsWithAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/add/starts-with-async-add.component";

import { StartsWithAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/startsWithAsync/add/starts-with-async-add.component";
import { StartsWithAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/startsWithAsync/edit/starts-with-async-edit.component";

export const STARTS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : StartsWithAsyncCompleteComponent,
						value : StartsWithAsyncValueComponent,
						isRestrict : StartsWithAsyncIsRestrictComponent,
						message : StartsWithAsyncMessageComponent,
						messageKey : StartsWithAsyncMessageKeyComponent,
						dynamic : StartsWithAsyncDynamicComponent,
						add : StartsWithAsyncAddComponent,
						edit : StartsWithAsyncEditComponent,
			  },
	
	validators:{
						complete : StartsWithAsyncCompleteValidatorComponent,
						value : StartsWithAsyncValueValidatorComponent,
						isRestrict : StartsWithAsyncIsRestrictValidatorComponent,
						message : StartsWithAsyncMessageValidatorComponent,
						messageKey : StartsWithAsyncMessageKeyValidatorComponent,
						dynamic : StartsWithAsyncDynamicValidatorComponent,
						add : StartsWithAsyncAddValidatorComponent,
			  },
}
