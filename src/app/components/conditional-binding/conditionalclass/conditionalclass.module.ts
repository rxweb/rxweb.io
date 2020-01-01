import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CONDITIONALCLASS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionalclass/conditionalclass.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALCLASS_ROUTING } from "src/app/components/conditional-binding/conditionalclass/conditionalclass.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALCLASS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALCLASS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalclassModule { }



