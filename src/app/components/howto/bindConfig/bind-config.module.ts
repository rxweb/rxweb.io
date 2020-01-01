import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/bindConfig/bind-config.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { BIND_CONFIG_ROUTING } from "src/app/components/howto/bindConfig/bind-config.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [BIND_CONFIG_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class BindConfigModule { }



