import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LOGICAL_OPERATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/logicalOperators/logical-operators.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LOGICAL_OPERATORS_ROUTING } from "src/app/components/howto/logicalOperators/logical-operators.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LOGICAL_OPERATORS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LOGICAL_OPERATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LogicalOperatorsModule { }



