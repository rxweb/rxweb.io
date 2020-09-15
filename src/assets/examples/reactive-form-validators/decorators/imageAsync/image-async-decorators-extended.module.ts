import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ImageAsyncCompleteComponent } from './complete/image-async-complete.component';
import { ImageAsyncMaxHeightComponent } from './maxHeight/image-async-max-height.component';
import { ImageAsyncMaxWidthComponent } from './maxWidth/image-async-max-width.component';
import { ImageAsyncMinHeightComponent } from './minHeight/image-async-min-height.component';
import { ImageAsyncMinWidthComponent } from './minWidth/image-async-min-width.component';
import { ImageAsyncMessageComponent } from './message/image-async-message.component';
import { ImageAsyncMessageKeyComponent } from './messageKey/image-async-message-key.component';
import { ImageAsyncDynamicComponent } from './dynamic/image-async-dynamic.component';
import { ImageAsyncAddComponent } from './add/image-async-add.component';
import { ImageAsyncEditComponent } from './edit/image-async-edit.component';

@NgModule({
  declarations: [
	ImageAsyncCompleteComponent,
	ImageAsyncMaxHeightComponent,
	ImageAsyncMaxWidthComponent,
	ImageAsyncMinHeightComponent,
	ImageAsyncMinWidthComponent,
	ImageAsyncMessageComponent,
	ImageAsyncMessageKeyComponent,
	ImageAsyncDynamicComponent,
	ImageAsyncAddComponent,
	ImageAsyncEditComponent,
  ],
entryComponents: [
	ImageAsyncCompleteComponent,
	ImageAsyncMaxHeightComponent,
	ImageAsyncMaxWidthComponent,
	ImageAsyncMinHeightComponent,
	ImageAsyncMinWidthComponent,
	ImageAsyncMessageComponent,
	ImageAsyncMessageKeyComponent,
	ImageAsyncDynamicComponent,
	ImageAsyncAddComponent,
	ImageAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ImageAsyncCompleteComponent,
	ImageAsyncMaxHeightComponent,
	ImageAsyncMaxWidthComponent,
	ImageAsyncMinHeightComponent,
	ImageAsyncMinWidthComponent,
	ImageAsyncMessageComponent,
	ImageAsyncMessageKeyComponent,
	ImageAsyncDynamicComponent,
	ImageAsyncAddComponent,
	ImageAsyncEditComponent,
  ],

})
export class  ImageAsyncDecoratorsExtendedModule { }
