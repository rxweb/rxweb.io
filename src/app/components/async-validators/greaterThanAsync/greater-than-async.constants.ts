import { GreaterThanAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/complete/greater-than-async-complete.component";

import { GreaterThanAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/fieldName/greater-than-async-field-name.component";

import { GreaterThanAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/fieldName/greater-than-async-field-name.component";
import { GreaterThanAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/value/greater-than-async-value.component";

import { GreaterThanAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/value/greater-than-async-value.component";
import { GreaterThanAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/message/greater-than-async-message.component";

import { GreaterThanAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/message/greater-than-async-message.component";
import { GreaterThanAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/messageKey/greater-than-async-message-key.component";

import { GreaterThanAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/messageKey/greater-than-async-message-key.component";
import { GreaterThanAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/dynamic/greater-than-async-dynamic.component";
import { GreaterThanAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/dynamic/greater-than-async-dynamic.component";
import { GreaterThanAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/add/greater-than-async-add.component";

import { GreaterThanAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/greaterThanAsync/add/greater-than-async-add.component";
import { GreaterThanAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/edit/greater-than-async-edit.component";
import { GreaterThanAsyncCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/greaterThanAsync/complete/greater-than-async-complete.component';

export const GREATER_THAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : GreaterThanAsyncCompleteComponent,
						fieldName : GreaterThanAsyncFieldNameComponent,
						value : GreaterThanAsyncValueComponent,
						message : GreaterThanAsyncMessageComponent,
						messageKey : GreaterThanAsyncMessageKeyComponent,
						dynamic : GreaterThanAsyncDynamicComponent,
						add : GreaterThanAsyncAddComponent,
						edit : GreaterThanAsyncEditComponent,
			  },
	
	validators:{
						complete : GreaterThanAsyncCompleteValidatorComponent,
						fieldName : GreaterThanAsyncFieldNameValidatorComponent,
						value : GreaterThanAsyncValueValidatorComponent,
						message : GreaterThanAsyncMessageValidatorComponent,
						messageKey : GreaterThanAsyncMessageKeyValidatorComponent,
						dynamic : GreaterThanAsyncDynamicValidatorComponent,
						add : GreaterThanAsyncAddValidatorComponent,
			  },
}
