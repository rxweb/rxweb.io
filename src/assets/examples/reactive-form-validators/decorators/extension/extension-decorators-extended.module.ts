import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionCompleteComponent } from './complete/extension-complete.component';
import { ExtensionExtensionsComponent } from './extensions/extension-extensions.component';
import { ExtensionIsExcludeExtensionsComponent } from './isExcludeExtensions/extension-is-exclude-extensions.component';
import { ExtensionConditionalExpressionComponent } from './conditionalExpression/extension-conditional-expression.component';
import { ExtensionMessageComponent } from './message/extension-message.component';
import { ExtensionMessageKeyComponent } from './messageKey/extension-message-key.component';
import { ExtensionDynamicComponent } from './dynamic/extension-dynamic.component';
import { ExtensionAddComponent } from './add/extension-add.component';
import { ExtensionEditComponent } from './edit/extension-edit.component';

@NgModule({
  declarations: [
	ExtensionCompleteComponent,
	ExtensionExtensionsComponent,
	ExtensionIsExcludeExtensionsComponent,
	ExtensionConditionalExpressionComponent,
	ExtensionMessageComponent,
	ExtensionMessageKeyComponent,
	ExtensionDynamicComponent,
	ExtensionAddComponent,
	ExtensionEditComponent,
  ],
entryComponents: [
	ExtensionCompleteComponent,
	ExtensionExtensionsComponent,
	ExtensionIsExcludeExtensionsComponent,
	ExtensionConditionalExpressionComponent,
	ExtensionMessageComponent,
	ExtensionMessageKeyComponent,
	ExtensionDynamicComponent,
	ExtensionAddComponent,
	ExtensionEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionCompleteComponent,
	ExtensionExtensionsComponent,
	ExtensionIsExcludeExtensionsComponent,
	ExtensionConditionalExpressionComponent,
	ExtensionMessageComponent,
	ExtensionMessageKeyComponent,
	ExtensionDynamicComponent,
	ExtensionAddComponent,
	ExtensionEditComponent,
  ],

})
export class  ExtensionDecoratorsExtendedModule { }
