import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CONDITIONALDESCRIPTION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionaldescription/conditionaldescription.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALDESCRIPTION_ROUTING } from "src/app/components/conditional-binding/conditionaldescription/conditionaldescription.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALDESCRIPTION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALDESCRIPTION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionaldescriptionModule { }



