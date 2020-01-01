import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { FILE_SIZE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/fileSize/file-size.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_SIZE_ROUTING } from "src/app/components/form-validation/fileSize/file-size.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FILE_SIZE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_SIZE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileSizeModule { }



