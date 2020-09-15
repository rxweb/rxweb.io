import { ImageAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/complete/image-async-complete.component";

import { ImageAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/complete/image-async-complete.component";
import { ImageAsyncMaxHeightComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/maxHeight/image-async-max-height.component";

import { ImageAsyncMaxHeightValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/maxHeight/image-async-max-height.component";
import { ImageAsyncMaxWidthComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/maxWidth/image-async-max-width.component";

import { ImageAsyncMaxWidthValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/maxWidth/image-async-max-width.component";
import { ImageAsyncMinHeightComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/minHeight/image-async-min-height.component";

import { ImageAsyncMinHeightValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/minHeight/image-async-min-height.component";
import { ImageAsyncMinWidthComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/minWidth/image-async-min-width.component";

import { ImageAsyncMinWidthValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/minWidth/image-async-min-width.component";
import { ImageAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/message/image-async-message.component";

import { ImageAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/message/image-async-message.component";
import { ImageAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/messageKey/image-async-message-key.component";

import { ImageAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/messageKey/image-async-message-key.component";
import { ImageAsyncDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/dynamic/image-async-dynamic.component";
import { ImageAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/dynamic/image-async-dynamic.component";
import { ImageAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/add/image-async-add.component";

import { ImageAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/imageAsync/add/image-async-add.component";
import { ImageAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/imageAsync/edit/image-async-edit.component";

export const IMAGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : ImageAsyncCompleteComponent,
						maxHeight : ImageAsyncMaxHeightComponent,
						maxWidth : ImageAsyncMaxWidthComponent,
						minHeight : ImageAsyncMinHeightComponent,
						minWidth : ImageAsyncMinWidthComponent,
						message : ImageAsyncMessageComponent,
						messageKey : ImageAsyncMessageKeyComponent,
						dynamic : ImageAsyncDynamicComponent,
						add : ImageAsyncAddComponent,
						edit : ImageAsyncEditComponent,
			  },

	validators:{
						complete : ImageAsyncCompleteValidatorComponent,
						maxHeight : ImageAsyncMaxHeightValidatorComponent,
						maxWidth : ImageAsyncMaxWidthValidatorComponent,
						minHeight : ImageAsyncMinHeightValidatorComponent,
						minWidth : ImageAsyncMinWidthValidatorComponent,
						message : ImageAsyncMessageValidatorComponent,
						messageKey : ImageAsyncMessageKeyValidatorComponent,
						dynamic : ImageAsyncDynamicValidatorComponent,
						add : ImageAsyncAddValidatorComponent,
			  },
}
