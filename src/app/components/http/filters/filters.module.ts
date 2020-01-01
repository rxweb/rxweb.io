import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { FILTERS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/filters/filters.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILTERS_ROUTING } from "src/app/components/http/filters/filters.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FILTERS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILTERS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FiltersModule { }



