import { AlphaNumericAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/complete/alpha-numeric-async-complete.component";

import { AlphaNumericAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/complete/alpha-numeric-async-complete.component";
import { AlphaNumericAsyncAllowWhiteSpaceComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/allowWhiteSpace/alpha-numeric-async-allow-white-space.component";

import { AlphaNumericAsyncAllowWhiteSpaceValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/allowWhiteSpace/alpha-numeric-async-allow-white-space.component";
import { AlphaNumericAsyncLocaleComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/locale/alpha-numeric-async-locale.component";

import { AlphaNumericAsyncLocaleValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/locale/alpha-numeric-async-locale.component";
import { AlphaNumericAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/message/alpha-numeric-async-message.component";

import { AlphaNumericAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/message/alpha-numeric-async-message.component";
import { AlphaNumericAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/messageKey/alpha-numeric-async-message-key.component";

import { AlphaNumericAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/messageKey/alpha-numeric-async-message-key.component";
import { AlphaNumericAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/dynamic/alpha-numeric-async-dynamic.component";
import { AlphaNumericAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/dynamic/alpha-numeric-async-dynamic.component";
import { AlphaNumericAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/add/alpha-numeric-async-add.component";

import { AlphaNumericAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/add/alpha-numeric-async-add.component";
import { AlphaNumericAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/edit/alpha-numeric-async-edit.component";

export const ALPHA_NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : AlphaNumericAsyncCompleteComponent,
						allowWhiteSpace : AlphaNumericAsyncAllowWhiteSpaceComponent,
						locale : AlphaNumericAsyncLocaleComponent,
						message : AlphaNumericAsyncMessageComponent,
						messageKey : AlphaNumericAsyncMessageKeyComponent,
						dynamic : AlphaNumericAsyncDynamicComponent,
						add : AlphaNumericAsyncAddComponent,
						edit : AlphaNumericAsyncEditComponent,
			  },
	
	validators:{
						complete : AlphaNumericAsyncCompleteValidatorComponent,
						allowWhiteSpace : AlphaNumericAsyncAllowWhiteSpaceValidatorComponent,
						locale : AlphaNumericAsyncLocaleValidatorComponent,
						message : AlphaNumericAsyncMessageValidatorComponent,
						messageKey : AlphaNumericAsyncMessageKeyValidatorComponent,
						dynamic : AlphaNumericAsyncDynamicValidatorComponent,
						add : AlphaNumericAsyncAddValidatorComponent,
			  },
}
