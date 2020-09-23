
import { IbanCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/complete/iban-complete.component";

import { IbanCountryCodeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/countryCode/iban-country-code.component";

import { IbanConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/conditionalExpression/iban-conditional-expression.component";

import { IbanMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/message/iban-message.component";
import { IbanMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/messageKey/iban-message-key.component";
import { IbanDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/iban/dynamic/iban-dynamic.component";
import { IbanAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/iban/add/iban-add.component';

export const IBAN_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	
	validators:{
		add:IbanAddValidatorComponent,
						complete : IbanCompleteValidatorComponent,
						countryCode : IbanCountryCodeValidatorComponent,
						conditionalExpression : IbanConditionalExpressionValidatorComponent,
						message : IbanMessageValidatorComponent,
						messageKey : IbanMessageKeyValidatorComponent,
						dynamic : IbanDynamicValidatorComponent,
			  },
}
