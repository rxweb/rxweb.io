import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ONE_OF_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/oneOf/one-of.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ONE_OF_ROUTING } from "src/app/components/form-validation/oneOf/one-of.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ONE_OF_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ONE_OF_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class OneOfModule { }



