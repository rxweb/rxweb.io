import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CONDITIONALLABEL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionallabel/conditionallabel.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALLABEL_ROUTING } from "src/app/components/conditional-binding/conditionallabel/conditionallabel.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALLABEL_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALLABEL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionallabelModule { }



