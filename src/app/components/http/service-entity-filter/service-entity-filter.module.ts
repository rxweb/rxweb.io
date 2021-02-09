import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SERVICE_ENTITY_FILTER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/service-entity-filter/service-entity-filter.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SERVICE_ENTITY_FILTER_ROUTING } from "src/app/components/http/service-entity-filter/service-entity-filter.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SERVICE_ENTITY_FILTER_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SERVICE_ENTITY_FILTER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Service_entity_filterModule { }



