import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMIC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamic/dynamic.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMIC_ROUTING } from "src/app/components/dynamic-forms/dynamic/dynamic.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMIC_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMIC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicModule { }



