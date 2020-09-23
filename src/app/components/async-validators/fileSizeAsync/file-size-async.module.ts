import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FILE_SIZE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/fileSizeAsync/file-size-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_SIZE_ASYNC_ROUTING } from "src/app/components/async-validators/fileSizeAsync/file-size-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { FileSizeAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/fileSizeAsync/file-size-async-validators-extended.module';
import { FileSizeAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/fileSizeAsync/file-size-async-decorators-extended.module';



@NgModule({
  imports: [FILE_SIZE_ASYNC_ROUTING ,FileSizeAsyncValidatorsExtendedModule, FileSizeAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_SIZE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileSizeAsyncModule { }



