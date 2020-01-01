import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CONTAINS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/contains/contains.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONTAINS_ROUTING } from "src/app/components/form-validation/contains/contains.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONTAINS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONTAINS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ContainsModule { }



