import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { STRONGLY_TYPE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/stronglyType/strongly-type.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { STRONGLY_TYPE_ROUTING } from "src/app/components/howto/stronglyType/strongly-type.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [STRONGLY_TYPE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: STRONGLY_TYPE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class StronglyTypeModule { }



