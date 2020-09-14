import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FILE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/fileAsync/file-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_ASYNC_ROUTING } from "src/app/components/async-validators/fileAsync/file-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { FileAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/fileAsync/file-async-validators-extended.module';
import { FileAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/fileAsync/file-async-decorators-extended.module';



@NgModule({
  imports: [FILE_ASYNC_ROUTING , FileAsyncValidatorsExtendedModule, FileAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileAsyncModule { }



