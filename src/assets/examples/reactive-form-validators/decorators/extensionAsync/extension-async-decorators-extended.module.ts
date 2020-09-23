import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionAsyncCompleteComponent } from './complete/extension-async-complete.component';
import { ExtensionAsyncExtensionsComponent } from './extensions/extension-async-extensions.component';
import { ExtensionAsyncMessageComponent } from './message/extension-async-message.component';
import { ExtensionAsyncMessageKeyComponent } from './messageKey/extension-async-message-key.component';

import { ExtensionAsyncAddComponent } from './add/extension-async-add.component';
import { ExtensionAsyncEditComponent } from './edit/extension-async-edit.component';
import { ExtensionAsyncIsExcludeExtensionsComponent } from './isExcludeExtensions/extension-async-is-exclude-extensions.component';

@NgModule({
  declarations: [
	ExtensionAsyncCompleteComponent,
	ExtensionAsyncExtensionsComponent,
	ExtensionAsyncMessageComponent,
	ExtensionAsyncIsExcludeExtensionsComponent,
	ExtensionAsyncMessageKeyComponent,
	ExtensionAsyncAddComponent,
	ExtensionAsyncEditComponent,
  ],
entryComponents: [
	ExtensionAsyncCompleteComponent,
	ExtensionAsyncExtensionsComponent,
	ExtensionAsyncMessageComponent,
	ExtensionAsyncMessageKeyComponent,
	ExtensionAsyncIsExcludeExtensionsComponent,
	ExtensionAsyncAddComponent,
	ExtensionAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionAsyncCompleteComponent,
	ExtensionAsyncExtensionsComponent,
	ExtensionAsyncMessageComponent,
	ExtensionAsyncMessageKeyComponent,
	ExtensionAsyncIsExcludeExtensionsComponent,
	ExtensionAsyncAddComponent,
	ExtensionAsyncEditComponent,
  ],

})
export class  ExtensionAsyncDecoratorsExtendedModule { }
