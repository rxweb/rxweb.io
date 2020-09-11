import { CreditCardAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/creditCardAsync/complete/credit-card-async-complete.component";

import { CreditCardAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/creditCardAsync/complete/credit-card-async-complete.component";
import { CreditCardAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/creditCardAsync/dynamic/credit-card-async-dynamic.component";
import { CreditCardAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/creditCardAsync/dynamic/credit-card-async-dynamic.component";
import { CreditCardAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/creditCardAsync/add/credit-card-async-add.component";

import { CreditCardAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/creditCardAsync/add/credit-card-async-add.component";
import { CreditCardAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/creditCardAsync/edit/credit-card-async-edit.component";

export const CREDIT_CARD_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : CreditCardAsyncCompleteComponent,
						dynamic : CreditCardAsyncDynamicComponent,
						add : CreditCardAsyncAddComponent,
						edit : CreditCardAsyncEditComponent,
			  },
	
	validators:{
						complete : CreditCardAsyncCompleteValidatorComponent,
						dynamic : CreditCardAsyncDynamicValidatorComponent,
						add : CreditCardAsyncAddValidatorComponent,
			  },
}
