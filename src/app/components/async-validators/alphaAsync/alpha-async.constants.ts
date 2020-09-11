import { AlphaAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/complete/alpha-async-complete.component";

import { AlphaAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/complete/alpha-async-complete.component";
import { AlphaAsyncLocaleComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/locale/alpha-async-locale.component";

import { AlphaAsyncLocaleValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/locale/alpha-async-locale.component";
import { AlphaAsyncAllowWhiteSpaceComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/allowWhiteSpace/alpha-async-allow-white-space.component";

import { AlphaAsyncAllowWhiteSpaceValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/allowWhiteSpace/alpha-async-allow-white-space.component";
import { AlphaAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/message/alpha-async-message.component";

import { AlphaAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/message/alpha-async-message.component";
import { AlphaAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/messageKey/alpha-async-message-key.component";

import { AlphaAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/messageKey/alpha-async-message-key.component";
import { AlphaAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/dynamic/alpha-async-dynamic.component";
import { AlphaAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/dynamic/alpha-async-dynamic.component";
import { AlphaAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/add/alpha-async-add.component";

import { AlphaAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/alphaAsync/add/alpha-async-add.component";
import { AlphaAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/alphaAsync/edit/alpha-async-edit.component";

export const ALPHA_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : AlphaAsyncCompleteComponent,
						locale : AlphaAsyncLocaleComponent,
						allowWhiteSpace : AlphaAsyncAllowWhiteSpaceComponent,
						message : AlphaAsyncMessageComponent,
						messageKey : AlphaAsyncMessageKeyComponent,
						dynamic : AlphaAsyncDynamicComponent,
						add : AlphaAsyncAddComponent,
						edit : AlphaAsyncEditComponent,
			  },
	
	validators:{
						complete : AlphaAsyncCompleteValidatorComponent,
						locale : AlphaAsyncLocaleValidatorComponent,
						allowWhiteSpace : AlphaAsyncAllowWhiteSpaceValidatorComponent,
						message : AlphaAsyncMessageValidatorComponent,
						messageKey : AlphaAsyncMessageKeyValidatorComponent,
						dynamic : AlphaAsyncDynamicValidatorComponent,
						add : AlphaAsyncAddValidatorComponent,
			  },
}
