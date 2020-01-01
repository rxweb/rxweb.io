import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DIFFERENT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/different/different.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DIFFERENT_ROUTING } from "src/app/components/form-validation/different/different.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DIFFERENT_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DIFFERENT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DifferentModule { }



