
import { IbanAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ibanAsync/complete/iban-async-complete.component";

import { IbanAsyncCountryCodeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ibanAsync/countryCode/iban-async-country-code.component";

import { IbanAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ibanAsync/message/iban-async-message.component";

import { IbanAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ibanAsync/messageKey/iban-async-message-key.component";

import { IbanAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ibanAsync/dynamic/iban-async-dynamic.component";
import { IbanAsyncAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/ibanAsync/add/iban-async-add.component';

export const IBAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	validators:{
		          add:IbanAsyncAddValidatorComponent,
						complete : IbanAsyncCompleteValidatorComponent,
						countryCode : IbanAsyncCountryCodeValidatorComponent,
						message : IbanAsyncMessageValidatorComponent,
						messageKey : IbanAsyncMessageKeyValidatorComponent,
						dynamic : IbanAsyncDynamicValidatorComponent,
			  },
	
}
