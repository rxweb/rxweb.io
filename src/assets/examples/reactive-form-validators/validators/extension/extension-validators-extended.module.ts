import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionCompleteValidatorComponent } from './complete/extension-complete.component';
import { ExtensionExtensionsValidatorComponent } from './extensions/extension-extensions.component';
import { ExtensionIsExcludeExtensionsValidatorComponent } from './isExcludeExtensions/extension-is-exclude-extensions.component';
import { ExtensionConditionalExpressionValidatorComponent } from './conditionalExpression/extension-conditional-expression.component';
import { ExtensionMessageValidatorComponent } from './message/extension-message.component';
import { ExtensionMessageKeyValidatorComponent } from './messageKey/extension-message-key.component';
import { ExtensionDynamicValidatorComponent } from './dynamic/extension-dynamic.component';
import { ExtensionAddValidatorComponent } from './add/extension-add.component';

@NgModule({
  declarations: [
	ExtensionCompleteValidatorComponent,
	ExtensionExtensionsValidatorComponent,
	ExtensionIsExcludeExtensionsValidatorComponent,
	ExtensionConditionalExpressionValidatorComponent,
	ExtensionMessageValidatorComponent,
	ExtensionMessageKeyValidatorComponent,
	ExtensionDynamicValidatorComponent,
	ExtensionAddValidatorComponent,
  ],
entryComponents: [
	ExtensionCompleteValidatorComponent,
	ExtensionExtensionsValidatorComponent,
	ExtensionIsExcludeExtensionsValidatorComponent,
	ExtensionConditionalExpressionValidatorComponent,
	ExtensionMessageValidatorComponent,
	ExtensionMessageKeyValidatorComponent,
	ExtensionDynamicValidatorComponent,
	ExtensionAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionCompleteValidatorComponent,
	ExtensionExtensionsValidatorComponent,
	ExtensionIsExcludeExtensionsValidatorComponent,
	ExtensionConditionalExpressionValidatorComponent,
	ExtensionMessageValidatorComponent,
	ExtensionMessageKeyValidatorComponent,
	ExtensionDynamicValidatorComponent,
	ExtensionAddValidatorComponent,
  ],

})
export class  ExtensionValidatorsExtendedModule { }
