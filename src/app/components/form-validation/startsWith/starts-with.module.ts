import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { STARTS_WITH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/startsWith/starts-with.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { STARTS_WITH_ROUTING } from "src/app/components/form-validation/startsWith/starts-with.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [STARTS_WITH_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: STARTS_WITH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class StartsWithModule { }



