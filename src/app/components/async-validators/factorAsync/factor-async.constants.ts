import { FactorAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/complete/factor-async-complete.component";

import { FactorAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/complete/factor-async-complete.component";
import { FactorAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/fieldName/factor-async-field-name.component";

import { FactorAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/fieldName/factor-async-field-name.component";
import { FactorAsyncDividendComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/dividend/factor-async-dividend.component";

import { FactorAsyncDividendValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/dividend/factor-async-dividend.component";
import { FactorAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/message/factor-async-message.component";

import { FactorAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/message/factor-async-message.component";
import { FactorAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/messageKey/factor-async-message-key.component";

import { FactorAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/messageKey/factor-async-message-key.component";
import { FactorAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/dynamic/factor-async-dynamic.component";
import { FactorAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/dynamic/factor-async-dynamic.component";
import { FactorAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/add/factor-async-add.component";

import { FactorAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/factorAsync/add/factor-async-add.component";
import { FactorAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/factorAsync/edit/factor-async-edit.component";

export const FACTOR_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : FactorAsyncCompleteComponent,
						fieldName : FactorAsyncFieldNameComponent,
						dividend : FactorAsyncDividendComponent,
						message : FactorAsyncMessageComponent,
						messageKey : FactorAsyncMessageKeyComponent,
						dynamic : FactorAsyncDynamicComponent,
						add : FactorAsyncAddComponent,
						edit : FactorAsyncEditComponent,
			  },
	
	validators:{
						complete : FactorAsyncCompleteValidatorComponent,
						fieldName : FactorAsyncFieldNameValidatorComponent,
						dividend : FactorAsyncDividendValidatorComponent,
						message : FactorAsyncMessageValidatorComponent,
						messageKey : FactorAsyncMessageKeyValidatorComponent,
						dynamic : FactorAsyncDynamicValidatorComponent,
						add : FactorAsyncAddValidatorComponent,
			  },
}
