import { ExtensionAsyncCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/complete/extension-async-complete.component";

import { ExtensionAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/extensionAsync/complete/extension-async-complete.component";
import { ExtensionAsyncExtensionsComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/extensions/extension-async-extensions.component";

import { ExtensionAsyncExtensionsValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/extensionAsync/extensions/extension-async-extensions.component";
import { ExtensionAsyncMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/message/extension-async-message.component";

import { ExtensionAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/extensionAsync/message/extension-async-message.component";
import { ExtensionAsyncMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/messageKey/extension-async-message-key.component";

import { ExtensionAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/extensionAsync/messageKey/extension-async-message-key.component";


import { ExtensionAsyncAddComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/add/extension-async-add.component";

import { ExtensionAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/extensionAsync/add/extension-async-add.component";
import { ExtensionAsyncEditComponent } from "src/assets/examples/reactive-form-validators/decorators/extensionAsync/edit/extension-async-edit.component";
import { ExtensionIsExcludeExtensionsComponent } from 'src/assets/examples/reactive-form-validators/decorators/extension/isExcludeExtensions/extension-is-exclude-extensions.component';
import { ExtensionAsyncIsExcludeExtensionsComponent } from 'src/assets/examples/reactive-form-validators/decorators/extensionAsync/isExcludeExtensions/extension-async-is-exclude-extensions.component';
import { ExtensionAsyncIsExcludeExtensionsValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/extensionAsync/isExcludeExtensions/extension-async-is-exclude-extensions.component';

export const EXTENSION_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : ExtensionAsyncCompleteComponent,
						extensions : ExtensionAsyncExtensionsComponent,
						message : ExtensionAsyncMessageComponent,
						messageKey : ExtensionAsyncMessageKeyComponent,
			
						add : ExtensionAsyncAddComponent,
						edit : ExtensionAsyncEditComponent,
						isExcludeExtensions: ExtensionAsyncIsExcludeExtensionsComponent
			  },
	
	validators:{
						complete : ExtensionAsyncCompleteValidatorComponent,
						extensions : ExtensionAsyncExtensionsValidatorComponent,
						message : ExtensionAsyncMessageValidatorComponent,
						messageKey : ExtensionAsyncMessageKeyValidatorComponent,
					
						add : ExtensionAsyncAddValidatorComponent,
						isExcludeExtensions: ExtensionAsyncIsExcludeExtensionsValidatorComponent
			  },
}
