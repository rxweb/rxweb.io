import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { FACTOR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/factor/factor.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FACTOR_ROUTING } from "src/app/components/form-validation/factor/factor.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FACTOR_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FACTOR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FactorModule { }



