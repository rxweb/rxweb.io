import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MIN_DATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/minDate/min-date.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_DATE_ROUTING } from "src/app/components/form-validation/minDate/min-date.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MIN_DATE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_DATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinDateModule { }



