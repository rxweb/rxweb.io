import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FileAsyncCompleteComponent } from './complete/file-async-complete.component';
import { FileAsyncMaxFilesComponent } from './maxFiles/file-async-max-files.component';
import { FileAsyncMinFilesComponent } from './minFiles/file-async-min-files.component';
import { FileAsyncMessageComponent } from './message/file-async-message.component';
import { FileAsyncMessageKeyComponent } from './messageKey/file-async-message-key.component';
import { FileAsyncAddComponent } from './add/file-async-add.component';
import { FileAsyncEditComponent } from './edit/file-async-edit.component';



@NgModule({
  declarations: [
	FileAsyncCompleteComponent,
	FileAsyncMaxFilesComponent,
	FileAsyncMinFilesComponent,
	FileAsyncMessageComponent,
	FileAsyncMessageKeyComponent,
	FileAsyncAddComponent,
	FileAsyncEditComponent,
  ],
entryComponents: [
    FileAsyncCompleteComponent,
	FileAsyncMaxFilesComponent,
	FileAsyncMinFilesComponent,
	FileAsyncMessageComponent,
	FileAsyncMessageKeyComponent,
	FileAsyncAddComponent,
	FileAsyncEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileAsyncCompleteComponent,
	FileAsyncMaxFilesComponent,
	FileAsyncMinFilesComponent,
	FileAsyncMessageComponent,
	FileAsyncMessageKeyComponent,
	FileAsyncAddComponent,
	FileAsyncEditComponent,
  ],

})
export class  FileAsyncDecoratorsExtendedModule { }
