import { NumericAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/complete/numeric-async-complete.component";

import { NumericAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/complete/numeric-async-complete.component";
import { NumericAsyncAcceptValueComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/acceptValue/numeric-async-accept-value.component";

import { NumericAsyncAcceptValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/acceptValue/numeric-async-accept-value.component";
import { NumericAsyncIsFormatComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/isFormat/numeric-async-is-format.component";

import { NumericAsyncIsFormatValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/isFormat/numeric-async-is-format.component";
import { NumericAsyncAllowDecimalComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/allowDecimal/numeric-async-allow-decimal.component";

import { NumericAsyncAllowDecimalValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/allowDecimal/numeric-async-allow-decimal.component";
import { NumericAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/message/numeric-async-message.component";

import { NumericAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/message/numeric-async-message.component";
import { NumericAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/messageKey/numeric-async-message-key.component";

import { NumericAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/messageKey/numeric-async-message-key.component";
import { NumericAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/dynamic/numeric-async-dynamic.component";
import { NumericAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/dynamic/numeric-async-dynamic.component";
import { NumericAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/add/numeric-async-add.component";

import { NumericAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numericAsync/add/numeric-async-add.component";
import { NumericAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/numericAsync/edit/numeric-async-edit.component";

export const NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : NumericAsyncCompleteComponent,
						acceptValue : NumericAsyncAcceptValueComponent,
						isFormat : NumericAsyncIsFormatComponent,
						allowDecimal : NumericAsyncAllowDecimalComponent,
						message : NumericAsyncMessageComponent,
						messageKey : NumericAsyncMessageKeyComponent,
						dynamic : NumericAsyncDynamicComponent,
						add : NumericAsyncAddComponent,
						edit : NumericAsyncEditComponent,
			  },
	
	validators:{
						complete : NumericAsyncCompleteValidatorComponent,
						acceptValue : NumericAsyncAcceptValueValidatorComponent,
						isFormat : NumericAsyncIsFormatValidatorComponent,
						allowDecimal : NumericAsyncAllowDecimalValidatorComponent,
						message : NumericAsyncMessageValidatorComponent,
						messageKey : NumericAsyncMessageKeyValidatorComponent,
						dynamic : NumericAsyncDynamicValidatorComponent,
						add : NumericAsyncAddValidatorComponent,
			  },
}
