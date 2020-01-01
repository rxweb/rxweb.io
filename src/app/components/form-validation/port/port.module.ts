import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PORT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/port/port.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PORT_ROUTING } from "src/app/components/form-validation/port/port.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PORT_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PORT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PortModule { }



