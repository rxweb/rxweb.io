import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { RANGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/range/range.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RANGE_ROUTING } from "src/app/components/form-validation/range/range.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RANGE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RANGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RangeModule { }



