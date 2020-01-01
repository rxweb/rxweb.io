import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { RTRIM_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/rtrim/rtrim.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RTRIM_ROUTING } from "src/app/components/sanitization/rtrim/rtrim.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RTRIM_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RTRIM_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RtrimModule { }



