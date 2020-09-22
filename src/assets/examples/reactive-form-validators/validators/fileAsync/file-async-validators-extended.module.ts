import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

import { FileAsyncCompleteValidatorComponent } from './complete/file-async-complete.component';
import { FileAsyncMaxFilesValidatorComponent } from './maxFiles/file-async-max-files.component';
import { FileAsyncMinFilesValidatorComponent } from './minFiles/file-async-min-files.component';
import { FileAsyncMessageValidatorComponent } from './message/file-async-message.component';
import { FileAsyncMessageKeyValidatorComponent } from './messageKey/file-async-message-key.component';
import { FileAsyncAddValidatorComponent } from './add/file-async-add.component';



@NgModule({
  declarations: [
	FileAsyncCompleteValidatorComponent,
	FileAsyncMaxFilesValidatorComponent,
	FileAsyncMinFilesValidatorComponent,
	FileAsyncMessageValidatorComponent,
	FileAsyncMessageKeyValidatorComponent,
	FileAsyncAddValidatorComponent,
  ],
entryComponents: [
	FileAsyncCompleteValidatorComponent,
	FileAsyncMaxFilesValidatorComponent,
	FileAsyncMinFilesValidatorComponent,
	FileAsyncMessageValidatorComponent,
	FileAsyncMessageKeyValidatorComponent,
	FileAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileAsyncCompleteValidatorComponent,
	FileAsyncMaxFilesValidatorComponent,
	FileAsyncMinFilesValidatorComponent,
	FileAsyncMessageValidatorComponent,
	FileAsyncMessageKeyValidatorComponent,
	FileAsyncAddValidatorComponent,
  ],

})
export class  FileAsyncValidatorsExtendedModule { }
