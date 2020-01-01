import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICFILE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicfile/dynamicfile.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICFILE_ROUTING } from "src/app/components/controls/dynamicfile/dynamicfile.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICFILE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICFILE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicfileModule { }



