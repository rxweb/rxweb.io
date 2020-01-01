import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DISABLE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/decorators/disable/disable.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DISABLE_ROUTING } from "src/app/components/decorators/disable/disable.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DISABLE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DISABLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DisableModule { }



