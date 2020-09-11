import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { FileSizeAsyncCompleteComponent } from './complete/file-size-async-complete.component';
import { FileSizeAsyncMaxSizeComponent } from './maxSize/file-size-async-max-size.component';
import { FileSizeAsyncMinSizeComponent } from './minSize/file-size-async-min-size.component';
import { FileSizeAsyncMessageComponent } from './message/file-size-async-message.component';
import { FileSizeAsyncMessageKeyComponent } from './messageKey/file-size-async-message-key.component';
import { FileSizeAsyncDynamicComponent } from './dynamic/file-size-async-dynamic.component';
import { FileSizeAsyncAddComponent } from './add/file-size-async-add.component';
import { FileSizeAsyncEditComponent } from './edit/file-size-async-edit.component';

@NgModule({
  declarations: [
	FileSizeAsyncCompleteComponent,
	FileSizeAsyncMaxSizeComponent,
	FileSizeAsyncMinSizeComponent,
	FileSizeAsyncMessageComponent,
	FileSizeAsyncMessageKeyComponent,
	FileSizeAsyncDynamicComponent,
	FileSizeAsyncAddComponent,
	FileSizeAsyncEditComponent,
  ],
entryComponents: [
	FileSizeAsyncCompleteComponent,
	FileSizeAsyncMaxSizeComponent,
	FileSizeAsyncMinSizeComponent,
	FileSizeAsyncMessageComponent,
	FileSizeAsyncMessageKeyComponent,
	FileSizeAsyncDynamicComponent,
	FileSizeAsyncAddComponent,
	FileSizeAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileSizeAsyncCompleteComponent,
	FileSizeAsyncMaxSizeComponent,
	FileSizeAsyncMinSizeComponent,
	FileSizeAsyncMessageComponent,
	FileSizeAsyncMessageKeyComponent,
	FileSizeAsyncDynamicComponent,
	FileSizeAsyncAddComponent,
	FileSizeAsyncEditComponent,
  ],

})
export class  FileSizeAsyncDecoratorsExtendedModule { }
