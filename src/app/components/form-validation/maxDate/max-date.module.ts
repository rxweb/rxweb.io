import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MAX_DATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/maxDate/max-date.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_DATE_ROUTING } from "src/app/components/form-validation/maxDate/max-date.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAX_DATE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_DATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxDateModule { }



