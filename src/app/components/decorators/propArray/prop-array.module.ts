import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PROP_ARRAY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/decorators/propArray/prop-array.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PROP_ARRAY_ROUTING } from "src/app/components/decorators/propArray/prop-array.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PROP_ARRAY_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PROP_ARRAY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PropArrayModule { }



