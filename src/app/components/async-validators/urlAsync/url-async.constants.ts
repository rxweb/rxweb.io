import { UrlAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/complete/url-async-complete.component";

import { UrlAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/complete/url-async-complete.component";
import { UrlAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/message/url-async-message.component";

import { UrlAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/message/url-async-message.component";
import { UrlAsyncUrlValidationTypeComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/urlValidationType/url-async-url-validation-type.component";

import { UrlAsyncUrlValidationTypeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/urlValidationType/url-async-url-validation-type.component";
import { UrlAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/messageKey/url-async-message-key.component";

import { UrlAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/messageKey/url-async-message-key.component";
import { UrlAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/dynamic/url-async-dynamic.component";
import { UrlAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/dynamic/url-async-dynamic.component";
import { UrlAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/add/url-async-add.component";

import { UrlAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/urlAsync/add/url-async-add.component";
import { UrlAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/urlAsync/edit/url-async-edit.component";

export const URL_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : UrlAsyncCompleteComponent,
						message : UrlAsyncMessageComponent,
						urlValidationType : UrlAsyncUrlValidationTypeComponent,
						messageKey : UrlAsyncMessageKeyComponent,
						dynamic : UrlAsyncDynamicComponent,
						add : UrlAsyncAddComponent,
						edit : UrlAsyncEditComponent,
			  },

	validators:{
						complete : UrlAsyncCompleteValidatorComponent,
						message : UrlAsyncMessageValidatorComponent,
						urlValidationType : UrlAsyncUrlValidationTypeValidatorComponent,
						messageKey : UrlAsyncMessageKeyValidatorComponent,
						dynamic : UrlAsyncDynamicValidatorComponent,
						add : UrlAsyncAddValidatorComponent,
			  },
}
