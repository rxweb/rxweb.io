import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { SOURCE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/source/source.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SOURCE_ROUTING } from "src/app/components/static-binding/source/source.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SOURCE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SOURCE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class SourceModule { }



