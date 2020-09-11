import { MaxDateAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/complete/max-date-async-complete.component";

import { MaxDateAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/complete/max-date-async-complete.component";
import { MaxDateAsyncValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/value/max-date-async-value.component";

import { MaxDateAsyncValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/value/max-date-async-value.component";
import { MaxDateAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/message/max-date-async-message.component";

import { MaxDateAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/message/max-date-async-message.component";
import { MaxDateAsyncFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/fieldName/max-date-async-field-name.component";

import { MaxDateAsyncFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/fieldName/max-date-async-field-name.component";
import { MaxDateAsyncOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/operator/max-date-async-operator.component";

import { MaxDateAsyncOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/operator/max-date-async-operator.component";
import { MaxDateAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/messageKey/max-date-async-message-key.component";

import { MaxDateAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/messageKey/max-date-async-message-key.component";
import { MaxDateAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/dynamic/max-date-async-dynamic.component";
import { MaxDateAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/dynamic/max-date-async-dynamic.component";
import { MaxDateAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/add/max-date-async-add.component";

import { MaxDateAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxDateAsync/add/max-date-async-add.component";
import { MaxDateAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxDateAsync/edit/max-date-async-edit.component";

export const MAX_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxDateAsyncCompleteComponent,
						value : MaxDateAsyncValueComponent,
						message : MaxDateAsyncMessageComponent,
						fieldName : MaxDateAsyncFieldNameComponent,
						operator : MaxDateAsyncOperatorComponent,
						messageKey : MaxDateAsyncMessageKeyComponent,
						dynamic : MaxDateAsyncDynamicComponent,
						add : MaxDateAsyncAddComponent,
						edit : MaxDateAsyncEditComponent,
			  },
	
	validators:{
						complete : MaxDateAsyncCompleteValidatorComponent,
						value : MaxDateAsyncValueValidatorComponent,
						message : MaxDateAsyncMessageValidatorComponent,
						fieldName : MaxDateAsyncFieldNameValidatorComponent,
						operator : MaxDateAsyncOperatorValidatorComponent,
						messageKey : MaxDateAsyncMessageKeyValidatorComponent,
						dynamic : MaxDateAsyncDynamicValidatorComponent,
						add : MaxDateAsyncAddValidatorComponent,
			  },
}
