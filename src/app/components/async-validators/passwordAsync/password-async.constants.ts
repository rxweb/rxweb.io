import { PasswordAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/complete/password-async-complete.component";

import { PasswordAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/complete/password-async-complete.component";
import { PasswordAsyncValidationComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/validation/password-async-validation.component";

import { PasswordAsyncValidationValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/validation/password-async-validation.component";
import { PasswordAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/message/password-async-message.component";

import { PasswordAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/message/password-async-message.component";
import { PasswordAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/messageKey/password-async-message-key.component";

import { PasswordAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/messageKey/password-async-message-key.component";
import { PasswordAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/dynamic/password-async-dynamic.component";
import { PasswordAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/dynamic/password-async-dynamic.component";
import { PasswordAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/add/password-async-add.component";

import { PasswordAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/passwordAsync/add/password-async-add.component";
import { PasswordAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/passwordAsync/edit/password-async-edit.component";

export const PASSWORD_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : PasswordAsyncCompleteComponent,
						validation : PasswordAsyncValidationComponent,
						message : PasswordAsyncMessageComponent,
						messageKey : PasswordAsyncMessageKeyComponent,
						dynamic : PasswordAsyncDynamicComponent,
						add : PasswordAsyncAddComponent,
						edit : PasswordAsyncEditComponent,
			  },
	
	validators:{
						complete : PasswordAsyncCompleteValidatorComponent,
						validation : PasswordAsyncValidationValidatorComponent,
						message : PasswordAsyncMessageValidatorComponent,
						messageKey : PasswordAsyncMessageKeyValidatorComponent,
						dynamic : PasswordAsyncDynamicValidatorComponent,
						add : PasswordAsyncAddValidatorComponent,
			  },
}
