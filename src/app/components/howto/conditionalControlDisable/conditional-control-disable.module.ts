import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DIRTY_CHECK_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/dirtyCheck/dirty-check.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { CONDITIONAL_CONTROL_DISABLE_ROUTING } from './conditional-control-disable.routing';



@NgModule({
  imports: [CONDITIONAL_CONTROL_DISABLE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DIRTY_CHECK_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalControlDisableModule { }



