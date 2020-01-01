import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ODD_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/odd/odd.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ODD_ROUTING } from "src/app/components/form-validation/odd/odd.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ODD_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ODD_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class OddModule { }



