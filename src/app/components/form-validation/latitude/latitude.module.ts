import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LATITUDE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/latitude/latitude.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LATITUDE_ROUTING } from "src/app/components/form-validation/latitude/latitude.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LATITUDE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LATITUDE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LatitudeModule { }



