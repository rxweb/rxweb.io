import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { GET_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/get/get.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GET_ROUTING } from "src/app/components/http/get/get.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GET_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GET_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GetModule { }



