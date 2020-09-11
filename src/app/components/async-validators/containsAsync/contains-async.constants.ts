import { ContainsAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/complete/contains-async-complete.component";

import { ContainsAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/complete/contains-async-complete.component";
import { ContainsAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/value/contains-async-value.component";

import { ContainsAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/value/contains-async-value.component";
import { ContainsAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/message/contains-async-message.component";

import { ContainsAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/message/contains-async-message.component";
import { ContainsAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/messageKey/contains-async-message-key.component";

import { ContainsAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/messageKey/contains-async-message-key.component";
import { ContainsAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/dynamic/contains-async-dynamic.component";
import { ContainsAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/dynamic/contains-async-dynamic.component";
import { ContainsAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/add/contains-async-add.component";

import { ContainsAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/containsAsync/add/contains-async-add.component";
import { ContainsAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/containsAsync/edit/contains-async-edit.component";

export const CONTAINS_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : ContainsAsyncCompleteComponent,
						value : ContainsAsyncValueComponent,
						message : ContainsAsyncMessageComponent,
						messageKey : ContainsAsyncMessageKeyComponent,
						dynamic : ContainsAsyncDynamicComponent,
						add : ContainsAsyncAddComponent,
						edit : ContainsAsyncEditComponent,
			  },
	
	validators:{
						complete : ContainsAsyncCompleteValidatorComponent,
						value : ContainsAsyncValueValidatorComponent,
						message : ContainsAsyncMessageValidatorComponent,
						messageKey : ContainsAsyncMessageKeyValidatorComponent,
						dynamic : ContainsAsyncDynamicValidatorComponent,
						add : ContainsAsyncAddValidatorComponent,
			  },
}
