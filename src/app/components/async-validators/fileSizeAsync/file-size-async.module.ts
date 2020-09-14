import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FILE_SIZE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/fileSizeAsync/file-size-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_SIZE_ASYNC_ROUTING } from "src/app/components/async-validators/fileSizeAsync/file-size-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { FileSizeValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/fileSize/file-size-validators-extended.module';
import { FileSizeDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/fileSize/file-size-decorators-extended.module';



@NgModule({
  imports: [FILE_SIZE_ASYNC_ROUTING ,FileSizeValidatorsExtendedModule, FileSizeDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_SIZE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileSizeAsyncModule { }



