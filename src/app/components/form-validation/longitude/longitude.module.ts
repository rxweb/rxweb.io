import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LONGITUDE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/longitude/longitude.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LONGITUDE_ROUTING } from "src/app/components/form-validation/longitude/longitude.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LONGITUDE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LONGITUDE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LongitudeModule { }



