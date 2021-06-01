import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FileobjectCompleteComponent } from './complete/fileObject-complete.component';
import { FileobjectExcludeImageComponent } from './excludeImageIndex/fileObject-excludeImageIndex.component';






@NgModule({
  declarations: [
    FileobjectCompleteComponent,FileobjectExcludeImageComponent
  ],
entryComponents: [
	FileobjectCompleteComponent,FileobjectExcludeImageComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FileobjectCompleteComponent,FileobjectExcludeImageComponent
  ],

})
export class  FileObjectDecoratorsExtendedModule { }