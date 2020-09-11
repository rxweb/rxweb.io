import { FileAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/complete/file-async-complete.component";

import { FileAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/complete/file-async-complete.component";
import { FileAsyncMaxFilesComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/maxFiles/file-async-max-files.component";

import { FileAsyncMaxFilesValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/maxFiles/file-async-max-files.component";
import { FileAsyncMinFilesComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/minFiles/file-async-min-files.component";

import { FileAsyncMinFilesValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/minFiles/file-async-min-files.component";
import { FileAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/message/file-async-message.component";

import { FileAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/message/file-async-message.component";
import { FileAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/messageKey/file-async-message-key.component";

import { FileAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/messageKey/file-async-message-key.component";
import { FileAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/dynamic/file-async-dynamic.component";
import { FileAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/dynamic/file-async-dynamic.component";
import { FileAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/add/file-async-add.component";

import { FileAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/fileAsync/add/file-async-add.component";
import { FileAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/fileAsync/edit/file-async-edit.component";

export const FILE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : FileAsyncCompleteComponent,
						maxFiles : FileAsyncMaxFilesComponent,
						minFiles : FileAsyncMinFilesComponent,
						message : FileAsyncMessageComponent,
						messageKey : FileAsyncMessageKeyComponent,
						dynamic : FileAsyncDynamicComponent,
						add : FileAsyncAddComponent,
						edit : FileAsyncEditComponent,
			  },
	
	validators:{
						complete : FileAsyncCompleteValidatorComponent,
						maxFiles : FileAsyncMaxFilesValidatorComponent,
						minFiles : FileAsyncMinFilesValidatorComponent,
						message : FileAsyncMessageValidatorComponent,
						messageKey : FileAsyncMessageKeyValidatorComponent,
						dynamic : FileAsyncDynamicValidatorComponent,
						add : FileAsyncAddValidatorComponent,
			  },
}
