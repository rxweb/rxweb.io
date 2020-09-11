import { RangeAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/complete/range-async-complete.component";

import { RangeAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/complete/range-async-complete.component";
import { RangeAsyncMinimumNumberComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/minimumNumber/range-async-minimum-number.component";

import { RangeAsyncMinimumNumberValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/minimumNumber/range-async-minimum-number.component";
import { RangeAsyncMaximumNumberComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/maximumNumber/range-async-maximum-number.component";

import { RangeAsyncMaximumNumberValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/maximumNumber/range-async-maximum-number.component";
import { RangeAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/message/range-async-message.component";

import { RangeAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/message/range-async-message.component";
import { RangeAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/messageKey/range-async-message-key.component";

import { RangeAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/messageKey/range-async-message-key.component";
import { RangeAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/dynamic/range-async-dynamic.component";
import { RangeAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/dynamic/range-async-dynamic.component";
import { RangeAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/add/range-async-add.component";

import { RangeAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/rangeAsync/add/range-async-add.component";
import { RangeAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/rangeAsync/edit/range-async-edit.component";

export const RANGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : RangeAsyncCompleteComponent,
						minimumNumber : RangeAsyncMinimumNumberComponent,
						maximumNumber : RangeAsyncMaximumNumberComponent,
						message : RangeAsyncMessageComponent,
						messageKey : RangeAsyncMessageKeyComponent,
						dynamic : RangeAsyncDynamicComponent,
						add : RangeAsyncAddComponent,
						edit : RangeAsyncEditComponent,
			  },

	validators:{
						complete : RangeAsyncCompleteValidatorComponent,
						minimumNumber : RangeAsyncMinimumNumberValidatorComponent,
						maximumNumber : RangeAsyncMaximumNumberValidatorComponent,
						message : RangeAsyncMessageValidatorComponent,
						messageKey : RangeAsyncMessageKeyValidatorComponent,
						dynamic : RangeAsyncDynamicValidatorComponent,
						add : RangeAsyncAddValidatorComponent,
			  },
}
