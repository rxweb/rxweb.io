import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { NUMERIC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/numeric/numeric.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NUMERIC_ROUTING } from "src/app/components/form-validation/numeric/numeric.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NUMERIC_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NUMERIC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NumericModule { }



