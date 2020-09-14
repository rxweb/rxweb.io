import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import { FileCompleteValidatorComponent } from '../file/complete/file-complete.component';
import { FileMaxFilesValidatorComponent } from '../file/maxFiles/file-max-files.component';
import { FileMinFilesValidatorComponent } from '../file/minFiles/file-min-files.component';
import { FileMessageValidatorComponent } from '../file/message/file-message.component';
import { FileMessageKeyValidatorComponent } from '../file/messageKey/file-message-key.component';
import { FileAddValidatorComponent } from '../file/add/file-add.component';



@NgModule({
  declarations: [
	FileCompleteValidatorComponent,
	FileMaxFilesValidatorComponent,
	FileMinFilesValidatorComponent,
	FileMessageValidatorComponent,
	FileMessageKeyValidatorComponent,
	FileAddValidatorComponent,
  ],
entryComponents: [
    FileCompleteValidatorComponent,
	FileMaxFilesValidatorComponent,
	FileMinFilesValidatorComponent,
	FileMessageValidatorComponent,
	FileMessageKeyValidatorComponent,
	FileAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	FileCompleteValidatorComponent,
	FileMaxFilesValidatorComponent,
	FileMinFilesValidatorComponent,
	FileMessageValidatorComponent,
	FileMessageKeyValidatorComponent,
	FileAddValidatorComponent,
  ],

})
export class  FileAsyncValidatorsExtendedModule { }
