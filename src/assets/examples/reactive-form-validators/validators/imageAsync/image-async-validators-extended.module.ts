import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ImageAsyncCompleteValidatorComponent } from './complete/image-async-complete.component';
import { ImageAsyncMaxHeightValidatorComponent } from './maxHeight/image-async-max-height.component';
import { ImageAsyncMaxWidthValidatorComponent } from './maxWidth/image-async-max-width.component';
import { ImageAsyncMinHeightValidatorComponent } from './minHeight/image-async-min-height.component';
import { ImageAsyncMinWidthValidatorComponent } from './minWidth/image-async-min-width.component';
import { ImageAsyncMessageValidatorComponent } from './message/image-async-message.component';
import { ImageAsyncMessageKeyValidatorComponent } from './messageKey/image-async-message-key.component';
import { ImageAsyncDynamicValidatorComponent } from './dynamic/image-async-dynamic.component';
import { ImageAsyncAddValidatorComponent } from './add/image-async-add.component';

@NgModule({
  declarations: [
	ImageAsyncCompleteValidatorComponent,
	ImageAsyncMaxHeightValidatorComponent,
	ImageAsyncMaxWidthValidatorComponent,
	ImageAsyncMinHeightValidatorComponent,
	ImageAsyncMinWidthValidatorComponent,
	ImageAsyncMessageValidatorComponent,
	ImageAsyncMessageKeyValidatorComponent,
	ImageAsyncDynamicValidatorComponent,
	ImageAsyncAddValidatorComponent,
  ],
entryComponents: [
	ImageAsyncCompleteValidatorComponent,
	ImageAsyncMaxHeightValidatorComponent,
	ImageAsyncMaxWidthValidatorComponent,
	ImageAsyncMinHeightValidatorComponent,
	ImageAsyncMinWidthValidatorComponent,
	ImageAsyncMessageValidatorComponent,
	ImageAsyncMessageKeyValidatorComponent,
	ImageAsyncDynamicValidatorComponent,
	ImageAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ImageAsyncCompleteValidatorComponent,
	ImageAsyncMaxHeightValidatorComponent,
	ImageAsyncMaxWidthValidatorComponent,
	ImageAsyncMinHeightValidatorComponent,
	ImageAsyncMinWidthValidatorComponent,
	ImageAsyncMessageValidatorComponent,
	ImageAsyncMessageKeyValidatorComponent,
	ImageAsyncDynamicValidatorComponent,
	ImageAsyncAddValidatorComponent,
  ],

})
export class  ImageAsyncValidatorsExtendedModule { }
