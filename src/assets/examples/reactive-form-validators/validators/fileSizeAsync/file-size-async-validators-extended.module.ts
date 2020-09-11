import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { FileSizeAsyncCompleteValidatorComponent } from './complete/file-size-async-complete.component';
import { FileSizeAsyncMaxSizeValidatorComponent } from './maxSize/file-size-async-max-size.component';
import { FileSizeAsyncMinSizeValidatorComponent } from './minSize/file-size-async-min-size.component';
import { FileSizeAsyncMessageValidatorComponent } from './message/file-size-async-message.component';
import { FileSizeAsyncMessageKeyValidatorComponent } from './messageKey/file-size-async-message-key.component';
import { FileSizeAsyncDynamicValidatorComponent } from './dynamic/file-size-async-dynamic.component';
import { FileSizeAsyncAddValidatorComponent } from './add/file-size-async-add.component';

@NgModule({
  declarations: [
	FileSizeAsyncCompleteValidatorComponent,
	FileSizeAsyncMaxSizeValidatorComponent,
	FileSizeAsyncMinSizeValidatorComponent,
	FileSizeAsyncMessageValidatorComponent,
	FileSizeAsyncMessageKeyValidatorComponent,
	FileSizeAsyncDynamicValidatorComponent,
	FileSizeAsyncAddValidatorComponent,
  ],
entryComponents: [
	FileSizeAsyncCompleteValidatorComponent,
	FileSizeAsyncMaxSizeValidatorComponent,
	FileSizeAsyncMinSizeValidatorComponent,
	FileSizeAsyncMessageValidatorComponent,
	FileSizeAsyncMessageKeyValidatorComponent,
	FileSizeAsyncDynamicValidatorComponent,
	FileSizeAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileSizeAsyncCompleteValidatorComponent,
	FileSizeAsyncMaxSizeValidatorComponent,
	FileSizeAsyncMinSizeValidatorComponent,
	FileSizeAsyncMessageValidatorComponent,
	FileSizeAsyncMessageKeyValidatorComponent,
	FileSizeAsyncDynamicValidatorComponent,
	FileSizeAsyncAddValidatorComponent,
  ],

})
export class  FileSizeAsyncValidatorsExtendedModule { }
