import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { EVEN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/even/even.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { EVEN_ROUTING } from "src/app/components/form-validation/even/even.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [EVEN_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: EVEN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class EvenModule { }



