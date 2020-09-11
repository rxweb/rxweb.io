import { FileSizeAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/complete/file-size-async-complete.component";

import { FileSizeAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/complete/file-size-async-complete.component";
import { FileSizeAsyncMaxSizeComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/maxSize/file-size-async-max-size.component";

import { FileSizeAsyncMaxSizeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/maxSize/file-size-async-max-size.component";
import { FileSizeAsyncMinSizeComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/minSize/file-size-async-min-size.component";

import { FileSizeAsyncMinSizeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/minSize/file-size-async-min-size.component";
import { FileSizeAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/message/file-size-async-message.component";

import { FileSizeAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/message/file-size-async-message.component";
import { FileSizeAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/messageKey/file-size-async-message-key.component";

import { FileSizeAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/messageKey/file-size-async-message-key.component";
import { FileSizeAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/dynamic/file-size-async-dynamic.component";
import { FileSizeAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/dynamic/file-size-async-dynamic.component";
import { FileSizeAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/add/file-size-async-add.component";

import { FileSizeAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileSizeAsync/add/file-size-async-add.component";
import { FileSizeAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/edit/file-size-async-edit.component";

export const FILE_SIZE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : FileSizeAsyncCompleteComponent,
						maxSize : FileSizeAsyncMaxSizeComponent,
						minSize : FileSizeAsyncMinSizeComponent,
						message : FileSizeAsyncMessageComponent,
						messageKey : FileSizeAsyncMessageKeyComponent,
						dynamic : FileSizeAsyncDynamicComponent,
						add : FileSizeAsyncAddComponent,
						edit : FileSizeAsyncEditComponent,
			  },

	validators:{
						complete : FileSizeAsyncCompleteValidatorComponent,
						maxSize : FileSizeAsyncMaxSizeValidatorComponent,
						minSize : FileSizeAsyncMinSizeValidatorComponent,
						message : FileSizeAsyncMessageValidatorComponent,
						messageKey : FileSizeAsyncMessageKeyValidatorComponent,
						dynamic : FileSizeAsyncDynamicValidatorComponent,
						add : FileSizeAsyncAddValidatorComponent,
			  },
}
