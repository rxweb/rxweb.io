import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LAT_LONG_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/latLong/lat-long.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LAT_LONG_ROUTING } from "src/app/components/form-validation/latLong/lat-long.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LAT_LONG_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LAT_LONG_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LatLongModule { }



