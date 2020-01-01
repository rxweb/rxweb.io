import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { FILE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/file/file.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_ROUTING } from "src/app/components/form-validation/file/file.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FILE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileModule { }



