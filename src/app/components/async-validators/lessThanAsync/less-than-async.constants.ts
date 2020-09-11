import { LessThanAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/complete/less-than-async-complete.component";

import { LessThanAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/complete/less-than-async-complete.component";
import { LessThanAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/fieldName/less-than-async-field-name.component";

import { LessThanAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/fieldName/less-than-async-field-name.component";
import { LessThanAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/value/less-than-async-value.component";

import { LessThanAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/value/less-than-async-value.component";
import { LessThanAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/message/less-than-async-message.component";

import { LessThanAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/message/less-than-async-message.component";
import { LessThanAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/messageKey/less-than-async-message-key.component";

import { LessThanAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/messageKey/less-than-async-message-key.component";
import { LessThanAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/dynamic/less-than-async-dynamic.component";
import { LessThanAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/dynamic/less-than-async-dynamic.component";
import { LessThanAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/add/less-than-async-add.component";

import { LessThanAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/lessThanAsync/add/less-than-async-add.component";
import { LessThanAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/lessThanAsync/edit/less-than-async-edit.component";

export const LESS_THAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : LessThanAsyncCompleteComponent,
						fieldName : LessThanAsyncFieldNameComponent,
						value : LessThanAsyncValueComponent,
						message : LessThanAsyncMessageComponent,
						messageKey : LessThanAsyncMessageKeyComponent,
						dynamic : LessThanAsyncDynamicComponent,
						add : LessThanAsyncAddComponent,
						edit : LessThanAsyncEditComponent,
			  },
	
	validators:{
						complete : LessThanAsyncCompleteValidatorComponent,
						fieldName : LessThanAsyncFieldNameValidatorComponent,
						value : LessThanAsyncValueValidatorComponent,
						message : LessThanAsyncMessageValidatorComponent,
						messageKey : LessThanAsyncMessageKeyValidatorComponent,
						dynamic : LessThanAsyncDynamicValidatorComponent,
						add : LessThanAsyncAddValidatorComponent,
			  },
}
